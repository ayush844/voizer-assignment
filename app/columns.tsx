"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  voice_id: string;
  agent_name: string;
  language: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "voice_id",
    header: "voice_id",
  },
  {
    accessorKey: "agent_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          agent_name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "language",
    header: "language",
  },
];
