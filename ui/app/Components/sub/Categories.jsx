"use client";

import { Button } from "@nextui-org/react";
import { collection } from "firebase/firestore";
import { Heart } from "lucide-react";
import Link from "next/link";
import Slider from "react-slick";

export default function Categories({ categories }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const category = [
    {
      name: "Caps",
      subTitle: "Complete your outfit with trendy and stylish caps.",
      imageURL: "/caps.png",
    },
    {
      name: "T-shirt",
      subTitle: "Comfortable and cool T-shirts for everyday wear.",
      imageURL: "/t-shirt.webp",
    },
    {
      name: "Shoes",
      subTitle: "Step out in style with our latest shoe collection.",
      imageURL: "/shoes.png",
    },
    {
      name: "Laptop",
      subTitle: "Find top performance laptops at unbeatable prices.",
      imageURL: "/laptop.webp",
    },
    {
      name: "Laptop",
      subTitle: "Explore high-performance laptops for work and play.",
      imageURL: "/tshirt.png",
    },
    {
      name: "T-shirts wears",
      subTitle: "Express your style with our range of printed T-shirts.",
      imageURL: "/t-shirt.webp",
    },
    {
      name: "Sport Shoes",
      subTitle: "Built for speed and comfort during any workout.",
      imageURL: "/shoes.png",
    },
    {
      name: "Laptop",
      subTitle: "Powerful laptops designed for productivity and gaming.",
      imageURL: "/laptop.webp",
    },
  ];
  

  return (
    <div className="flex flex-col gap-8 justify-center overflow-hidden md:p-10 p-5">
      <div className="flex justify-center w-full my-1 md:my-12">
        <h1 className="text-lg font-bold uppercase">Shop By Category</h1>
      </div>
      <Slider {...settings}>
        {category.map((category, index) => {
          return (
            <Link href="" key={index}>
              <div className="px-2">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="md:h-32 md:w-32 h-24 w-24 rounded-full md:p-5 p-2 border overflow-hidden">
                    <img src={category.imageURL} alt="" />
                  </div>
                  <h1 className="font-semibold">{category.name}</h1>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
