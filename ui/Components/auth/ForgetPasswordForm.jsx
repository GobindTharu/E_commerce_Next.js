"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

export const ForgetPasswordForm = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(""); // NEW: OTP state
  const [loading, setLoading] = useState(false);

  // Send OTP mutation
  const { mutate: sendOtpMutate } = useMutation({
    mutationFn: async (email) => {
      const response = await axios.post(
        "http://localhost:8002/user/send-otp/",
        { email }
      );
      if (response.data.success) {
        return response.data;
      } else {
        throw new Error("Failed to send OTP");
      }
    },
    onSuccess: () => {
      toast.success("OTP sent to your email");
      setShowPopup(true);
      setLoading(false);
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
      setLoading(false);
    },
  });

  // Verify OTP mutation
  const { mutate: verifyOtpMutate, isLoading: verifyingOtp } = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        "https://e-commerce-next-js-tau.vercel.app/user/verify-otp/",
        {
          email,
          otp,
        }
      );
      if (response.data.success) {
        return response.data;
      } else {
        throw new Error(response.data.message || "Invalid OTP");
      }
    },
    onSuccess: () => {
      toast.success("OTP verified successfully");
      router.push(`/reset-password?email=${email}`);
    },
    onError: (error) => {
      toast.error(error.message || "OTP verification failed");
    },
  });

  const handleSendOTP = (e) => {
    e.preventDefault();
    setLoading(true);
    sendOtpMutate(email);
  };

  const handleVerifyOTP = () => {
    verifyOtpMutate();
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
      <section className="flex flex-col gap-3 w-full md:w-130">
        <div className="flex justify-center gap2">
          <Typography
            variant="h5"
            className="flex items-center justify-center font-serif text-gray-600"
          >
            <img src="/logo.png" alt="logo" className="h-10 w-10" />
            B-MANDU
          </Typography>
        </div>
        <div className="flex flex-col gap-9 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
          <h1 className="font-bold text-xl">Forgot Password</h1>
          <form onSubmit={handleSendOTP} className="flex flex-col gap-5">
            <input
              placeholder="Enter Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>
          <div className="flex justify-between">
            <Link href={`/login`}>
              <button className="font-semibold text-sm text-blue-700 px-8 py-2 rounded-md hover:bg-blue-50">
                Login
              </button>
            </Link>
            <Link href={`/signup`}>
              <button className="font-semibold text-sm text-blue-700 px-8 py-2 rounded-md hover:bg-blue-50">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* OTP Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg min-w-[300px] max-w-[90%]">
              <Typography variant="h6" className="mb-4">
                OTP Verification
              </Typography>
              <p className="mb-4 text-gray-600">
                Please check your email and enter the OTP to continue.
              </p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none"
              />
              <div className="flex justify-end gap-2">
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  color="secondary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleVerifyOTP}
                  variant="contained"
                  color="primary"
                  disabled={verifyingOtp}
                >
                  {verifyingOtp ? "Verifying..." : "Verify"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};
