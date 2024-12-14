"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Info } from "lucide-react";

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Info className=" size-8 text-blue-800 text-center cursor-pointer font-bold" />
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Message</SheetTitle>
            <SheetDescription>
              Due to my semester exams and time constraints, I was unable to
              complete all the required functionalities for this assignment.
              However, I would greatly appreciate the opportunity to continue
              working on it and complete the remaining parts if more time could
              be granted.
            </SheetDescription>
          </SheetHeader>

          <SheetFooter>Thanks</SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
