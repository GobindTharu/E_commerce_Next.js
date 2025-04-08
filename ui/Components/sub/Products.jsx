import Link from "next/link";
import FavoriteButton from "../sub/FavoriteButton.jsx";
import AddToCartButton from "../sub/AddToCartButton";
import { Suspense } from "react";
import MyRating from "../sub/MyRating";

const product = [
  {
    id: 1,
    name: "Apple Watch Series 8",
    image: "https://example.com/images/apple-watch-series-8.jpg",
    description:
      "Advanced smartwatch with health tracking features and seamless integration with iOS devices.",
  },
  {
    id: 2,
    name: "Crocs Classic Clog",
    image: "https://example.com/images/crocs-classic-clog.jpg",
    description:
      "Comfortable and lightweight footwear suitable for casual wear and outdoor activities.",
  },
  {
    id: 3,
    name: "Apple AirPods Pro",
    image: "https://example.com/images/apple-airpods-pro.jpg",
    description:
      "Wireless earbuds with active noise cancellation and immersive sound quality.",
  },
  {
    id: 4,
    name: "Amazon Kindle Paperwhite",
    image: "https://example.com/images/amazon-kindle-paperwhite.jpg",
    description:
      "E-reader with a high-resolution display and adjustable lighting for comfortable reading.",
  },
  {
    id: 5,
    name: "Instant Pot Duo 7-in-1",
    image: "https://example.com/images/instant-pot-duo.jpg",
    description:
      "Multi-functional pressure cooker that combines seven kitchen appliances in one.",
  },
  {
    id: 6,
    name: "Nintendo Switch",
    image: "https://example.com/images/nintendo-switch.jpg",
    description:
      "Versatile gaming console that can be used both at home and on the go.",
  },
  {
    id: 7,
    name: "Samsung Galaxy S25 Ultra",
    image: "https://example.com/images/samsung-galaxy-s25-ultra.jpg",
    description:
      "High-end smartphone with advanced camera features and a powerful processor.",
  },
  {
    id: 8,
    name: "Sony WH-1000XM5 Headphones",
    image: "https://example.com/images/sony-wh-1000xm5.jpg",
    description:
      "Premium noise-canceling headphones with exceptional sound quality.",
  },
  {
    id: 9,
    name: "Fitbit Charge 5",
    image: "https://example.com/images/fitbit-charge-5.jpg",
    description:
      "Fitness tracker with built-in GPS and health monitoring features.",
  },
  {
    id: 10,
    name: "Dyson V15 Detect Vacuum",
    image: "https://example.com/images/dyson-v15-detect.jpg",
    description:
      "Powerful cordless vacuum with laser detection technology for thorough cleaning.",
  },
  {
    id: 11,
    name: "Bose QuietComfort Ultra Headphones",
    image: "https://example.com/images/bose-quietcomfort-ultra.jpg",
    description:
      "High-fidelity noise-canceling headphones for an immersive listening experience.",
  },
  {
    id: 12,
    name: "Philips Sonicare 9900 Prestige Electric Toothbrush",
    image: "https://example.com/images/philips-sonicare-9900.jpg",
    description:
      "Advanced electric toothbrush with personalized brushing experience.",
  },
  {
    id: 13,
    name: "Salomon Speedcross 5 Trail Running Shoes",
    image: "https://example.com/images/salomon-speedcross-5.jpg",
    description:
      "Durable and comfortable trail running shoes with superior grip.",
  },
  {
    id: 14,
    name: "Hatch Restore 2 Sunrise Alarm Clock",
    image: "https://example.com/images/hatch-restore-2.jpg",
    description:
      "Smart alarm clock with sunrise simulation to wake you up naturally.",
  },
  {
    id: 15,
    name: "Yeti Roadie 24 Cooler",
    image: "https://example.com/images/yeti-roadie-24.jpg",
    description:
      "Compact and robust cooler designed to keep your beverages cold for extended periods.",
  },
  {
    id: 16,
    name: "Breville Barista Express Espresso Machine",
    image: "https://example.com/images/breville-barista-express.jpg",
    description:
      "All-in-one espresso machine with integrated grinder for barista-quality coffee at home.",
  },
  {
    id: 17,
    name: "Ember Temperature Control Smart Mug 2",
    image: "https://example.com/images/ember-smart-mug-2.jpg",
    description:
      "Smart mug that maintains your chosen beverage temperature for extended enjoyment.",
  },
  {
    id: 18,
    name: "KitchenAid Artisan Series 5-Quart Stand Mixer",
    image: "https://example.com/images/kitchenaid-artisan-mixer.jpg",
    description:
      "Versatile stand mixer with a powerful motor and multiple attachments for various recipes.",
  },
  {
    id: 19,
    name: "Le Creuset Stoneware Mug Set",
    image: "https://example.com/images/le-creuset-mug-set.jpg",
    description:
      "Elegant and durable stoneware mugs perfect for serving hot beverages.",
  },
  {
    id: 20,
    name: "Hydro Flask Wide Mouth Water Bottle",
    image: "https://example.com/images/hydro-flask-wide-mouth.jpg",
    description:
      "Insulated stainless steel water bottle that keeps beverages cold or hot for hours.",
  },
  {
    id: 21,
    name: "Google Nest Learning Thermostat",
    image: "https://example.com/images/google-nest-thermostat.jpg",
    description:
      "Smart thermostat that learns your schedule and programs itself to save energy.",
  },
  {
    id: 22,
    name: "Ring Video Doorbell Pro",
    image: "https://example.com/images/ring-video-doorbell-pro.jpg",
    description:
      "Advanced video doorbell with enhanced motion detection and real-time alerts.",
  },
  {
    id: 23,
    name: "Anker 313 Wireless Charger",
    image: "https://example.com/images/anker-313-wireless-charger.jpg",
    description:
      "Efficient wireless charger compatible with a wide range of smartphones.",
  },
  {
    id: 24,
    name: "JBL Flip 6 Portable Bluetooth Speaker",
    image: "https://example.com/images/jbl-flip-6.jpg",
    description:
      "Compact and waterproof speaker with powerful sound and long battery life.",
  },
  {
    id: 25,
    name: "GoPro HERO10 Black",
    image: "https://example.com/images/gopro-hero10-black.jpg",
    description:
      "High-performance action camera with 5.3K video and advanced stabilization.",
  },
  {
    id: 26,
    name: "Logitech MX Master 3S Wireless Mouse",
    image: "https://example.com/images/logitech-mx-master-3s.jpg",
    description:
      "Ergonomic and precise wireless mouse with customizable buttons and fast scrolling.",
  },
  {
    id: 27,
    name: "Samsung Galaxy Tab S8",
    image: "https://example.com/images/samsung-gal",
  },
];



