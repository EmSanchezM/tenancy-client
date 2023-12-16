import { format } from "date-fns";
import { getAllPrinters } from "@/lib/services/printers";
import { PrinterColumn } from "./_views/columns";
import { PrintersClient } from "./_views/printers-table";

export default async function Printers() {

  const { data: printers } = await getAllPrinters();

  const formattedPrinters: PrinterColumn[] = printers.map((item) => ({
    id: item.id,
    name: item.name,
    ipAddress: item.ipAddress,
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-28 md:pl-72 p-8">
      <PrintersClient data={formattedPrinters} />
    </main>
  )
}