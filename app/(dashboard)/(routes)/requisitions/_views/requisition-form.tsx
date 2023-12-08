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

import { createRequisition, updateRequisition } from "@/lib/services/requisitions";
import { Requisition } from "@/lib/models/requisition.model";
import { RequisitionFormSchema, RequisitionFormValues } from "@/lib/validation-schemes";
import { SelectFormat } from "@/lib/models/select-format.model";

interface RequisitionFormProps {
  requisition: Requisition | null;
  areas: SelectFormat[];
  rawMaterials: SelectFormat[];
  unitsOfMeasure: SelectFormat[];
}

const RequisitionForm: FC<RequisitionFormProps> = ({ requisition, areas, rawMaterials, unitsOfMeasure }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = requisition ? 'Editar Requisición' : 'Crear Requisición';
  const description = requisition ? 'Editar un Requisición.' : 'Agregar una nueva Requisición';
  const toastMessage = requisition ? 'Requisición actualizada.' : 'Requisición creada.';
  const action = requisition ? 'Guardar cambios' : 'Crear';

  const form = useForm<RequisitionFormValues>({
    resolver: zodResolver(RequisitionFormSchema),
    mode: 'onChange',
    defaultValues: {
      area: requisition?.area?.id || '',
      dateToMeet: undefined,
      items: [{ product: '', quantity: 1, unit: '', price: 1 }]
    }
  });
  const { fields, append, remove } = useFieldArray({ control: form.control, name: 'items' })

  const handleOnRequisitionSubmit = async (data: RequisitionFormValues) => {
    try {
      setLoading(true);
      if (requisition) {
        await updateRequisition(requisition.id, data);
      } else {
        await createRequisition(data);
      }

      router.refresh();
      router.push('/requisitions');
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnRequisitionSubmit)}>
          <section className='space-y-12'>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Datos generales
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general del Requisitiono
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <FormField
                    type='select'
                    name='area'
                    label='Area donde se solicita'
                    control={form.control}
                    items={areas}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='date'
                    control={form.control}
                    name='dateToMeet'
                    label='Fecha a cumplir'
                  />
                </div>
              </div>
            </article>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Insumos a solicitar
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Todos los insumos a solicitar en la requisición
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                {
                  fields.map((field, index) => (
                    <div key={field.id}>
                      <div className='sm:col-span-3'>
                        <FormField
                          type='select'
                          control={form.control}
                          name={`items.${index}.product`}
                          label='Insumo'
                          items={rawMaterials}
                        />
                      </div>
                      <div className='sm:col-span-3'>
                        <FormField
                          type='select'
                          control={form.control}
                          name={`items.${index}.unit`}
                          label='Unidad de medida'
                          items={unitsOfMeasure}
                        />
                      </div>
                      <div className='sm:col-span-3'>
                        <FormField
                          type='number'
                          name={`items.${index}.quantity`}
                          label='Camtidad'
                          control={form.control}
                        />
                      </div>
                      <div className='sm:col-span-3'>
                        <FormField
                          type='number'
                          name={`items.${index}.price`}
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
                  <Button type='button' onClick={() => append({ product: '', quantity: 0, price: 0, unit: '' })}>Agregar item</Button>
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

export default RequisitionForm;