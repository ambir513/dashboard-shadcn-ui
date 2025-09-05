"use client";
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import Link from "next/link";

const Navbar = () => {
  const { setTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="py-2.5 px-4 flex justify-between items-center sticky top-0 bg-background z-10 border-b-1 border-b-zinc-800 mb-3  ">
      {/* LEFT */}
      <SidebarTrigger />
      {/* <Button variant="outline" onClick={toggleSidebar}>
        Custom Button
      </Button> */}
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        {/* THEME MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* PROFILE MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger className=" mr-2 rounded-full">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/176784906?v=4" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={12}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="rounded-full h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="rounded-full h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="rounded-full h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
