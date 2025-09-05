import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  Plus,
  Projector,
  ChevronDown,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src={"./vercel.svg"} alt="logo" width={20} height={20} />
                <span>AmBir</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="mx-auto" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((menu) => {
                return (
                  <SidebarMenuItem key={menu.title}>
                    <SidebarMenuButton asChild>
                      <Link href={menu.url}>
                        <menu.icon />
                        <span>{menu.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {menu.title === "Inbox" && (
                      <SidebarMenuBadge>24</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Projector />
                    See all Projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Plus />
                    Add Project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Help
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/#">
                        <Projector />
                        See all Projects
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/#">
                        <Plus />
                        Add Project
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup>
          <SidebarGroupLabel>Nested Items</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Projector />
                    See all Projects
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/">
                        <Plus />
                        Add Project
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  John Doe
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
