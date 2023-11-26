import { getEmployeeById } from "@/lib/services/employees"
import EmployeeForm from "../_views/employee-form";

interface EmployeeParams {
  params: { employeeId: string }
}

export default async function Employee({ params }: EmployeeParams) {
  const { data: employee } = await getEmployeeById(params.employeeId);

  return (
    <main className="pt-28 md:pl-72 p-8">
      <EmployeeForm employee={employee} />
    </main>
  )
}