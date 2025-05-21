import type React from "react"
import { SidebarNav } from "@/components/layout/sidebar-nav"

export default function DeputyLayout({ children }: { children: React.ReactNode }) {
  return <SidebarNav userType="deputy">{children}</SidebarNav>
}
