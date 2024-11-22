import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
        <div className="root-container">
            <div className="wrapper">{children}
            </div>   
        </div>
    </main>
  )
}
