import PrinterForm from "../_views/printer-form";
import { getAllAreas } from "@/lib/services/areas";

export default async function CreatePrinter() {
  const { data: areas } = await getAllAreas();

  return (
    <main className="pt-28 md:pl-72 p-8">
      <PrinterForm printer={null} areas={areas} />
    </main>
  )
}