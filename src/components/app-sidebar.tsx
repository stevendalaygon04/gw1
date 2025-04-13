import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {toggleSidebar, open} = useSidebar()
  return (
    <Sidebar className="relative" collapsible="icon" {...props}>
        <div onClick={toggleSidebar} className="
        absolute -right-3 top-17 z-10">
          {
          open ? (
            <img src="./Vector.png" alt="vector"  />
          ) : (
            <img src="./Vectorflip.png" alt="vector"  />
          )
        }
        </div>
      <SidebarHeader>
       <div className="flex items-center justify-center border-b-2 p-2.5" >
        {
          open ? (
            <img src="./GWlogo.svg" alt="Sidebar" className=""  />
          ) : (
            <img src="./logostick.svg" alt="Sidebar" className="w-[46px] h-[54px]"  />
          )
        }
       </div>
      </SidebarHeader>

      <SidebarContent>
        <div className="overflow-hidden">
              {
            open ? (
              <div className="w-full flex items-center justify-center p-2.5 flex-col gap-2.5">
                <div className="flex items-center justify-center p-2.5 gap-7">
                <img src="./dashbicon.svg" alt="Sidebar" className="ml-6 w-[20px] h-[20px]" />
                <p className="text-[17px]" style={{ fontFamily: "Inter, sans-serif" }}>Overview</p>
                </div>
                <p className="w-full ml-11">DAILY OPERATION</p>
                <div className="w-full  flex items-start justify-start p-2.5 gap-7">
                <img src="./reserv.svg" alt="Sidebar" className="ml-6 w-[20px] h-[20px]" />
                <p className="text-[17px]" style={{ fontFamily: "Inter, sans-serif" }}>Reservations</p>
                </div>
                <div className="w-full  flex items-start justify-start p-2.5 gap-7">
                <img src="./calendar.svg" alt="Sidebar" className="ml-6 w-[20px] h-[20px]" />
                <p className="text-[17px]" style={{ fontFamily: "Inter, sans-serif" }}>Calendar</p>
                </div>
                <div className="w-full  flex items-start justify-start p-2.5 gap-7">
                <img src="./ticket.svg" alt="Sidebar" className="ml-6 w-[20px] h-[20px]" />
                <p className="text-[17px]" style={{ fontFamily: "Inter, sans-serif" }}>Ticket</p>
                </div>
                <div className="w-full  flex items-start justify-start p-2.5 gap-7">
                <img src="./prime_user.svg" alt="Sidebar" className="ml-6 w-[20px] h-[20px]" />
                <p className="text-[17px]" style={{ fontFamily: "Inter, sans-serif" }}>User</p>
                </div>
                <div className="w-full  flex items-start justify-start p-2.5 gap-7">
                <img src="./log.svg" alt="Sidebar" className="ml-6 w-[20px] h-[20px]" />
                <p className="text-[17px]" style={{ fontFamily: "Inter, sans-serif" }}>Log</p>
                </div>
                <p className="w-full ml-11">ACCOUNTING</p>
                <div className="w-full  flex items-start justify-start p-2.5 gap-7">
                <img src="./payment.svg" alt="Sidebar" className="ml-6 w-[20px] h-[20px]" />
                <p className="text-[17px]" style={{ fontFamily: "Inter, sans-serif" }}>Payment</p>
                </div>
              </div>
              
            ) : (
              <div className="w-full flex items-center justify-center p-2.5 flex-col gap-7">
              <img src="./dashbicon.svg" alt="Sidebar" className="w-[24px] h-[24px]" />
              <img src="./calendar.svg" alt="Sidebar" className="w-[24px] h-[24px]" /> 
              <img src="./reserv.svg" alt="Sidebar" className="w-[24px] h-[24px]"/> 
              <img src="./ticket.svg" alt="Sidebar" className="w-[26px] h-[26px]"/> 
              <img src="./prime_user.svg" alt="Sidebar" className="w-[26px] h-[26px]"/> 
              <img src="./log.svg" alt="Sidebar" className="w-[26px] h-[26px]"/> 
              <img src="./payment.svg" alt="Sidebar" className="w-[26px] h-[26px]"/>
              </div>

            )
            
          }
        </div>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
