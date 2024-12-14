"use client";

import * as React from "react";
import {
  Hash,
  Command,
  Settings,
  AudioLines,
  Calendar,
  Trash2,
} from "lucide-react";

import { NavUser } from "@/components/nav-user";
// import { Label } from "@/components/ui/label";

import { Calendar as CalenderComponent } from "@/components/ui/calendar";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { AlertDemo } from "./Alert";
import { cn } from "@/lib/utils";
import { Slider } from "./ui/slider";
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
  mails: [
    {
      name: "William Smith",
      email: "williamsmith@example.com",
      subject: "Meeting Tomorrow",
      date: "09:34 AM",
      teaser:
        "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    },
    {
      name: "Alice Smith",
      email: "alicesmith@example.com",
      subject: "Re: Project Update",
      date: "Yesterday",
      teaser:
        "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      subject: "Weekend Plans",
      date: "2 days ago",
      teaser:
        "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      subject: "Re: Question about Budget",
      date: "2 days ago",
      teaser:
        "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
    },
    {
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      subject: "Important Announcement",
      date: "1 week ago",
      teaser:
        "Please join us for an all-hands meeting this Friday at 3 PM.\nWe have some exciting news to share about the company's future.",
    },
    {
      name: "Sarah Brown",
      email: "sarahbrown@example.com",
      subject: "Re: Feedback on Proposal",
      date: "1 week ago",
      teaser:
        "Thank you for sending over the proposal. I've reviewed it and have some thoughts.\nCould we schedule a meeting to discuss my feedback in detail?",
    },
    {
      name: "David Lee",
      email: "davidlee@example.com",
      subject: "New Project Idea",
      date: "1 week ago",
      teaser:
        "I've been brainstorming and came up with an interesting project concept.\nDo you have time this week to discuss its potential impact and feasibility?",
    },
    {
      name: "Olivia Wilson",
      email: "oliviawilson@example.com",
      subject: "Vacation Plans",
      date: "1 week ago",
      teaser:
        "Just a heads up that I'll be taking a two-week vacation next month.\nI'll make sure all my projects are up to date before I leave.",
    },
    {
      name: "James Martin",
      email: "jamesmartin@example.com",
      subject: "Re: Conference Registration",
      date: "1 week ago",
      teaser:
        "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
    },
    {
      name: "Sophia White",
      email: "sophiawhite@example.com",
      subject: "Team Dinner",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
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

const data2 = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
};

type Voice = {
  voice_id: string;
  voice_name: string;
  provider: string;
  accent: string;
  gender: string;
  age: string;
  preview_audio_url: string;
};

type VoicesArray = Voice[];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const [mails, setMails] = React.useState(data.mails);
  const { setOpen } = useSidebar();

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  let defaultSliderValue: number[] = [33];

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
                        const mail = data.mails.sort(() => Math.random() - 0.5);
                        setMails(
                          mail.slice(
                            0,
                            Math.max(5, Math.floor(Math.random() * 10) + 1)
                          )
                        );
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
        {/* <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter> */}
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
              {/* {mails.map((mail) => ( */}
              {/* <a
                href="#"
                className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <div className="flex w-full items-center gap-2">
                  <span>Ayush</span>{" "}
                  <span className="ml-auto text-xs">3 Dec, 2024</span>
                </div>
                <span className="font-medium">time waste</span>
                <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae mollitia nobis animi accusamus vel dignissimos
                  voluptates soluta distinctio maiores obcaecati asperiores
                  labore placeat, sapiente rem ipsam perferendis in suscipit
                  unde deserunt velit quis libero! Sunt vel, eligendi,
                  cupiditate quibusdam consequuntur optio ad maiores cum unde
                  voluptatem officiis odio ratione modi debitis rem, eaque minus
                  non perferendis eveniet. Iure quidem quia doloremque aliquam
                  adipisci voluptas animi, aut eaque hic quod saepe magni non
                  rem nihil. Dolorem expedita, ipsam assumenda asperiores magnam
                  accusantium! Nemo laudantium magnam saepe ut labore dolore
                  quam, quidem unde tenetur aspernatur totam dicta aliquid eum
                  delectus culpa vero!
                </span>
              </a> */}

              {/* ))} */}

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

                            <div
                              // isActive={item.isActive}
                              className=" w-full bg-gray-100 flex flex-col gap-2"
                            >
                              {/* <a href={item.url}>{item.title}</a> */}

                              {/* {voices
                                .filter((v) => v.accent == item)
                                .map((a) => (
                                  <VoiceBar
                                    key={a.voice_id}
                                    gender={a.gender}
                                    voiceName={a.voice_name}
                                  />
                                ))} */}

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
                        {/* {item.items?.length ? (
                        <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                          {item.items.map((item) => (
                            <SidebarMenuSubItem key={item.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={item.isActive}
                              >
                                <a href={item.url}>{item.title}</a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      ) : null} */}
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
