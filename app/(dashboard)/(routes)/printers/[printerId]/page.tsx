import { getPrinterById } from "@/lib/services/printers";
import { getAllAreas } from "@/lib/services/areas";
import PrinterForm from "../_views/printer-form";

interface PrinterParams {
  params: { printerId: string }
}

export default async function Printer({ params }: PrinterParams) {

  const { data: printer } = await getPrinterById(params.printerId);
  const { data: areas } = await getAllAreas();

  return (
    <main className="pt-28 md:pl-72 p-8">
      <PrinterForm printer={printer} areas={areas} />
    </main>
  )
}