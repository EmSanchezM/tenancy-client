import Navbar from "@/components/navigation/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen text-gray-300">
      <Navbar />
      {children}
    </div>
  );
};