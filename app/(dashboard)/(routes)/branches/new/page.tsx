import BranchForm from "../_views/branch-form";

export default async function CreateBranch() {
  return (
    <main className="pt-28 md:pl-72 p-8">
      <BranchForm branch={null} />
    </main>
  )
}