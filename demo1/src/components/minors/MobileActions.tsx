import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Button } from "../ui/button";

const MobileActions = () => {
  return (
    <section className="block md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">☰</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white p-4 w-60 flex flex-col gap-2 rounded-2xl border-1 mr-4 mt-2 shadow-2xs">
          <DropdownMenuLabel className="text-xs text-gray-600">
            Navigation
          </DropdownMenuLabel>
          <DropdownMenuItem className="border-b-1 p-1 pl-0 text-[14px] font-medium rounded-xs">
            Explore Artists
          </DropdownMenuItem>
          <DropdownMenuItem className="border-b-1 p-1 pl-0 text-[14px] font-medium rounded-xs">
            Become an Artist
          </DropdownMenuItem>
          <DropdownMenuItem className="border-b-1 p-1 pl-0 text-[14px] font-medium rounded-xs">
            {" "}
            Dashboard
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default MobileActions;
