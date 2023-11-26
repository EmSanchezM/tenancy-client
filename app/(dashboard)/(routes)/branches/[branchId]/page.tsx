import BranchForm from "../_views/branch-form";
import { getBranchById } from "@/lib/services/branches";

interface BranchParams {
  params: { branchId: string }
}

export default async function Branch({ params }: BranchParams) {

  const { data: branch } = await getBranchById(params.branchId);

  return (
    <main className="pt-28 md:pl-72 p-8">
      <BranchForm branch={branch} />
    </main>
  )
}