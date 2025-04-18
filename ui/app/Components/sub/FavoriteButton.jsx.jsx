"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function FavoriteButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Adding Successful");
    }, 100);
  };
  return (
    <Button
      disabled={isLoading}
      onClick={handleClick}
      sx={{
        width: 32,
        height: 32,
        width: "20px",
        border: "2px solid blue",
        borderRadius: "50%",
        padding: 2,
        minWidth: 0,
      }}
      size="sm"
    >
      <FavoriteBorderOutlinedIcon fontSize="small" />
    </Button>
  );
}
