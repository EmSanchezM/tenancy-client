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

import { PrinterFormValues, PrinterFormSchema } from "@/lib/validation-schemes";
import { createPrinter, updatePrinter } from "@/lib/services/printers";
import { Printer } from "@/lib/models/printer.model";
import { SelectFormat } from "@/lib/models/select-format.model";

interface PrinterFormProps {
  printer: Printer | null;
  areas: SelectFormat[];
}

const PrinterForm: FC<PrinterFormProps> = ({ printer, areas }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = printer ? 'Editar impresora' : 'Crear impresora';
  const description = printer ? 'Editar un impresora.' : 'Agregar un nuevo impresora';
  const toastMessage = printer ? 'Impresora actualizado.' : 'Impresora creado.';
  const action = printer ? 'Guardar cambios' : 'Crear';

  const form = useForm<PrinterFormValues>({
    resolver: zodResolver(PrinterFormSchema),
    defaultValues: {
      name: printer?.name || '',
      model: printer?.model || '',
      serialNumber: printer?.serialNumber || '',
      ipAddress: printer?.ipAddress || '',
      tcpPort: printer?.tcpPort || 0,
      macAddress: printer?.macAddress || '',
      hostName: printer?.hostName || '',
      subnetMask: printer?.subnetMask || '',
      gateway: printer?.gateway || '',
      area: printer?.area.id || '',
    }
  });

  const handleOnPrinterSubmit = async (data: PrinterFormValues) => {
    try {
      setLoading(true);
      if (printer) {
        const process = await updatePrinter(printer.id, data);
        console.log(process)

      } else {
        await createPrinter(data);
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
        <form className='m-auto' onSubmit={form.handleSubmit(handleOnPrinterSubmit)}>
          <section className='space-y-12'>
            <article className='border-b border-gray-900/10 pb-10'>
              <h2 className='text-xl font-medium pr-2 leading-5 text-gray-800 mt-4'>
                Información general
              </h2>
              <p className='mt-1 text-sm leading-5 text-gray-600'>
                Información general de la impresora
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    name='namee'
                    label='Nombre'
                    control={form.control}
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='model'
                    label='Modelo'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='serialNumber'
                    label='Numero de serie'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='ipAddress'
                    label='Dirección IP'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='number'
                    control={form.control}
                    name='tcpPort'
                    label='Puerto'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='macAddress'
                    label='Dirección MAC'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='hostName'
                    label='HostName'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='subnetMask'
                    label='Mascara de subred'
                  />
                </div>
                <div className='sm:col-span-3'>
                  <FormField
                    type='text'
                    control={form.control}
                    name='gateway'
                    label='Puerta de enlace'
                  />
                </div>
                <div className='col-span-full'>
                  <FormField
                    type='select'
                    control={form.control}
                    name='area'
                    label='Areas'
                    items={areas}
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

export default PrinterForm;