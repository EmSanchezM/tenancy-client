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

import { SupplierFormSchema, SupplierFormValues } from "@/lib/validation-schemes";
import { createSupplier, updateSupplier } from "@/lib/services/supplier";
import { Supplier } from "@/lib/models/supplier.model";

interface SupplierFormProps {
  supplier: Supplier | null;
}

const SupplierForm: FC<SupplierFormProps> = ({ supplier }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = supplier ? 'Editar proveedor' : 'Crear proveedor';
  const description = supplier ? 'Editar un proveedor.' : 'Agregar un nuevo proveedor';
  const toastMessage = supplier ? 'Proveedor actualizado.' : 'Proveedor creado.';
  const action = supplier ? 'Guardar cambios' : 'Crear';

  const form = useForm<SupplierFormValues>({
    resolver: zodResolver(SupplierFormSchema),
    defaultValues: {
      code: supplier?.code || '',
      name: supplier?.name || '',
      email: supplier?.email || '',
      phoneNumber: supplier?.phone || '',
      address: supplier?.address || '',
      description: supplier?.description || '',
    }
  });

  const handleOnsupplierSubmit = async (data: SupplierFormValues) => {
    try {
      setLoading(true);
      if (supplier) {
        await updateSupplier(supplier.id, data);
      } else {
        await createSupplier(data);
      }

      router.refresh();
      router.push('/suppliers');
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnsupplierSubmit)}>
          <section className='space-y-12'>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Datos generales
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general del proveedor
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    name='code'
                    label='Código de proveedor'
                    control={form.control}
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
                    type='email'
                    name='email'
                    label='Correo'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    name='phoneNumber'
                    label='Telefono'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='address'
                    label='Dirección'
                  />
                </div>
                <div className='sm:col-span-full'>
                  <FormField
                    type='textarea'
                    name='description'
                    label='Otros datos'
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

export default SupplierForm;