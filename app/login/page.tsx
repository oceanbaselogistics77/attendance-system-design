"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Check, GraduationCap, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const roleParam = searchParams.get("role")
  const [activeTab, setActiveTab] = useState("student")

  useEffect(() => {
    if (roleParam) {
      setActiveTab(roleParam)
    }
  }, [roleParam])

  // This would normally be a server action
  const login = (role: string, id: string) => {
    if (id) {
      switch (role) {
        case "student":
          router.push("/student")
          break
        case "lecturer":
          router.push("/lecturer")
          break
        case "academia":
          router.push("/academia")
          break
        case "deputy":
          router.push("/deputy")
          break
        default:
          router.push("/student")
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = event.target.id.value
    login(activeTab, id)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-primary/5 to-background p-4">
      <Card className="w-full max-w-md overflow-hidden shadow-lg">
        <CardHeader className="space-y-1 bg-primary/5 p-6">
          <div className="flex items-center justify-center mb-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">EduTrack</CardTitle>
          <CardDescription className="text-center">Sign in to access your dashboard</CardDescription>
        </CardHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="student"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Student
            </TabsTrigger>
            <TabsTrigger value="lecturer" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Lecturer
            </TabsTrigger>
            <TabsTrigger value="academia" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              Academia
            </TabsTrigger>
            <TabsTrigger value="deputy" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white">
              Deputy
            </TabsTrigger>
          </TabsList>
          <TabsContent value="student">
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="id">Student ID</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="id"
                      name="id"
                      placeholder="Enter your ID (e.g., S12345)"
                      className="pl-10"
                      defaultValue="S12345"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      className="pl-10"
                      defaultValue="password"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded border border-primary">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col p-6 pt-0">
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
                <div className="mt-4 text-center text-sm">
                  <a href="#" className="text-primary underline underline-offset-4 hover:text-primary/90">
                    Forgot your password?
                  </a>
                </div>
              </CardFooter>
            </form>
          </TabsContent>
          <TabsContent value="lecturer">
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="id">Lecturer ID</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="id"
                      name="id"
                      placeholder="Enter your ID (e.g., L12345)"
                      className="pl-10"
                      defaultValue="L12345"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      className="pl-10"
                      defaultValue="password"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded border border-blue-500">
                    <Check className="h-3 w-3 text-blue-500" />
                  </div>
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col p-6 pt-0">
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                  Sign In
                </Button>
                <div className="mt-4 text-center text-sm">
                  <a href="#" className="text-blue-500 underline underline-offset-4 hover:text-blue-600">
                    Forgot your password?
                  </a>
                </div>
              </CardFooter>
            </form>
          </TabsContent>
          <TabsContent value="academia">
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="id">Academia Staff ID</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="id"
                      name="id"
                      placeholder="Enter your ID (e.g., A12345)"
                      className="pl-10"
                      defaultValue="A12345"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      className="pl-10"
                      defaultValue="password"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded border border-amber-500">
                    <Check className="h-3 w-3 text-amber-500" />
                  </div>
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col p-6 pt-0">
                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
                  Sign In
                </Button>
                <div className="mt-4 text-center text-sm">
                  <a href="#" className="text-amber-500 underline underline-offset-4 hover:text-amber-600">
                    Forgot your password?
                  </a>
                </div>
              </CardFooter>
            </form>
          </TabsContent>
          <TabsContent value="deputy">
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="id">Deputy Registrar ID</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="id"
                      name="id"
                      placeholder="Enter your ID (e.g., D12345)"
                      className="pl-10"
                      defaultValue="D12345"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      className="pl-10"
                      defaultValue="password"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded border border-rose-500">
                    <Check className="h-3 w-3 text-rose-500" />
                  </div>
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col p-6 pt-0">
                <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                  Sign In
                </Button>
                <div className="mt-4 text-center text-sm">
                  <a href="#" className="text-rose-500 underline underline-offset-4 hover:text-rose-600">
                    Forgot your password?
                  </a>
                </div>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
