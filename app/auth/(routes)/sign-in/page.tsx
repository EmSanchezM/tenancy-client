"use client"
import { ChangeEvent, SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

export default function LoginAccount() {
  const router = useRouter();
  const [errors, setErrors] = useState<string>();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeEmailOrUsername = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setEmailOrUsername(value);
  }

  const handleOnChangePassword = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setPassword(value);
  }

  const handleSubmitLogin = async (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();

    try {
      const response = await signIn('credentials', { email: emailOrUsername, password, redirect: false });

      if (response?.error) {
        setErrors(response.error);
        return;
      }

      router.push('/');
    } catch (error) {
      toast.error('Something went wrong.');
    }
  }

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            {errors && (
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  {errors}
                </AlertDescription>
              </Alert>
            )}
            <CardTitle className="text-2xl text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Ingresa tu email o nombre de usuario y contraseña para iniciar
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmitLogin}>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="emailOrUsername">Correo o Nombre de usuario</Label>
                <Input id="emailOrUsername" type="text" placeholder="" name="emailOrUsername" value={emailOrUsername} onChange={handleOnChangeEmailOrUsername} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" name="password" value={password} onChange={handleOnChangePassword} />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" type="submit">Iniciar sesión</Button>
            </CardFooter>
          </form>
          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            Olvidaste tu contraseña?
            <Link href='/auth/password-recovery' className="text-blue-600 hover:underline ml-2">Recuperar contraseña</Link>
          </p>
        </Card>
      </div>
    </div>
  )
}