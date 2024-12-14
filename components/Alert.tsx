import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo() {
  return (
    <Alert className=" my-4">
      <Terminal className="h-4 w-4" />
      <AlertTitle>NOTE</AlertTitle>
      <AlertDescription>
        All components and options here are for demonstration purposes only and
        do not affect the actual functionality of the application.
      </AlertDescription>
    </Alert>
  );
}
