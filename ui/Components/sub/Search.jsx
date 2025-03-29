"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import toast from "react-hot-toast";

const data = [
  "Algorithm",
  "Array",
  "API",
  "Binary",
  "Blockchain",
  "Boolean",
  "Bug",
  "Byte",
  "Cache",
  "Class",
  "Cloud",
  "Compilation",
  "Compiler",
  "Condition",
  "Constant",
  "Constructor",
  "Cryptography",
  "Database",
  "Data Structure",
  "Debugging",
  "Decryption",
  "Dependency",
  "Deployment",
  "DevOps",
  "Distributed System",
  "DNS",
  "DOM",
  "Dynamic Programming",
  "Encapsulation",
  "Encryption",
  "Endpoint",
  "Event",
  "Exception",
  "Executable",
  "Expression",
  "File System",
  "Firewall",
  "Float",
  "Framework",
  "Frontend",
  "Function",
  "Garbage Collection",
  "Git",
  "Graph",
  "Hashing",
  "Heap",
  "HTML",
  "HTTP",
  "IDE",
  "Inheritance",
  "Index",
  "Instance",
  "Integer",
  "Interface",
  "Interpreter",
  "IP Address",
  "Iteration",
  "JSON",
  "Kernel",
  "Lambda Function",
  "Latency",
  "Library",
  "Linked List",
  "Load Balancer",
  "Loop",
  "Machine Learning",
  "Memory",
  "Microservices",
  "Middleware",
  "Module",
  "Multithreading",
  "Network",
  "Node",
  "Normalization",
  "Null",
  "Object",
  "Object-Oriented Programming",
  "Operating System",
  "Optimization",
  "Packet",
  "Parameter",
  "Parsing",
  "Pointer",
  "Polymorphism",
  "Port",
  "Primitive",
  "Process",
  "Protocol",
  "Queue",
  "Recursion",
  "Regular Expression",
  "Repository",
  "REST API",
  "Router",
  "Runtime",
  "Scheduler",
  "Scope",
  "Script",
  "Semaphore",
  "Server",
  "Stack",
  "Static",
  "String",
  "Syntax",
  "TCP/IP",
  "Thread",
  "Token",
  "Tree",
  "Variable",
  "WebSocket",
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grapes",
  "Honeydew",
  "Indian Fig",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Olives",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Uva",
  "Watermelon",
  "Xigua",
  "Yam",
  "Zucchini",
  "Acai",
  "Blueberry",
  "Cantaloupe",
  "Dragonfruit",
  "Eggfruit",
  "Feijoa",
  "Galia Melon",
  "Hala Fruit",
  "Imbe",
  "Jambolan",
  "Kumquat",
  "Lime",
  "Mulberry",
  "Nance",
  "Orange",
  "Passionfruit",
  "Quandong",
  "Rambutan",
  "Starfruit",
  "Tomato",
  "Upland Cress",
  "Velvet Apple",
  "White Currant",
  "Xoconostle",
  "Yellow Passionfruit",
  "Zinfandel",
  "Apricot",
  "Blackberry",
  "Coconut",
  "Durian",
  "Elderflower",
  "Fuyu Persimmon",
  "Guava",
  "Honeycrisp Apple",
  "Imbu",
  "Jujube",
  "Kaffir Lime",
  "Litchi",
  "Mamey",
  "Noni",
  "Olallieberry",
  "Pawpaw",
  "Quenepa",
  "Raisin",
  "Sugar Apple",
  "Tamarind",
  "Urtle",
  "Vimto",
  "Wampee",
  "Xanadu",
  "Yellow Sapote",
  "Zara",
  "Atemoya",
  "Bittermelon",
  "Camu Camu",
  "Duku",
  "Emu Apple",
  "Finger Lime",
  "Goji Berry",
  "Horned Melon",
  "Indian Gooseberry",
  "Jamaican Tangelo",
  "Kaffir Plum",
  "Langsat",
  "Medlar",
  "Nipa Palm",
  "Olive",
  "Pineapple",
  "Queen's Crown",
  "Red Currant",
  "Soursop",
  "Tamarillo",
  "Uva Ursi",
  "Volkamer Lemon",
  "Witch Hazel",
  "Xanadu Fruit",
  "Yellow Dragonfruit",
  "Zamboni Fruit",
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
    toast.success("Search successful!");
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
        className="w-32 sm:w-320 md:w-420 lg:w-53 p-2 text-md rounded-full text-gray-900 bg-gray-100 focus:outline-none"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Search
        className="absolute right-3 text-gray-600 cursor-pointer"
        size={20}
        onClick={handleClickSearchIcon}
      />
      {search && results.length > 0 && (
        <ul className="absolute top-full left-0 mt-2 w-full rounded-md shadow-lg z-10">
          {results.map((result, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
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
