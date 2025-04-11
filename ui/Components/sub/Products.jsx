"use client"
import Link from "next/link";
import FavoriteButton from "./FavoriteButton.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import { Suspense } from "react";
import MyRating from "./MyRating.jsx";

const sampleProducts = [
  {
    id: 1,
    title: "Stylish Sneakers",
    price: 1200,
    salePrice: 1000,
    featureImageURL: "/shoes.png",
    shortDescription:
      "Stylish  Sneaker with Sporty Look features and Runner Tested.",
    stock: 10,
    orders: 2,
  },
  {
    id: 1,
    title: "T-Shirt",
    price: 1200,
    salePrice: 1000,
    featureImageURL: "/t-shirt.webp",
    shortDescription:
      "Stylish  Sneaker with Sporty Look features and Runner Tested.",
    stock: 10,
    orders: 2,
  },
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    salePrice: 1000,
    featureImageURL: "/laptop.webp",
    shortDescription:
      "Stylish  Sneaker with Sporty Look features and Runner Tested.",
    stock: 10,
    orders: 2,
  },

  {
    id: 1,
    title: "Caps",
    price: 1200,
    salePrice: 1000,
    featureImageURL: "/caps.png",
    shortDescription:
      "Stylish  Sneaker with Sporty Look features and Runner Tested.",
    stock: 10,
    orders: 2,
  },
 
 
  {
    id: 1,
    title: "Iphone",
    price: 1200,
    salePrice: 1000,
    featureImageURL: "/iphone.webp",
    shortDescription:
      "Stylish  Sneaker with Sporty Look features and Runner Tested.",
    stock: 10,
    orders: 2,
  },
  
];

export default function ProductsGridView({ products = sampleProducts }) {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col gap-5 max-w-[1200px] w-full p-5">
        <h1 className="text-center font-semibold text-lg">Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((item ,index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-3 border p-4 rounded-lg shadow hover:shadow-md transition duration-300">
      <div className="relative w-full">
        <img
          src={product.featureImageURL}
          className="rounded-lg h-48 w-full object-cover"
          alt={product.title}
        />
        <div className="absolute top-1 right-1">
          <FavoriteButton productId={product.id} />
        </div>
      </div>

      <Link href="#">
        <h1 className="font-semibold line-clamp-2 text-sm">{product.title}</h1>
      </Link>

      <div>
        <h2 className="text-green-500 text-sm font-semibold">
          Rs {product.salePrice}{" "}
          <span className="line-through text-xs text-gray-600">
            Rs {product.price}
          </span>
        </h2>
      </div>

      <p className="text-xs text-gray-500 line-clamp-2">
        {product.shortDescription}
      </p>

      <Suspense fallback={<div className="text-xs text-gray-400">Loading rating...</div>}>
        <RatingReview product={product} />
      </Suspense>

      {product.stock <= (product.orders ?? 0) && (
        <div className="text-red-500 text-xs font-semibold">Out Of Stock</div>
      )}

      <div className="flex items-center gap-4 w-full mt-auto">
        <Link href="#">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs w-full">
            Buy Now
          </button>
        </Link>
        <AddToCartButton />
      </div>
    </div>
  );
}

async function RatingReview({ product }) {
  const counts = await getProductReviewCounts(product.id); 
    return (
    <div className="flex gap-2 items-center text-xs text-gray-500">
      <MyRating value={counts?.averageRating ?? 0} />
      <span>{counts?.averageRating?.toFixed(1)} ({counts?.totalReviews})</span>
    </div>
  );
}

async function getProductReviewCounts(productId) {

  return {
    averageRating: 4.3,
    totalReviews: 18,
  };
}
