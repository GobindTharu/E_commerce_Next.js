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
  };
  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading}
      onClick={handleClick}
      className="rounded-full"
      isIconOnly
      size="sm"
    >
      <FavoriteBorderOutlinedIcon fontSize="small" />
    </Button>
  );
}
