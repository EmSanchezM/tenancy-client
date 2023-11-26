import CategoryForm from "../_views/category-form";

export default async function CreateCategory() {
  return (
    <main className="pt-28 md:pl-72 p-8">
      <CategoryForm category={null} />
    </main>
  )
}