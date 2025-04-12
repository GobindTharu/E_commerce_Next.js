"use client"
import { Link } from '@mui/material'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-xl font-serif">
    <img
      src="/logo.png"
      alt="B-MANDU Logo"
      className="h-9 w-9 md:h-12 md:w-12"
    />
    <span className="ml-2 font-bold">B-MANDU</span>
  </Link>
  )
}

export default Logo
