"use client";

import { useEffect, useState } from "react";
import BasicDetails from "./components/BasicDetails";
import Images from "./components/Images";
import Description from "./components/Description";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  return (
    <form onSubmit={(e) => {}} className="flex flex-col gap-4 p-5">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-semibold">Create New Product</h1>
        <Button type="submit">Create</Button>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1 flex">
          <BasicDetails />
        </div>
        <div className="flex-1 flex flex-col gap-5 h-full">
          <Images />
          <Description />
        </div>
      </div>
    </form>
  );
}
