"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import { Button, CircularProgress } from "@mui/material";

export default function AddToCartButton({ type }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate async logic
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Added to cart!");
    }, 500);
  };

  return (
    <Button
      disabled={isLoading}
      onClick={handleClick}
      variant="outlined"
      size="small"
      sx={{padding: "6px"}}
      startIcon={isLoading ? <CircularProgress size={16} /> : <AddShoppingCartIcon />}
    >
      {isLoading ? "Adding..." : "Add To Cart"}
    </Button>
  );
}
