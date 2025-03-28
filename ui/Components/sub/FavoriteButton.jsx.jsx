"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/navigation";

export default function FavoriteButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlClick = async () => {
    setIsLoading(true);
  

  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading}
      onClick={handlClick}
      variant="light"
      color="danger"
      className="rounded-full"
      isIconOnly
      size="sm"
    >
      {!isLiked && <FavoriteBorderOutlinedIcon fontSize="small" />}
      {isLiked && <FavoriteIcon fontSize="small" />}
    </Button>
  );
}
}