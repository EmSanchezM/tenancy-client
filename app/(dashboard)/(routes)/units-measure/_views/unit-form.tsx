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

import { Unit } from "@/lib/models/unit.model";
import { UnitsOfMeasureFormSchema, UnitsOfMeasureFormValues } from "@/lib/validation-schemes";
import { createUnitOfMeasure, updateUnitOfMeasure } from "@/lib/services/units-measure";

interface UnitOfMeasureFormProps {
  unit: Unit | null;
}

const UnitOfMeasureForm: FC<UnitOfMeasureFormProps> = ({ unit }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = unit ? 'Editar unidad de medida' : 'Crear unidad de medida';
  const description = unit ? 'Editar un unidad de medida.' : 'Agregar una nueva unidad de medida';
  const toastMessage = unit ? 'Unidad de medida actualizado.' : 'Unidad de medida creada.';
  const action = unit ? 'Guardar cambios' : 'Crear';

  const form = useForm<UnitsOfMeasureFormValues>({
    resolver: zodResolver(UnitsOfMeasureFormSchema),
    defaultValues: {
      name: unit?.name || '',
      symbol: unit?.symbol || '',
      factor: unit?.factor || 1,
    }
  });

  const handleOnUnitOfMeasureSubmit = async (data: UnitsOfMeasureFormValues) => {
    try {
      setLoading(true);
      if (unit) {
        await updateUnitOfMeasure(unit.id, data);
      } else {
        await createUnitOfMeasure(data);
      }

      router.refresh();
      router.push('/units-measure');
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnUnitOfMeasureSubmit)}>
          <section className='space-y-12'>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Datos generales
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general de la unidad de medida
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
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='symbol'
                    label='Simbolo'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='number'
                    name='factor'
                    label='Factor'
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

export default UnitOfMeasureForm;