import Link from "next/link"
import {
  BookOpen,
  Calendar,
  ChevronRight,
  ClipboardList,
  FileText,
  GraduationCap,
  ScrollText,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">UniMaster</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="#">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#">Contact</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Smart Attendance Management System
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Streamline attendance tracking with facial recognition and barcode scanning technology for a
                    seamless educational experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/login">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-foreground/20 blur-3xl opacity-20"></div>
                  <div className="absolute inset-[10%] bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-6 w-full h-full">
                        <div className="rounded-md bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="h-10 w-10 text-primary" />
                        </div>
                        <div className="rounded-md bg-blue-500/10 flex items-center justify-center">
                          <Users className="h-10 w-10 text-blue-500" />
                        </div>
                        <div className="rounded-md bg-amber-500/10 flex items-center justify-center">
                          <BookOpen className="h-10 w-10 text-amber-500" />
                        </div>
                        <div className="rounded-md bg-rose-500/10 flex items-center justify-center">
                          <Calendar className="h-10 w-10 text-rose-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Roles Section */}
        <section className="w-full py-12 md:py-24" id="learn-more">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  User Portals
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Access Your Dashboard</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our system provides specialized dashboards for different user roles. Choose your portal below.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-12">
              {/* Student Card */}
              <Card className="overflow-hidden transition-all hover:shadow-lg border-t-4 border-t-primary">
                <CardHeader className="p-6 pb-4">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Student Portal</CardTitle>
                  <CardDescription>Track attendance and manage exemption requests</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>View lecture attendance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Track exam attendance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Request exemptions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Download reports</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" asChild>
                    <Link href="/login?role=student">
                      Access Portal
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Lecturer Card */}
              <Card className="overflow-hidden transition-all hover:shadow-lg border-t-4 border-t-blue-500">
                <CardHeader className="p-6 pb-4">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                    <BookOpen className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">Lecturer Portal</CardTitle>
                  <CardDescription>Manage lecture sessions and record attendance</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Manage lecture sessions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Record attendance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Generate reports</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Track student performance</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="/login?role=lecturer">
                      Access Portal
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Academia Card */}
              <Card className="overflow-hidden transition-all hover:shadow-lg border-t-4 border-t-amber-500">
                <CardHeader className="p-6 pb-4">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10">
                    <ClipboardList className="h-6 w-6 text-amber-500" />
                  </div>
                  <CardTitle className="text-xl">Academia Portal</CardTitle>
                  <CardDescription>Manage exams and exemption reviews</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Create exam sessions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Record exam attendance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Review exemptions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Generate exam reports</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600" asChild>
                    <Link href="/login?role=academia">
                      Access Portal
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Deputy Registrar Card */}
              <Card className="overflow-hidden transition-all hover:shadow-lg border-t-4 border-t-rose-500">
                <CardHeader className="p-6 pb-4">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500/10">
                    <FileText className="h-6 w-6 text-rose-500" />
                  </div>
                  <CardTitle className="text-xl">Deputy Registrar</CardTitle>
                  <CardDescription>Manage exemptions and attendance reports</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Approve exemptions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>View attendance reports</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Manage student records</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Set system policies</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/login?role=deputy">
                      Access Portal
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Advanced Attendance Tracking</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our system offers cutting-edge technology for accurate and efficient attendance management.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <CardTitle>Barcode Scanning</CardTitle>
                  <CardDescription>Quickly scan student ID cards to instantly record attendance</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <CardTitle>Facial Recognition</CardTitle>
                  <CardDescription>Advanced AI-powered facial recognition for contactless attendance</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <CardTitle>Real-time Analytics</CardTitle>
                  <CardDescription>Instantly generate reports and analyze attendance patterns</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle>Role-Based Access</CardTitle>
                  <CardDescription>Secure access control with role-specific dashboards</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <ScrollText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Digital Exemptions</CardTitle>
                  <CardDescription>Streamlined exemption request and approval process</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" x2="8" y1="13" y2="13" />
                      <line x1="16" x2="8" y1="17" y2="17" />
                      <line x1="10" x2="8" y1="9" y2="9" />
                    </svg>
                  </div>
                  <CardTitle>Export Reports</CardTitle>
                  <CardDescription>Download and share attendance reports in multiple formats</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center lg:py-12">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              © 2025 UniMaster. All rights reserved.
            </p>
          </div>
          <div className="flex gap-2 md:ml-auto">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