export default function ProductsGridView({ products }) {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col gap-5 max-w-[900px] p-5">
        <h1 className="text-center font-semibold text-lg">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {products?.map((item) => {
            return <ProductCard product={item} key={item?.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-3 border p-4 rounded-lg">
      <div className="relative w-full">
        <img
          src={product?.featureImageURL}
          className="rounded-lg h-48 w-full object-cover"
          alt={product?.title}
        />
        <div className="absolute top-1 right-1">
          <AuthContextProvider>
            <FavoriteButton productId={product?.id} />
          </AuthContextProvider>
        </div>
      </div>
      <Link href={`/products/${product?.id}`}>
        <h1 className="font-semibold line-clamp-2 text-sm">{product?.title}</h1>
      </Link>
      <div className="">
        <h2 className="text-green-500 text-sm font-semibold">
          ₹ {product?.salePrice}{" "}
          <span className="line-through text-xs text-gray-600">
            ₹ {product?.price}
          </span>
        </h2>
      </div>
      <p className="text-xs text-gray-500 line-clamp-2">
        {product?.shortDescription}
      </p>
      <Suspense>
        <RatingReview product={product} />
      </Suspense>
      {product?.stock <= (product?.orders ?? 0) && (
        <div className="flex">
          <h3 className="text-red-500 rounded-lg text-xs font-semibold">
            Out Of Stock
          </h3>
        </div>
      )}
      <div className="flex items-center gap-4 w-full">
        <div className="w-full">
          <Link href={`/checkout?type=buynow&productId=${product?.id}`}>
            <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-xs w-full">
              Buy Now
            </button>
          </Link>
        </div>
        <AuthContextProvider>
          <AddToCartButton productId={product?.id} />
        </AuthContextProvider>
      </div>
    </div>
  );
}

async function RatingReview({ product }) {
  const counts = await getProductReviewCounts({ productId: product?.id });
  return (
    <div className="flex gap-3 items-center">
      <MyRating value={counts?.averageRating ?? 0} />
      <h1 className="text-xs text-gray-400">
        <span>{counts?.averageRating?.toFixed(1)}</span> ({counts?.totalReviews}
        )
      </h1>
    </div>
  );
}
