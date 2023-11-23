import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const PasswordRecovery = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Password recovery</CardTitle>
            <CardDescription className="text-center">
              Ingresa tu email o nombre de usuario para recuperar contraseña
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="emailOrUsername">Correo o Nombre de usuario</Label>
              <Input id="emailOrUsername" type="text" placeholder="" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit">Recuperar contraseña</Button>
          </CardFooter>
          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            Quieres iniciar sesión?
            <Link href='/auth/sign-in' className="text-blue-600 hover:underline ml-2">Iniciar sesión</Link>
          </p>
        </Card>
      </div>
    </div>
  )
}

export default PasswordRecovery