"use client"

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

export default function LoginAccount() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Ingresa tu email o username y contraseña para iniciar
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email or Username</Label>
              <Input id="email" type="email" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Iniciar sesión</Button>
          </CardFooter>

          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            {" "}
            Olvidaste tu contraseña?{" "}
            <span className="text-blue-600 hover:underline">Recuperar contraseña</span>
          </p>
        </Card>
      </div>
    </div>
  )
}