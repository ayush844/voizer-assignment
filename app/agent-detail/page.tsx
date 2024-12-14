"use client";

import { useRouter } from "next/navigation"; // Correct import
import React, { useEffect, useState } from "react";

import { ProfileForm } from "@/components/AgentForm";
import Navigation from "@/components/Navigation";
import { ResizableDemo } from "@/components/Resizable";
import { TabsDemo } from "@/components/Tabs";

import Retell from "retell-sdk";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const client = new Retell({
  apiKey: "key_cfd6458f5c6cfb9812cc66a96c00",
});

const Page = () => {
  const [agent_name, setAgentName] = useState<string>("");

  const router = useRouter();
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Extract query params manually since `useRouter` in App Router doesn't support query directly
    const urlSearchParams = new URLSearchParams(window.location.search);
    const agentId = urlSearchParams.get("id");

    if (agentId) {
      console.log("agentId: " + agentId);
      setId(agentId);
    }
  }, []);

  useEffect(() => {
    async function getData() {
      if (id) {
        try {
          const agentResponse = await client.agent.retrieve(id);

          setAgentName(agentResponse.agent_name);

          console.log(agentResponse.agent_id);
        } catch (error) {
          console.error("Error fetching agent:", error);
        }
      }
    }

    if (id) {
      getData();
    }
  }, [id]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <div className=" flex flex-col w-full mr-4">
        {/* <div>
        <h1>{agent_name || "Loading..."}</h1>
      </div> */}
        <div className=" w-full top-0 py-6 flex items-center justify-center bg-pink-500">
          <Navigation agentname={agent_name} id={id} />
        </div>
        <div className="grid grid-cols-3 gap-20 w-full mt-12">
          <div className="col-span-2 row-span-full h-[80vh]  flex items-start justify-center -mt-8">
            <ProfileForm />
          </div>

          <div className="col-span-1 row-span-full h-[80vh]  flex items-center justify-center -mt-8">
            <TabsDemo />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Page;
