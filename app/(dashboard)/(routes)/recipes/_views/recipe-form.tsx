'use client';

import { FC, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { Form } from "@/components/ui/form";
import { FormField } from "@/components/form-components";
import { Button } from "@/components/ui/button";

import { createRecipe, updateRecipe } from "@/lib/services/recipes";
import { Recipe } from "@/lib/models/recipe.model";
import { RecipeFormSchema, RecipeFormValues } from "@/lib/validation-schemes";
import { SelectFormat } from "@/lib/models/select-format.model";

interface RecipeFormProps {
  recipe: Recipe | null;
  products: SelectFormat[];
  categories: SelectFormat[];
  rawMaterials: SelectFormat[];
}

const RecipeForm: FC<RecipeFormProps> = ({ recipe, products, categories, rawMaterials }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = recipe ? 'Editar Receta' : 'Crear Receta';
  const description = recipe ? 'Editar una receta.' : 'Agregar una nueva receta';
  const toastMessage = recipe ? 'Receta actualizada.' : 'Receta creada.';
  const action = recipe ? 'Guardar cambios' : 'Crear';

  const form = useForm<RecipeFormValues>({
    resolver: zodResolver(RecipeFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: recipe?.name || '',
      category: recipe?.category || '',
      product: recipe?.product?.id || '',
      portions: recipe?.portions || 0,
      preparationTime: { time: recipe?.preparationTime.time, unit: recipe?.preparationTime.unit } || { time: '', unit: '' },
      difficulty: recipe?.difficulty || '',
    }
  });
  const { fields, append, remove } = useFieldArray({ control: form.control, name: 'ingredients', })

  const handleOnRecipeSubmit = async (data: RecipeFormValues) => {
    try {
      setLoading(true);
      if (recipe) {
        await updateRecipe(recipe.id, data);
      } else {
        await createRecipe(data);
      }

      router.refresh();
      router.push('/Recipes');
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error(error?.errorMessage ?? 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <Form {...form}>
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnRecipeSubmit)}>
          <article className='space-y-12'>
            <section className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Datos generales
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general del Receta
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <FormField
                    type='select'
                    name='category'
                    label='Categoría'
                    control={form.control}
                    items={categories}
                  />
                </div>
                <div className='sm:col-span-4'>
                  <FormField
                    type='select'
                    name='product'
                    label='Platillo'
                    control={form.control}
                    items={products}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='name'
                    label='Nombre'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='number'
                    name='portions'
                    label='Porciones'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    name='preparationTime.time'
                    label='Tiempo de preparación'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    name='preparationTime.unit'
                    label='Unidad'
                    control={form.control}
                  />
                </div>
              </div>
            </section>
            <section className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Ingredientes
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Insumos necesarios para crear el platillo
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                {
                  fields.map((field, index) => (
                    <div key={field.id}>
                      <div className='sm:col-span-3'>
                        <FormField
                          type='select'
                          control={form.control}
                          name={`ingredients.${index}.rawMaterial`}
                          label='Insumo'
                          items={rawMaterials}
                        />
                      </div>
                      <div className='sm:col-span-3'>
                        <FormField
                          type='number'
                          name={`ingredients.${index}.quantity`}
                          label='Cantidad'
                          control={form.control}
                        />
                      </div>
                      <div className='sm:col-span-3'>
                        <FormField
                          type='select'
                          name={`ingredients.${index}.unit`}
                          label='Unidad de medida'
                          control={form.control}
                          items={rawMaterials}
                        />
                      </div>
                      <div className='sm:col-span-2 mt-2'>
                        <Button type='button' onClick={() => remove(index)}>Eliminar</Button>
                      </div>
                    </div>
                  ))
                }
                <div className='sm:col-span-3'>
                  <Button type='button' onClick={() => append({ rawMaterial: '', quantity: 0, unit: '' })}>Agregar ingrediente</Button>
                </div>
              </div>
            </section>
          </article>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button
              type='button'
            >
              Cancelar
            </Button>
            <Button
              type='submit'
            >
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default RecipeForm;