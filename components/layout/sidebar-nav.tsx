"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, BookOpen, Calendar, ClipboardList, FileText, Home, LogOut, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface SidebarNavProps {
  userType: "student" | "lecturer" | "academia" | "deputy"
  children: React.ReactNode
}

export function SidebarNav({ userType, children }: SidebarNavProps) {
  const pathname = usePathname()

  // Define color schemes for each user type
  const colorSchemes = {
    student: {
      headerBg: "bg-primary/10",
      icon: "text-primary",
      activeButton: "bg-primary text-primary-foreground",
      hoverButton: "hover:bg-primary/10",
      footerBg: "bg-primary/5",
    },
    lecturer: {
      headerBg: "bg-blue-500/10",
      icon: "text-blue-500",
      activeButton: "bg-blue-500 text-white",
      hoverButton: "hover:bg-blue-500/10",
      footerBg: "bg-blue-500/5",
    },
    academia: {
      headerBg: "bg-amber-500/10",
      icon: "text-amber-500",
      activeButton: "bg-amber-500 text-white",
      hoverButton: "hover:bg-amber-500/10",
      footerBg: "bg-amber-500/5",
    },
    deputy: {
      headerBg: "bg-rose-500/10",
      icon: "text-rose-500",
      activeButton: "bg-rose-500 text-white",
      hoverButton: "hover:bg-rose-500/10",
      footerBg: "bg-rose-500/5",
    },
  }

  const colors = colorSchemes[userType]

  const navItems = {
    student: [
      { href: "/student", label: "Dashboard", icon: Home },
      { href: "/student/lecture-attendance", label: "Lecture Attendance", icon: BookOpen },
      { href: "/student/exam-attendance", label: "Exam Attendance", icon: ClipboardList },
      { href: "/student/exemptions", label: "Exemption Requests", icon: FileText },
      { href: "/student/profile", label: "Profile", icon: User },
    ],
    lecturer: [
      { href: "/lecturer", label: "Dashboard", icon: Home },
      { href: "/lecturer/sessions", label: "Lecture Sessions", icon: Calendar },
      { href: "/lecturer/attendance", label: "Record Attendance", icon: ClipboardList },
      { href: "/lecturer/reports", label: "Reports", icon: BarChart },
      { href: "/lecturer/profile", label: "Profile", icon: User },
    ],
    academia: [
      { href: "/academia", label: "Dashboard", icon: Home },
      { href: "/academia/exams", label: "Exam Sessions", icon: Calendar },
      { href: "/academia/attendance", label: "Exam Attendance", icon: ClipboardList },
      { href: "/academia/exemptions", label: "Exemptions", icon: FileText },
      { href: "/academia/reports", label: "Reports", icon: BarChart },
      { href: "/academia/profile", label: "Profile", icon: User },
    ],
    deputy: [
      { href: "/deputy", label: "Dashboard", icon: Home },
      { href: "/deputy/exemptions", label: "Manage Exemptions", icon: FileText },
      { href: "/deputy/attendance", label: "Attendance Reports", icon: BarChart },
      { href: "/deputy/students", label: "Student Records", icon: Users },
      { href: "/deputy/profile", label: "Profile", icon: User },
    ],
  }

  const items = navItems[userType]
  const userTitles = {
    student: "Student",
    lecturer: "Lecturer",
    academia: "Academia Staff",
    deputy: "Deputy Registrar",
  }

  const userIcons = {
    student: <User className={`h-4 w-4 ${colors.icon}`} />,
    lecturer: <BookOpen className={`h-4 w-4 ${colors.icon}`} />,
    academia: <ClipboardList className={`h-4 w-4 ${colors.icon}`} />,
    deputy: <FileText className={`h-4 w-4 ${colors.icon}`} />,
  }

  const buttonColor = {
    student: "bg-primary hover:bg-primary/90 text-primary-foreground",
    lecturer: "bg-blue-500 hover:bg-blue-600 text-white",
    academia: "bg-amber-500 hover:bg-amber-600 text-white",
    deputy: "bg-rose-500 hover:bg-rose-600 text-white",
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className={`flex h-16 items-center border-b px-6 ${colors.headerBg}`}>
            <div className="flex items-center gap-2 font-semibold">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${colors.headerBg}`}>
                {userIcons[userType]}
              </div>
              <span>UniMaster</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={(isActive) => (isActive ? colors.activeButton : colors.hoverButton)}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className={`border-t p-6 ${colors.footerBg}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`h-10 w-10 rounded-full ${colors.headerBg} flex items-center justify-center`}>
                <User className={`h-5 w-5 ${colors.icon}`} />
              </div>
              <div>
                <p className="text-sm font-medium">{userTitles[userType]}</p>
                <p className="text-xs text-muted-foreground">{userType.charAt(0).toUpperCase()}12345</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className={`w-full ${buttonColor[userType]}`} asChild>
              <Link href="/">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Link>
            </Button>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">
          <header className="flex h-16 items-center gap-4 border-b bg-muted/40 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger className={colors.icon} />
            <div className="font-semibold">{userTitles[userType]} Dashboard</div>
          </header>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
