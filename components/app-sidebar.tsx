import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Characters",
      url: "#",
      items: [
        {
          title: "Dark Elves",
          url: "#",
        },
        {
          title: "Dragons",
          url: "#",
          isActive: true,
        },
        {
          title: "Dwarves",
          url: "#",
        },
        {
          title: "Elves",
          url: "#",
        },
        {
          title: "Humans",
          url: "#",
        },
        {
          title: "Orcs",
          url: "#",
        },
      ],
    },
    {
      title: "Continents",
      url: "#",
      items: [
        {
          title: "Oloklerious",
          url: "#",
        },
        {
          title: "Alfar Saltus",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="#">
              <div className="flex items-center justify-center">
                <Image
                  src="/Logo-dnd.jpg"
                  alt="Logo for the dnd campaign."
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </div>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Link href="/Help" passHref>
          <button>Help</button>
        </Link>
        <Link href="/Contact-form">
          <button>Contact</button>
        </Link>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
