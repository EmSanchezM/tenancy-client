export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex items-center justify-center h-full w-full dark:bg-orange-400 bg-orange-300">
      {children}
    </main>
  );
};