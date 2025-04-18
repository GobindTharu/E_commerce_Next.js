"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { PlusIcon, UserCircle2 } from "lucide-react";

import { Logout } from "./Logout";
import { useEffect, useState } from "react";

export default function ProfileButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    setIsAuthenticated(!!accessToken);
  }, []);

  if (!isAuthenticated) return null;

  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content:
          " relative p-0 border-small border-divider bg-background right-1",
      }}
      radius="sm"
    >
      <DropdownTrigger>
        <button
          title="My Account"
          className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
        >
          <UserCircle2 size={22} />
        </button>
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
            <Logout />
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
