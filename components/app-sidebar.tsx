import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
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
      title: "Admin Tools",
      url: "/tools",
      items: [
        {
          title: "Add new page",
          url: "/admin/create-wiki-page",
        },
      ],
    },
    {
      title: "Races",
      url: "/wiki/characters",
      items: [
        {
          title: "Dark Elves",
          url: "/wiki/races/dark-elves",
        },
        {
          title: "Dragons",
          url: "/wiki/races/dragons",
          isActive: true,
        },
        {
          title: "Dwarves",
          url: "/wiki/races/dwarves",
        },
        {
          title: "Elves",
          url: "/wiki/races/elves",
        },
        {
          title: "Humans",
          url: "/wiki/races/humans",
        },
        {
          title: "Orcs",
          url: "/wiki/races/orcs",
        },
      ],
    },
    {
      title: "Continents",
      url: "/continents/",
      items: [
        {
          title: "Alfar Saltus",
          url: "/wiki/continents/alfar-saltus",
        },
        {
          title: "Oloklerious",
          url: "/wiki/continents/oloklerious",
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
            <Link href="/">
              <div className="flex items-center justify-center">
                <Image
                  src="/Logo.jpg"
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
                        <SidebarMenuSubButton asChild>
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
      <SidebarRail />
    </Sidebar>
  );
}
