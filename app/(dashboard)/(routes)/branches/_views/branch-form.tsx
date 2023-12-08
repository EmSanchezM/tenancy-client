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

import { Branch } from "@/lib/models/branch.model";
import { BranchFormSchema, BranchFormValues } from "@/lib/validation-schemes/branch.schema";
import { createBranch, updateBranch } from "@/lib/services/branches";

interface BranchFormProps {
  branch: Branch | null;
}

const BranchForm: FC<BranchFormProps> = ({ branch }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = branch ? 'Editar sucursal' : 'Crear sucursal';
  const description = branch ? 'Editar un sucursal.' : 'Agregar un nuevo sucursal';
  const toastMessage = branch ? 'Sucursal actualizado.' : 'Sucursal creado.';
  const action = branch ? 'Guardar cambios' : 'Crear';

  const form = useForm<BranchFormValues>({
    resolver: zodResolver(BranchFormSchema),
    defaultValues: {
      name: branch?.name || '',
      address: {
        address: branch?.address?.address || '',
        city: branch?.address?.city || '',
        state: branch?.address?.state || '',
        country: branch?.address?.country || '',
        postalCode: branch?.address?.postalCode || '',
      },
      contactInformation: {
        email: branch?.contactInformation?.email || '',
        phoneNumbers: branch?.contactInformation?.phoneNumbers || [''],
        website: branch?.contactInformation?.website || '',
        facebook: branch?.contactInformation?.facebook || '',
        instagram: branch?.contactInformation?.instagram || '',
      }
    }
  });

  const handleOnBranchSubmit = async (data: BranchFormValues) => {
    try {
      setLoading(true);
      if (branch) {
        await updateBranch(branch.id, data);
      } else {
        await createBranch(data);
      }

      router.refresh();
      router.push('/branches');
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnBranchSubmit)}>
          <section className='space-y-12'>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Información general
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general de la sucursal
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    name='name'
                    label='Nombre'
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
                Información para contactar la sucursal
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
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800'>
                Información de localización
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información de dirección de la sucursal
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

export default BranchForm;