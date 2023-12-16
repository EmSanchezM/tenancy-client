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

import { createRawMaterial, updateRawMaterial } from "@/lib/services/raw-material";
import { RawMaterial } from "@/lib/models/raw-material.model";
import { SelectFormat } from "@/lib/models/select-format.model";
import { RawMaterialFormSchema, RawMaterialFormValues } from "@/lib/validation-schemes";

interface RawMaterialFormProps {
  rawMaterial: RawMaterial | null;
  categories: SelectFormat[];
  suppliers: SelectFormat[];
  unitsOfMeasure: SelectFormat[];
}

const RawMaterialForm: FC<RawMaterialFormProps> = ({ rawMaterial, categories, suppliers, unitsOfMeasure }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = rawMaterial ? 'Editar Insumo' : 'Crear Insumo';
  const description = rawMaterial ? 'Editar un insumo.' : 'Agregar un nuevo insumo';
  const toastMessage = rawMaterial ? 'Insumo actualizado.' : 'Insumo creado.';
  const action = rawMaterial ? 'Guardar cambios' : 'Crear';

  const form = useForm<RawMaterialFormValues>({
    resolver: zodResolver(RawMaterialFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: rawMaterial?.name || '',
      description: rawMaterial?.description || '',
      expirationDate: rawMaterial?.expirationDate || undefined,
      price: rawMaterial?.price || 0,
      costPrice: rawMaterial?.costPrice || 0,
      quantity: rawMaterial?.quantity || 0,
      minStock: rawMaterial?.minStock || 0,
      maxStock: rawMaterial?.maxStock || 0,
      category: rawMaterial?.category?.id || '',
      suppliers: rawMaterial?.suppliers[0].id || '',
      unitsOfMeasure: rawMaterial?.unitsOfMeasure[0]?.id || '',
    }
  });

  const handleOnRawMaterialSubmit = async (data: RawMaterialFormValues) => {
    try {
      setLoading(true);
      if (rawMaterial) {
        await updateRawMaterial(rawMaterial.id, data);
      } else {
        await createRawMaterial(data);
      }

      router.refresh();
      router.push('/raw-materials');
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnRawMaterialSubmit)}>
          <section className='space-y-12'>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Datos generales
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general del insumo o materia prima
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <FormField type='barcode' name='barCode' label='Código de barra' control={form.control} />
                </div>
                <div className='sm:col-span-3'>
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
                    type='select'
                    name='suppliers'
                    label='Proveedor(es)'
                    control={form.control}
                    items={suppliers}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='select'
                    name='unitsOfMeasure'
                    label='Unidad de medida(s)'
                    control={form.control}
                    items={unitsOfMeasure}
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
                    name='quantity'
                    label='Cantidad'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='number'
                    name='minStock'
                    label='Mínimo de existencias'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='number'
                    name='maxStock'
                    label='Maximo de existencias'
                    control={form.control}
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
                <div className='sm:col-span-3'>
                  <FormField
                    type='number'
                    name='costPrice'
                    label='Precio de costo'
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

export default RawMaterialForm;