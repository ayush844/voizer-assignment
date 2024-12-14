"use client";

import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import Retell from "retell-sdk";

const client = new Retell({
  apiKey: process.env.NEXT_PUBLIC_apiKey,
});

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.

  const agentResponses = await client.agent.list();

  // Transform the response to only include the required fields
  const filteredAgents = agentResponses.map((agent) => ({
    id: agent.agent_id, // Extract id
    voice_id: agent.voice_id, // Extract voice_id
    agent_name: agent.agent_name, // Extract agent_name
    language: agent.language, // Extract language
  }));

  console.log(filteredAgents);

  return filteredAgents;
}

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const takeData = async () => {
      const temp = await getData();

      setData(temp);
    };

    takeData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
