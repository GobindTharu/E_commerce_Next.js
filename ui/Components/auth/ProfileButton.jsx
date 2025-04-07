"use client";

import { LogOut, PlusIcon } from "lucide-react";
import toast from "react-hot-toast";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
} from "@nextui-org/react";


import { useRouter } from "next/navigation";

export default function ProfileButton() {
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.clear();
    router.replace("/login");
    toast.success("Logout Successful")
  };

  const token = localStorage.getItem("accessToken");

 

  if (!token) {
    return <></>;
  }

  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content:
          " relative p-0 border-small border-divider bg-background right-6",
      }}
      radius="sm"
    >
      <DropdownTrigger>
        <Button disableRipple variant="" className="border-2 rounded-full">
          Profile
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        className="p-3 bg-gray-300 gap-2 h-[20rem]"
        disabledKeys={["profile"]}
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection
          showDivider
          aria-label="Profile & Actions"
          className="py-2"
        >
          <DropdownItem key="profile" isReadOnly className="h-20 gap-2">
            <User
              avatarProps={{
                size: "md",
                src: "/prampod.jpg",
              }}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              name="Pramod Tharu"
              description="@pramodtharu"
            />
          </DropdownItem>
          <DropdownItem key="dashboard">Dashboard</DropdownItem>
          <DropdownItem key="settings">Settings</DropdownItem>
          <DropdownItem
            key="new_project"
            endContent={<PlusIcon className="text-large" />}
          >
            New Project
          </DropdownItem>
        </DropdownSection>

        <DropdownSection showDivider aria-label="Preferences">
          <DropdownItem key="quick_search" shortcut="⌘K">
            Quick search
          </DropdownItem>
          <DropdownItem
            key="theme"
            isReadOnly
            className="cursor-default"
            endContent={
              <select
                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                id="theme"
                name="theme"
              >
                <option>System</option>
                <option>Dark</option>
                <option>Light</option>
              </select>
            }
          >
            Theme
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout">
            {" "}
            <button
              onClick={handleLogout}
              className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
            >
              <LogOut size={14} />
            <DropdownItem key="logout">Log Out</DropdownItem>
            </button>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
