"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";

const ListView = ({ userRole }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ["categories", currentPage],
    queryFn: async () => {
      const res = await axios.post("http://localhost:8002/category/list", {
        
          page: currentPage,
          limit: 6,
      
      });
      return res.data;
    },
    retry: 1,
    staleTime: 1000 * 60, // 1 minute
  });

  const CategoryList = data?.CategoryList || [];
  const totalPage = data?.totalPage || 1;

  console.log(CategoryList);

  console.log(totalPage);

  // Show toast only once
  React.useEffect(() => {
    if (isError && error?.response?.data?.message) {
      toast.error(error.response.data.message);
    } else if (isError) {
      toast.error("Failed to load data");
    }
  }, [isError, error]);

  return (
    <div className="p-5 rounded-xl bg-gray-50 flex-1">
      <h2 className="text-lg font-semibold mb-3">Categories</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">SN</th>
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {CategoryList.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No categories found.
              </td>
            </tr>
          ) : (
            CategoryList.map((item, index) => (
              <tr key={item._id} {...item} className="border-t">
                <td className="p-2">{(currentPage - 1) * 6 + index + 1}</td>
                <td className="p-2">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="h-10 w-10 object-cover rounded"
                  />
                </td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-200 rounded mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={currentPage >= totalPage}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
          
        </button>
      </div>
    </div>
  );
};

export default ListView;
