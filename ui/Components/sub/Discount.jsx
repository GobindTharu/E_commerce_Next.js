"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const Discount = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white px-3 py-1 ml-4 rounded"
      >
        Learn more
      </button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <Card
            sx={{ borderRadius: 3, boxShadow: 3 }}
            class="bg-[url(../public/discount.png)] bg-cover bg-center"
          >
            <CardContent>
              <CloseIcon
                onClick={handleClose}
                className="absolute top-0 right-0 bg-gray-100 "
                sx={{ fontSize: "40px" }}
              />
              <Typography variant="h5" gutterBottom className="py-2 md:py-7">
                🎉 Special Discount!
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Typography
                variant="body1"
                sx={{ mb: 3 }}
                className="text-white "
              >
                Get up to <strong>30% OFF</strong> on your first purchase.{" "}
                <ul>
                  <li>🎉 Limited Time Offer!</li>
                  <li>🎉 Get up to 50% OFF on our best-selling products!</li>
                  <li>Don't miss out on:</li>
                  <li>✅ Premium Quality</li>
                  <li>✅ Fast Shipping ✅ 100%</li>
                  <li>✅ 100% Satisfaction Guaranteed</li>
                  <li>🕒 Offer valid until April 15, 2025</li>
                </ul>
                📦 Use Code: SAVE50 at checkout!
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  backgroundColor: "yellow",
                  padding: "10px",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                First Top 10 Only
              </Typography>
              <Typography
                variant="caption"
                display="block"
                sx={{ mt: 2 }}
                className="text-white "
              >
                * Offer valid for a limited time only.
              </Typography>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};
