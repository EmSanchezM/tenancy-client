'use client';

import { FC, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { Form } from "@/components/ui/form";
import FormField from "@/components/form-components";
import { Button } from "@/components/ui/button";

import { CustomerFormValues, customerFormSchema } from "@/lib/validation-schemes/customer.schema";
import { createCustomer, updateCustomer } from "@/lib/services/customers";
import { Customer } from "@/lib/models/customer.model";

interface CustomerFormProps {
  customer: Customer | null;
}

const CustomerForm: FC<CustomerFormProps> = ({ customer }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = customer ? 'Editar cliente' : 'Crear cliente';
  const description = customer ? 'Editar un cliente.' : 'Agregar un nuevo cliente';
  const toastMessage = customer ? 'Cliente actualizado.' : 'Cliente creado.';
  const action = customer ? 'Guardar cambios' : 'Crear';

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      firstName: customer?.firstName || '',
      lastName: customer?.lastName || '',
      address: {
        address: customer?.address?.address || '',
        city: customer?.address?.city || '',
        state: customer?.address?.state || '',
        country: customer?.address?.country || '',
        postalCode: customer?.address?.postalCode || '',
      },
      contactInformation: {
        email: customer?.contactInformation?.email || '',
        phoneNumbers: customer?.contactInformation?.phoneNumbers || [''],
        website: customer?.contactInformation?.website || '',
        facebook: customer?.contactInformation?.facebook || '',
        instagram: customer?.contactInformation?.instagram || '',
      },
      birthday: customer?.birthday ? new Date(customer?.birthday) : undefined,
    }
  });

  const handleOnCustomerSubmit = async (data: CustomerFormValues) => {
    try {
      setLoading(true);
      if (customer) {
        const process = await updateCustomer(customer.id, data);
        console.log(process)

      } else {
        await createCustomer(data);
      }

      router.refresh();
      router.push('/customers');
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnCustomerSubmit)}>
          <article className='space-y-12'>
            <section className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Información personal
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información personal del cliente
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    name='firstName'
                    label='Nombre'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='lastName'
                    label='Apellido'
                  />
                </div>
                <div className='col-span-full'>
                  <FormField
                    type='date'
                    control={form.control}
                    name='birth'
                    label='Fecha de nacimiento'
                  />
                </div>
              </div>
            </section>
            <section className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800'>
                Información de contacto
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información para contactar el cliente
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
            </section>
            <section className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800'>
                Información de facturación
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información de dirección del cliente
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='col-span-full sm:col-span-6'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='address.country'
                    label='País'
                  />
                </div>
                <div className='col-span-full sm:col-span-6'>
                  <FormField
                    type='text'
                    name='address.address'
                    label='Dirección'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-2 sm:col-start-1'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='address.state'
                    label='Departamento / Provincia / Estado'
                  />
                </div>
                <div className='sm:col-span-2'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='address.city'
                    label='Ciudad'
                  />
                </div>
                <div className='sm:col-span-2'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='address.postalCode'
                    label='Código postal'
                  />
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

export default CustomerForm;