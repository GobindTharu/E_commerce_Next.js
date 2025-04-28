"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import toast from "react-hot-toast";

const data = [
  "Wireless Mouse",
  "Bluetooth Keyboard",
  "Gaming Monitor",
  "Laptop Stand",
  "USB-C Hub",
  "Mechanical Keyboard",
  "Portable SSD",
  "Power Bank",
  "Smartwatch",
  "Bluetooth Speaker",
  "LED Desk Lamp",
  "Webcam",
  "Noise Cancelling Headphones",
  "Smartphone Tripod",
  "VR Headset",
  "Gaming Chair",
  "4K TV",
  "Smart Thermostat",
  "Wireless Earbuds",
  "Streaming Microphone",
  "Portable Projector",
  "Laptop Cooling Pad",
  "Wireless Printer",
  "Digital Drawing Tablet",
  "Action Camera",
  "USB Flash Drive",
  "Smart Plug",
  "Fitness Tracker",
  "Smart Doorbell",
  "Wi-Fi Router",
  "Cable Organizer",
  "HD Webcam",
  "Smart Light Bulb",
  "Ergonomic Chair",
  "Phone Gimbal",
  "Laptop Sleeve",
  "External Hard Drive",
  "Gaming Console",
  "Drone Camera",
  "Smart Scale",
  "Smart Mirror",
  "Photo Printer",
  "Graphics Card",
  "Laptop Backpack",
  "Portable Power Station",
  "Electric Toothbrush",
  "Smart Diffuser",
  "Voice Assistant Speaker",
  "Webcam Cover",
  "Streaming Stick",
  "Digital Alarm Clock",
  "Electric Kettle",
  "Air Fryer",
  "Coffee Maker",
  "Wireless Charging Pad",
  "Smart Air Purifier",
  "Standing Desk",
  "Phone Mount for Car",
  "Tripod Ring Light",
  "Bluetooth Tracker",
  "Solar Charger",
  "Smart Fan",
  "Phone Cooling Fan",
  "Gaming Controller",
  "Smart TV Box",
  "USB Desk Fan",
  "Smart Refrigerator",
  "Gaming Laptop",
  "Smart Pen",
  "Bluetooth Adapter",
  "Touchscreen Gloves",
  "LED Strip Lights",
  "Label Printer",
  "Cable Management Box",
  "Portable Heater",
  "E-book Reader",
  "3D Printer",
  "Noise Machine",
  "HDMI Splitter",
  "Fingerprint Padlock",
  "Digital Photo Frame",
  "Smart Notebook",
  "Key Finder",
  "Portable Blender",
  "Mini Projector",
  "Laptop Docking Station",
  "Wi-Fi Range Extender",
  "Smart Water Bottle",
  "USB Microphone",
  "Mechanical Pencil",
  "Wireless Presentation Clicker",
  "Smart Vacuum Cleaner",
  "LED Monitor",
  "Keyboard Cover",
  "Electric Scooter",
  "Smart Lock",
  "Gaming Mousepad",
  "Phone Holder Stand",
  "Phone Sanitizer",
  "Smart Ring",
  "Motion Sensor Light",
  "Bluetooth Receiver",
  "Smartwatch Charger"
];




const SearchBar = () => {

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleSearch = (query) => {
    setSearch(query);
    setResults(
      data.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const handleSelectResult = (result) => {
    setSearch(result);
    setResults([]);
  };

  const handleClickSearchIcon = () => {
    toast.success("Search successful!");
    router.push("/search");
  };

  return (
    <div className="relative flex items-center justify-end  rounded-full shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-32 sm:w-42 md:w-52 lg:w-63 p-2 text-md rounded-full text-gray-900 bg-gray-100 focus:outline-none"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Search
        className="absolute right-3 text-gray-600 cursor-pointer"
        size={20}
        onClick={handleClickSearchIcon}
      />
      {search && results.length > 0 && (
        <ul className="absolute top-12 left-0 mt-2 w-full rounded-md shadow-lg z-20 bg-gray-200">
          {results.map((result, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectResult(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
