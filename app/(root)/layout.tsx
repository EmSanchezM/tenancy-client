import { redirect } from 'next/navigation';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {

  if (true) {
    redirect(`/`);
  };

  return (
    <>
      {children}
    </>
  );
};