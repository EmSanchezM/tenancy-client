'use client';

import { FC, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { Form } from "@/components/ui/form";
import FormField from "@/components/form-components";
import { Button } from "@/components/ui/button";

import { createProduct, updateProduct } from "@/lib/services/produts";
import { Product } from "@/lib/models/product.model";
import { ProductFormSchema, ProductFormValues } from "@/lib/validation-schemes/product.schema";

interface ProductFormProps {
  product: Product | null;
  categories: { id: string; name: string }[];
}

const ProductForm: FC<ProductFormProps> = ({ product, categories }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = product ? 'Editar producto' : 'Crear producto';
  const description = product ? 'Editar un producto.' : 'Agregar una nueva producto';
  const toastMessage = product ? 'Producto actualizado.' : 'Producto creado.';
  const action = product ? 'Guardar cambios' : 'Crear';

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(ProductFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: product?.name || '',
      description: product?.description || '',
      category: product?.category?.id || '',
      price: product?.price || 0,
      variants: product?.variants || [{ name: '', price: 0 }],
    }
  });
  const { fields, append, remove } = useFieldArray({ control: form.control, name: 'variants' })

  const handleOnProductSubmit = async (data: ProductFormValues) => {
    try {
      setLoading(true);
      if (product) {
        await updateProduct(product.id, data);
      } else {
        await createProduct(data);
      }

      router.refresh();
      router.push('/products');
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnProductSubmit)}>
          <article className='space-y-12'>
            <section className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Datos generales
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general del producto
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
                    name='price'
                    label='Precio'
                    control={form.control}
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
            </section>
            <section className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Variantes
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Presentaciones del platillo
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                {
                  fields.map((field, index) => (
                    <div key={field.id}>
                      <div className='sm:col-span-3'>
                        <FormField
                          type='text'
                          control={form.control}
                          name={`variants.${index}.name`}
                          label='Nombre'
                        />
                      </div>
                      <div className='sm:col-span-3'>
                        <FormField
                          type='number'
                          name={`variants.${index}.price`}
                          label='Precio'
                          control={form.control}
                        />
                      </div>
                      <div className='sm:col-span-2 mt-2'>
                        <Button type='button' onClick={() => remove(index)}>Eliminar</Button>
                      </div>
                    </div>
                  ))
                }
                <div className='sm:col-span-3'>
                  <Button type='button' onClick={() => append({ name: '', price: 0 })}>Agregar variante</Button>
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

export default ProductForm;