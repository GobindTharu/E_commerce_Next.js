"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Collections() {
  const collection = [
    {
      title: "Cap",
      subTitle: "Caps best deal you can shop now",
      imageURL: "/caps.png",
    },
    {
      title: "T-Shirt",
      subTitle: "T-shirt in best deal you can shop now",
      imageURL: "/t-shirt.webp",
    },
    {
      title: "Stylish Sneakers",
      subTitle: "Shoes in best deal you can shop now",
      imageURL: "/shoes.png",
    },
    {
      title: "Laptop",
      subTitle: "MSI laptop in best deal you can shop now",
      imageURL: "/laptop.webp",
    },
    {
      title: "Converse",
      subTitle: "Shoes in best deal you can shop now",
      imageURL: "/shoes.png",
    },
    {
      title: "Club Juearsy",
      subTitle: " in best deal you can shop now",
      imageURL: "/tshirt.png",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,

    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 mt-4">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden md:p-10 p-5">
      <Slider {...settings}>
        {collection.map((item, index) => (
          <div key={index} className="px-2 h-[19rem]">
            <div className="flex flex-col justify-evenly md:flex-row gap-2 bg-gradient-to-tr to-[#d9e2f1] from-[#cce7f5] p-7 w-full rounded-xl h-full">
              <div className="flex flex-col gap-2 md:w-[16rem]">
                <div className="flex flex-col gap-4">
                  <h1 className="md:text-lg text-base font-semibold">
                    {item.title}
                  </h1>
                  <h1 className="text-gray-600 text-xs md:text-sm max-w-96 line-clamp-2">
                    {item.subTitle}
                  </h1>
                </div>
                <div className="flex gap-4 w-full md:w-100">
                  <Link href={`/collections/${item?.id}`}>
                    <button className="bg-blue-500 text-white text-xs md:text-sm px-4 py-2 rounded-lg">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <img
                  className="h-40 w-40 md:h-full md:w-full mdobject-contain"
                  src={item?.imageURL}
                  alt={item?.title}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
