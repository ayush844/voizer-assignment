"use client";

import * as React from "react";
import { Hash, Settings, AudioLines, Calendar } from "lucide-react";

// import { Label } from "@/components/ui/label";

import { Calendar as CalenderComponent } from "@/components/ui/calendar";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { AlertDemo } from "./Alert";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import Retell from "retell-sdk";

const client = new Retell({
  apiKey: process.env.NEXT_PUBLIC_apiKey,
});

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Select voice",
      url: "#",
      icon: AudioLines,
      isActive: true,
    },
    {
      title: "Setting",
      url: "#",
      icon: Settings,
      isActive: false,
    },
    {
      title: "Schedule",
      url: "#",
      icon: Calendar,
      isActive: false,
    },
    {
      title: "Analytics",
      url: "#",
      icon: Hash,
      isActive: false,
    },
  ],
};

const analytics = [
  {
    label: "Page Views",
    amt: "12536",
  },
  {
    label: "Total Visits",
    amt: "4276",
  },
  {
    label: "Bounce Rate",
    amt: "58.2%",
  },
  {
    label: "Conversion Rate",
    amt: "2.7%",
  },
  {
    label: "Active User",
    amt: "1230",
  },
  {
    label: "Revenue",
    amt: "$5760",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const { setOpen } = useSidebar();

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const [accents, setAccents] = React.useState<(string | undefined)[]>([]);

  const [voices, setVoices] = React.useState([]);

  React.useEffect(() => {
    async function getVoices() {
      const voiceResponses = await client.voice.list();

      setVoices(voiceResponses);

      const uniqueAccents: (string | undefined)[] = Array.from(
        new Set(
          voiceResponses
            .map((voice) => voice.accent?.trim())
            .filter((accent) => accent !== "")
        )
      )
        .sort()
        .slice(0, 8);

      setAccents(uniqueAccents);

      // console.log(voiceResponses);
    }

    getVoices();
  }, []);

  console.log(voices);

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item);

                        setOpen(true);
                      }}
                      isActive={activeItem.title === item.title}
                      className={`px-2.5 md:px-2 hover:bg-gray-200 ${
                        activeItem.title == item.title
                          ? "bg-gray-300 !important"
                          : "bg-transparent"
                      }
`}
                    >
                      <item.icon
                        className="w-44 h-44 text-pink-600 font-extrabold "
                        size={100}
                      />
                      {/* <span>{item.title}</span> */}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-center">
            <h1 className="text-xl font-bold text-black">{activeItem.title}</h1>
          </div>
          {activeItem.title === "Select voice" && (
            <SidebarInput placeholder="Search voice / language" />
          )}
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-5">
            <SidebarGroupContent>
              {activeItem.title != "Select voice" && <AlertDemo />}

              {activeItem.title == "Select voice" && (
                <SidebarMenu className="gap-6">
                  {accents.length > 0 &&
                    accents.map((item) => (
                      <SidebarMenuItem key={item}>
                        <SidebarMenuButton
                          asChild
                          className=" flex flex-col gap-4 items-center h-fit max-h-[20rem] overflow-y-auto "
                        >
                          <div className="flex flex-col gap-2 items-center border ">
                            <h2 className="text-lg font-extrabold text-black">
                              {item}
                            </h2>

                            <div className=" w-full bg-gray-100 flex flex-col gap-2">
                              {voices
                                .filter((v) => v.accent === item)
                                .map((a) => (
                                  <VoiceBar
                                    key={a.voice_id} // Add unique key
                                    gender={a.gender}
                                    voiceName={a.voice_name}
                                  />
                                ))}
                            </div>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              )}

              {activeItem.title == "Setting" && (
                <>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">
                          Accept terms and conditions
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Show Tooltips</Label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Dark Mode</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Autosave</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Remember Login</Label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Label htmlFor="groups" className="">
                        View Mode
                      </Label>
                      <RadioGroup id="groups" defaultValue="comfortable">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="default" id="r1" />
                          <Label htmlFor="r1">Compact</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="comfortable" id="r2" />
                          <Label htmlFor="r2">Detailed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="compact" id="r3" />
                          <Label htmlFor="r3">Thumbnail</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </>
              )}

              {activeItem.title === "Schedule" && (
                <CalenderComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              )}

              {activeItem.title === "Analytics" && (
                <>
                  <div className=" flex flex-col items-start gap-6">
                    {analytics.map((data) => (
                      <div
                        key={data.label}
                        className=" flex items-center gap-3"
                      >
                        <span className=" text-lg font-extrabold text-black">
                          {data.label}
                        </span>
                        <span className=" text-xl font-thin text-gray-800">
                          {data.amt}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}

const VoiceBar = ({ voiceName = "Mukesh", gender = "male" }) => {
  return (
    <div className=" w-full flex justify-between items-center bg-pink-300 px-3 rounded-md border border-black">
      <span className=" text-base font-bold text-black">{voiceName}</span>
      <div className=" flex w-fit px-2 rounded-md items-center justify-center bg-pink-900">
        <span className=" text-sm text-white">{gender}</span>
      </div>
    </div>
  );
};
