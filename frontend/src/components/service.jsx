import { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateProductMutation } from "../redux/api/ProductSlice.js";
import { toast } from "react-toastify";

const service = () => {
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState("");
  const [Duration, setDuration] = useState("");
  const navigate = useNavigate();

  const [createproduct] = useCreateProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = new FormData();
      productData.append("Title", Title);
      productData.append("Amount", Amount);
      productData.append("Duration", Duration);

      const { data } = await createproduct(productData);

      if (data.error) {
        toast.error("product create failed");
      } else {
        toast.success("success!");
        navigate("/user");
      }
    } catch (error) {
      console.error(error);
      toast.error("Product create failed");
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        <form
          className=" shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          style={{ backgroundColor: "#E25B45" }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Create New Item
          </h2>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Title"
              type="text"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Amount"
              type="number"
              value={Amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="duration"
            >
              Duration
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Duration"
              value={Duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            >
              <option value="">Select duration</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
            </select>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-white hover:bg-gray-100 text-[#E25B45] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              type="submit"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default service;
