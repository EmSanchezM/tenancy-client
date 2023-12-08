'use client';

import { FC, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { Form } from "@/components/ui/form";
import { FormField } from "@/components/form-components";
import { Button } from "@/components/ui/button";

import { createCategory, updateCategory } from "@/lib/services/categories";

import { Category } from "@/lib/models/category.model";
import { CategoryFormSchema, CategoryFormValues } from "@/lib/validation-schemes";

interface CategoryFormProps {
  category: Category | null;
}

const CategoryForm: FC<CategoryFormProps> = ({ category }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = category ? 'Editar categoria' : 'Crear categoria';
  const description = category ? 'Editar un categoria.' : 'Agregar una nueva categoria';
  const toastMessage = category ? 'Categoria actualizado.' : 'Categoria creada.';
  const action = category ? 'Guardar cambios' : 'Crear';

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(CategoryFormSchema),
    defaultValues: {
      name: category?.name || '',
      description: category?.description || '',
    }
  });

  const handleOnCategorySubmit = async (data: CategoryFormValues) => {
    try {
      setLoading(true);
      if (category) {
        await updateCategory(category.id, data);
      } else {
        await createCategory(data);
      }

      router.refresh();
      router.push('/categories');
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error(error?.errorMessage ?? 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </section>
      <Separator />
      <Form {...form}>
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnCategorySubmit)}>
          <section className='space-y-12'>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Datos generales
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general del categoria
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='name'
                    label='Nombre'
                  />
                </div>
                <div className='sm:col-span-full'>
                  <FormField
                    type='textarea'
                    name='description'
                    label='Descripción'
                    control={form.control}
                  />
                </div>
              </div>
            </article>
          </section>
          <section className="mt-6 flex items-center justify-end gap-x-6">
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
          </section>
        </form>
      </Form>
    </>
  )
}

export default CategoryForm;