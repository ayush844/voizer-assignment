"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { Pencil } from "lucide-react";
import { Check } from "lucide-react";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";

import Retell from "retell-sdk";
import { toast } from "@/hooks/use-toast";

const client = new Retell({
  apiKey: process.env.NEXT_PUBLIC_apiKey,
});

const Navigation = ({ agentname = "JARVIS", id }) => {
  const [editing, setEditing] = useState(false);

  const [agent, setAgent] = useState(agentname);

  console.log("id is ", id);

  const updateAgent = async () => {
    if (editing) {
      if (id && typeof id == "string") {
        try {
          // Update the agent by passing agent_name in the request body
          const agentResponse = await client.agent.update(id, {
            response_engine: {
              type: "retell-llm",
              llm_id: "llm_234sdertfsdsfsdf",
            },
            agent_name: agent,
          });

          setEditing(false);

          console.log(agentResponse.agent_id); // Log the updated agent's ID
          console.log(agentResponse.agent_name); // Log the updated agent's name
        } catch (error) {
          console.error("Error updating agent:", error);
          if (error.response) {
            console.error("API Response:", error.response.data); // If error is API related
          } else {
            console.error("Network or connection error");
          }
        }
      }
    } else {
      setEditing(true);
    }
  };

  const updateAgent2 = () => {
    if (editing) {
      toast({
        title: "Using useState to upadte name in navigation",
        description:
          "was trying to use the Update Agent API but encountered a Connection error. For more details, please refer to the updateAgent function in @/components/Navigation.tsx.",
      });
    }
    setEditing((ed) => !ed);
  };

  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className="flex items-center gap-4">
            {editing ? (
              <Input
                type="text"
                className="text-4xl font-extrabold bg-transparent border-2"
                placeholder="edit agent name"
                value={agent || agentname}
                onChange={(e) => setAgent(e.target.value)}
              />
            ) : (
              <h1 className="text-4xl font-extrabold">{agent || agentname}</h1>
            )}

            <div
              className="flex items-center justify-center bg-white rounded-full p-2 cursor-pointer"
              onClick={updateAgent2}
            >
              {editing ? (
                <Check className=" size-6 text-blue-800" />
              ) : (
                <Pencil className=" size-6 text-blue-800" />
              )}
            </div>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
