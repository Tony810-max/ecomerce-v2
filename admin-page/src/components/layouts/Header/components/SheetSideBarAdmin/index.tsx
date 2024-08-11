"use client";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ContentSidebarAdmin from "./ContentSidebarAdmin";

const SheetSideBarAdmin = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <AlignJustify className="hover:cursor-pointer hover:opacity-50" />
      </SheetTrigger>
      <SheetContent side={"left"} className="space-y-4">
        <SheetHeader>
          <SheetTitle>Admin page</SheetTitle>
          <SheetDescription>This is the admin page</SheetDescription>
        </SheetHeader>
        <Separator />
        <ContentSidebarAdmin onSetOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default SheetSideBarAdmin;
