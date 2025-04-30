"use client";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Form = () => {
  const router = useRouter();

  const [isPending, mutate] = useMutation({
    mutationKey: ["create-category"],
    mutationFn: async (values) => {
      return await axios.post("http://localhost:8002/create-category", values);
    },
    onSuccess: () => {
      toast.success(res.data.message);
    },
    onError: () => {
      toast.error(error.response.data.message);
    },
  });

  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  const handleData = (key, value) => {
    setData((preData) => {
      return {
        ...(preData ?? {}),
        [key]: value,
      };
    });
  };

  return (
    <div className="flex flex-col gap-3 bg-gray-50 p-5 rounded-xl w-full md:w-[400px]">
      <h1>Create Category</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          mutate(newProduct);
        }}
        className="flex flex-col gap-4"
      >
        {image && (
          <div className="flex justify-center items-center">
            <img
              className="h-25"
              src={URL.createObjectURL(image)}
              alt="image"
            />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <label htmlFor="category-image" className="text-gray-500 text-sm ">
            Image <span className="text-red-500">*</span>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setImage(e.target.files[0]);
              }
            }}
            type="file"
            id="category-image"
            name="category-image"
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category-name" className="text-gray-500 text-sm ">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            value={data?.name ?? ""}
            onChange={(e) => {
              handleData("name", e.target.value);
            }}
            type="text"
            placeholder="Enter Name"
            id="category-name"
            name="category-name"
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category-url" className="text-gray-500 text-sm">
            Url <span className="text-red-500">*</span>
          </label>
          <input
            value={data?.url ?? ""}
            onChange={(e) => {
              handleData("url", e.target.value);
            }}
            type="text"
            placeholder="Enter Url"
            id="category-url"
            name="category-url"
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

export default Form;
