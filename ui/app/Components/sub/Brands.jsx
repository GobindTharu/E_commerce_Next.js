"use client";

import Slider from "react-slick";

export default function Brands(brands) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
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

  const brand = [
    {
      imageURL:
        "/nike.png",
    },{
      imageURL:
        "/nike.png",
    },{
      imageURL:
        "/nike.png",
    },{
      imageURL:
        "/nike.png",
    },{
      imageURL:
        "/nike.png",
    },
    {
      imageURL:
        "/nike.png",
    },
    {
      imageURL:
        "/nike.png",
    },
    {
      imageURL:
        "/nike.png",
    },
    {
      imageURL:
        "/nike.png",
    },
    {
      imageURL:
        "/nike.png",
    },
    {
      imageURL:
        "/nike.png",
    },
    {
      imageURL:
        "/nike.png",
    },
    {
      imageURL:
        "/nike.png",
    },
    {
      imageURL:
        "/nike.png",
    },
    
  ];
  return (
    <div className="overflow-hidden md:p-10 p-5">
      <Slider {...settings}>
        {brand.map((item) => {
          return (
            <div className="px-2">
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="h-20 rounded-lg md:p-5 p-2 border overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={item.imageURL}
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
