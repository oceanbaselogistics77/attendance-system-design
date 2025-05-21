import type React from "react"
import { SidebarNav } from "@/components/layout/sidebar-nav"

export default function AcademiaLayout({ children }: { children: React.ReactNode }) {
  return <SidebarNav userType="academia">{children}</SidebarNav>
}
