import UnitOfMeasureForm from "../_views/unit-form";

export default async function CreateUnitOfMeasure() {
  return (
    <main className="pt-28 md:pl-72 p-8">
      <UnitOfMeasureForm unit={null} />
    </main>
  )
}