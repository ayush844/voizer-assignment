"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneInput } from "./PhoneInput";
import { useState } from "react";

export function TabsDemo() {
  const [phone, setPhone] = useState("");
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Test Call</TabsTrigger>
        <TabsTrigger value="password">Test Chat</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Test Call</CardTitle>
            <CardDescription>
              Simulate and evaluate the calling functionality. Use this feature
              to ensure smooth audio and video communication, check
              connectivity, and test call quality before initiating real
              interactions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="new">Select Phone Number</Label>
              <PhoneInput value={phone} onChange={setPhone} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Enter Name</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Enter Phone Number</Label>
              <Input id="new" type="text" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Call Me</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Test Chat</CardTitle>
            <CardDescription>
              Assess the messaging functionality. Use this tab to verify
              seamless text exchange, check for any delays or issues, and
              confirm the chat interface is working as expected.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="new">Select Phone Number</Label>
              <PhoneInput value={phone} onChange={setPhone} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Enter Name</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Enter Phone Number</Label>
              <Input id="new" type="text" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Chat With Me</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
