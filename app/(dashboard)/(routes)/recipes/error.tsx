'use client'

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="pt-28 md:pl-72 p-8">
      <section className='tracking-widest mt-4 text-center'>
        <h2 className='text-gray-500 text-6xl block'>Algo salio mal!</h2>
        <span className='text-gray-500 text-xl'>
          Consulta con el administrador del sistema. Disculpa las molestias
        </span>
      </section>
      <section className='flex items-center justify-center mt-4'>
        <Button variant={'secondary'} onClick={() => reset()}>Intenta de nuevo</Button>
      </section>
    </main>
  )
}