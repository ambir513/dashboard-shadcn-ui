import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";

const page = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User Badge Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-3">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2 ">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user have been verified
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* Information Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username: </span>
                <span>john.doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email: </span>
                <span>john.doe@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone: </span>
                <span>+1 245 487</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location: </span>
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role: </span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Joined a 2025.01.01
            </p>
          </div>
          {/* Card List Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-4/5 space-y-6">
          {/* User Card Container  */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/176784906?v=4" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              voluptatem maxime magni velit quae. Hic delectus saepe asperiores
              enim deleniti, itaque ipsa est totam quo aliquam architecto
              mollitia quibusdam nisi!
            </p>
          </div>
          {/* Chart  Container  */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
