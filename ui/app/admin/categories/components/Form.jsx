"use client";
import { UploadFile } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleData = (key, value) => {
    setData((preData) => {
      return {
        ...(preData ?? {}),
        [key]: value,
      };
    });
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "images_preset");

    try {
      const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const res = await axios.post(api, formData);
      const { secure_url } = res.data;
      console.log("Upload successful:", secure_url);
      return secure_url;
    } catch (error) {
      console.error("Upload failed:", error.message);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!image || !data.name || !data.url) {
        toast.error("Please fill all required fields.");
        return;
      }
      const imgUrl = await uploadFile("image");

      await axios.post(`http://localhost:8002/category/create`, {
        imgUrl,
        ...data,
      });

      setImage(null);
      setData(null);

      toast.success("Created  Successful");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    } catch (error) {
      console.log(error.message);
    }
    // mutate({ image, data });
    setIsLoading(false);
  };
  
  const handleUpdate = async () => {
    if (!selectedCategory) return;

    try {
      await axios.put(
        `http://localhost:8002/category/update/${selectedCategory._id}`
      );
      toast.success("Deleted successfully");
      setShowConfirm(false);
      setSelectedCategory(null);
      refetch();
    } catch (error) {
      toast.error("Failed to delete");
    }
  };
  return (
    <div className="flex flex-col gap-3 bg-gray-50 p-5 rounded-xl w-full md:w-[400px]">
      <h1>Create Category</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              const file = e.target.files[0];
              console.log(file);

              if (!file) return;

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
          {isLoading && setIsLoading ? "Creating..." : "Create"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
