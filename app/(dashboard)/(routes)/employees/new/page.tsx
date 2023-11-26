import EmployeeForm from "../_views/employee-form";

export default async function CreateEmployee() {
  return (
    <main className="pt-28 md:pl-72 p-8">
      <EmployeeForm employee={null} />
    </main>
  )
}