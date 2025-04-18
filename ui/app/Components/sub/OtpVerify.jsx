"use client";

import { Button, Typography } from "@mui/material";
import { useState } from "react";

export default function OTPPopupCard() {
  const [showPopup, setShowPopup] = useState(false);

  const handleNextClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Button variant="contained" onClick={handleNextClick}>
        Next
      </Button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg min-w-[300px] max-w-[90%]">
            <Typography variant="h6" className="mb-4">
              OTP Verification
            </Typography>
            <p className="mb-4 text-gray-600">
              Please check your email and enter the OTP to continue.
            </p>
            <div className="flex justify-end gap-2">
              <Button onClick={handleClose} variant="outlined" color="secondary">
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Verify
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
