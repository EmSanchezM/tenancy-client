import { format } from "date-fns";
import { EmployeeColumn } from "./_views/columns";
import { EmployeesClient } from "./_views/employees-table";
import { getAllEmployees } from "@/lib/services/employees";

export default async function Employees() {
  const { data: employees } = await getAllEmployees();

  const formattedEmployees: EmployeeColumn[] = employees.map((item) => ({
    id: item.id,
    firstName: item.firstName,
    lastName: item.lastName,
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-28 md:pl-72 p-8">
      <EmployeesClient data={formattedEmployees} />
    </main>
  )
}

