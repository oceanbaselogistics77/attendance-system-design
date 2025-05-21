import type React from "react"
import { SidebarNav } from "@/components/layout/sidebar-nav"

export default function LecturerLayout({ children }: { children: React.ReactNode }) {
  return <SidebarNav userType="lecturer">{children}</SidebarNav>
}
