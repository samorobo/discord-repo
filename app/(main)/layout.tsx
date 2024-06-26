import React from "react"
import NavigationSidebar from "@/components/navigation/navigation-sidebar";


 interface MainLayoutProps {
    children : React.ReactNode;
 }
 const MainLayout = ({ children} : MainLayoutProps) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
                <NavigationSidebar/>
            </div>
            <main className="md:pl-[72px] h-ful">
            {children}
            </main>
        </div>
    )
 }
 export default MainLayout