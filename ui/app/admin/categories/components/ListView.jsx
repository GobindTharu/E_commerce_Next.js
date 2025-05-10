"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmDeleteCard from "../components/ConfirmToDelete";

const ListView = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  

  const { data, isError, error, refetch } = useQuery({
    queryKey: ["categories", currentPage],
    queryFn: async () => {
      const res = await axios.post("http://localhost:8002/category/list", {
        page: currentPage,
        limit: 5,
      });
      return res.data;
    },
    retry: 1,
    staleTime: 1000 * 60,
  });

  useEffect(() => {
    if (isError && error?.response?.data?.message) {
      toast.error(error.response.data.message);
    } else if (isError) {
      toast.error("Failed to load data");
    }
  }, [isError, error]);

  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (!selectedCategory) return;

    try {
      await axios.delete(
        `http://localhost:8002/category/delete/${selectedCategory._id}`
      );
      toast.success("Deleted successfully");
      setShowConfirm(false);
      setSelectedCategory(null);
      refetch();
    } catch (error) {
      toast.error("Failed to delete");
    }
  };
  const handleUpdate = async (item) => {
    setSelectedCategory(item);
    router.push(`/admin/categories?id=${item._id}`);
    console.log(item._id);
  };

  const CategoryList = data?.CategoryList || [];
  const totalPage = data?.totalPage || 1;

  return (
    <div className="p-5 rounded-xl bg-gray-50 flex-1">
      <h2 className="text-lg font-semibold mb-3">Categories</h2>
      <table className="border-separate border-spacing-y-3 w-full">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="bg-gray-200 px-3 py-2  rounded-l-lg">SN</th>
            <th className="bg-gray-200 px-3 py-2">Image</th>
            <th className="bg-gray-200 px-3 py-2 text-left">Name</th>
            <th className="bg-gray-200 px-3 py-2 rounded-r-lg text-center">
              Actions
            </th>
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
            CategoryList.map((item, index) => {
              return (
                <Row
                  key={item._id}
                  item={item}
                  index={index}
                  currentPage={currentPage}
                  handleDeleteClick={handleDeleteClick}
                  handleUpdate={handleUpdate}
                />
              );
            })
          )}
        </tbody>
      </table>

      {showConfirm && selectedCategory && (
        <ConfirmDeleteCard
          name={selectedCategory.name}
          onDelete={confirmDelete}
          onCancel={() => {
            setShowConfirm(false);
            setSelectedCategory(null);
          }}
        />
      )}

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

function Row({ item, index, currentPage, handleDeleteClick, handleUpdate }) {
  return (
    <tr
      key={item._id}
      className="border-separate border-spacing-y-3 py-3 w-full"
    >
      <td className=" bg-gray-200 px-3 py-2 rounded-l-lg">
        {(currentPage - 1) * 5 + index + 1}
      </td>
      <td className=" bg-gray-200 px-3 py-2">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="h-10 w-10 object-cover rounded"
        />
      </td>
      <td className=" bg-gray-200 px-3 py-2">{item.name}</td>
      <td className="flex flex-row justify-center gap-x-3 bg-gray-200 px-3 py-3  rounded-r-lg text-center">
        <Button
          onClick={() => handleUpdate(item)}
          variant="contained"
          size="small"
          endIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDeleteClick(item)}
          variant="outlined"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default ListView;
