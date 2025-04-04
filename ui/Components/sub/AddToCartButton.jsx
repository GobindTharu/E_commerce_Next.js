"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function AddToCartButton({ type }) {
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
      variant="outlined"
      size="sm"
    > Add To Cart </Button>
  );
}
