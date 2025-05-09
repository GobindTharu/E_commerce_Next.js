"use client";

const ConfirmDeleteCard = ({ name, onDelete, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Delete Category</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Are you sure you want to delete <span className="font-semibold text-gray-900">{name}</span>? 
          This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-xl text-gray-700 border border-gray-300 hover:bg-gray-100 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-5 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteCard;
