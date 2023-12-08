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

import { DeliveryDriver } from "@/lib/models/delivery-driver.model";
import { DeliveryDriverFormSchema, DeliveryDriverFormValues } from "@/lib/validation-schemes";
import { createDeliveryDriver, updateDeliveryDriver } from "@/lib/services/delivery-drivers";

interface DeliveryDriverColumn {
  deliveryDriver: DeliveryDriver | null;
}

const DeliveryDriverForm: FC<DeliveryDriverColumn> = ({ deliveryDriver }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = deliveryDriver ? 'Editar Conductor' : 'Crear Conductor';
  const description = deliveryDriver ? 'Editar un conductor.' : 'Agregar un nuevo conductor';
  const toastMessage = deliveryDriver ? 'Conductor actualizado.' : 'Conductor creado.';
  const action = deliveryDriver ? 'Guardar cambios' : 'Crear';

  const form = useForm<DeliveryDriverFormValues>({
    resolver: zodResolver(DeliveryDriverFormSchema),
    defaultValues: {
      firstName: deliveryDriver?.firstName || '',
      lastName: deliveryDriver?.lastName || '',
      contactInformation: {
        email: deliveryDriver?.contactInformation?.email || '',
        phoneNumbers: deliveryDriver?.contactInformation?.phoneNumbers || [''],
        website: deliveryDriver?.contactInformation?.website || '',
        facebook: deliveryDriver?.contactInformation?.facebook || '',
        instagram: deliveryDriver?.contactInformation?.instagram || '',
      },
    }
  });

  const handleOnDeliveryDriverSubmit = async (data: DeliveryDriverFormValues) => {
    try {
      setLoading(true);
      if (deliveryDriver) {
        await updateDeliveryDriver(deliveryDriver.id, data);
      } else {
        await createDeliveryDriver(data);
      }

      router.refresh();
      router.push('/delivery-drivers');
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnDeliveryDriverSubmit)}>
          <section className='space-y-12'>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Datos generales
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general del conductor
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='firstName'
                    label='Nombre'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    name='lastName'
                    label='Apellido'
                    control={form.control}
                  />
                </div>
              </div>
            </article>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800'>
                Información de contacto
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información para contactar el empleado
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='col-span-full'>
                  <FormField
                    type='email'
                    name='contactInformation.email'
                    label='Correo'
                    control={form.control}
                  />
                </div>
                <div className='col-span-full'>
                  <FormField
                    type='text'
                    name='contactInformation.phoneNumbers[0]'
                    label='Telefono(s)'
                    control={form.control}
                  />
                </div>
                <div className='col-span-full'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='contactInformation.website'
                    label='Sitio web'
                  />
                </div>
                <div className='col-span-full'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='contactInformation.facebook'
                    label='Facebook'
                  />
                </div>
                <div className='col-span-full'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='contactInformation.instagram'
                    label='Instagram'
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

export default DeliveryDriverForm;