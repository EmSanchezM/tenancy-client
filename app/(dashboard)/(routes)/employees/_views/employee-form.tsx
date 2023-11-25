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

import { EmployeeFormValues, EmployeeFormSchema } from "@/lib/validation-schemes/employee.schema";
import { createEmployee, updateEmployee } from "@/lib/services/employees";
import { Employee } from "@/lib/models/employee.model";

interface EmployeeFormProps {
  employee: Employee | null;
}

const EmployeeForm: FC<EmployeeFormProps> = ({ employee }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = employee ? 'Editar empleado' : 'Crear empleado';
  const description = employee ? 'Editar un empleado.' : 'Agregar un nuevo empleado';
  const toastMessage = employee ? 'Empleado actualizado.' : 'Empleado creado.';
  const action = employee ? 'Guardar cambios' : 'Crear';

  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(EmployeeFormSchema),
    defaultValues: {
      firstName: employee?.firstName || '',
      lastName: employee?.lastName || '',
      workPosition: employee?.workPosition || '',
      workLocation: employee?.workLocation || '',
      address: {
        address: employee?.address?.address || '',
        city: employee?.address?.city || '',
        state: employee?.address?.state || '',
        country: employee?.address?.country || '',
        postalCode: employee?.address?.postalCode || '',
      },
      contactInformation: {
        email: employee?.contactInformation?.email || '',
        phoneNumbers: employee?.contactInformation?.phoneNumbers || [''],
        website: employee?.contactInformation?.website || '',
        facebook: employee?.contactInformation?.facebook || '',
        instagram: employee?.contactInformation?.instagram || '',
      },
      birthday: employee?.birthday ? new Date(employee?.birthday) : undefined,
    }
  });

  const handleOnEmployeeSubmit = async (data: EmployeeFormValues) => {
    try {
      setLoading(true);
      if (employee) {
        const process = await updateEmployee(employee.id, data);
        console.log(process)

      } else {
        await createEmployee(data);
      }

      router.refresh();
      router.push('/employees');
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnEmployeeSubmit)}>
          <article className='space-y-12'>
            <section className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Información personal
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información personal del empleado
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
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    name='workPosition'
                    label='Posición'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='workLocation'
                    label='Lugar de trabajo'
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
            </section>
            <section className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800'>
                Información de ubicación
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información de ubicación del empleado
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

export default EmployeeForm;