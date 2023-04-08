import DashboardLayout from "@/Layout/DashboardLayout";
import Header from "@/components/Header/Header";
import styles from "@/styles/Home.module.css";
import Cookies from "js-cookie";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const people = [
  { id: 1, name: "Banana", unavailable: false },
  { id: 2, name: "Tomato", unavailable: false },
  { id: 3, name: "Potato", unavailable: false },
  { id: 4, name: "Orange", unavailable: false },
];

const SellPage = () => {
  const [selectedStash, setSelectedStash] = useState(people[0]);
  const [product, setProduct] = useState("");
  const [expPrice, setExpPrice] = useState("");
  const [image, setImage] = useState(null);
  console.log(Cookies.get("user_id"));
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product === "" || expPrice === "" || image === null) {
      toast.error("Error");
    }
    const formData = new FormData();
    formData.append("yproduct_image", image);
    await axios
      .post("http://16.171.32.81:8000/api/users/register_stash", formData, {
        params: {
          yexpected_price: expPrice,
          yproduct_name: product,
          category: selectedStash.name,
          user_id: Cookies.get("user"),
          yproduct_image: image,
        },
      })
      .then((res) => {
        toast.success(`Success in Uploading your ${selectedStash.name}`);
        console.log(res);
      })
      .catch((err) => {
        toast.error(`Error in Uploading your ${selectedStash}`);
      });
  };

  return (
    <>
      <DashboardLayout>
        <ToastContainer />
        <main className={styles.dashMain_jc}>
          <Header hide={true}>
            Display your&nbsp;
            <code className={styles.code}>Grow</code>
          </Header>
          <div className="mt-4" style={{ maxWidth: "800px", width: "100%" }}>
            <div className="w-full mt-6 p-10 bg-gray-800 rounded shadow-xl">
              <div className="mt-2">
                <label className="block text-sm text-gray-400">
                  Product Name
                </label>
                <input
                  className="w-full px-5 py-2 text-gray-200 bg-gray-700 rounded"
                  type="text"
                  onChange={(e) => setProduct(e.target.value)}
                  required={true}
                  placeholder="Your Name"
                  aria-label="Name"
                />
              </div>
              <div className="mt-2">
                <label className="block text-sm text-gray-400">Category</label>
                <Listbox value={selectedStash} onChange={setSelectedStash}>
                  <Listbox.Button
                    className="text-gray-200 w-100 bg-gray-700 py-2 text-left px-5 rounded"
                    style={{ width: "100%" }}
                  >
                    {selectedStash.name}
                  </Listbox.Button>
                  <Listbox.Options>
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                        className="text-gray-200 bg-gray-600 py-2 px-5 cursor-pointer hover:bg-gray-500"
                      >
                        {person.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
              <div className="mt-2">
                <label className="block text-sm text-gray-400">
                  Upload Stash Image
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-600 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-gray-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-gray-700 file:px-3 file:py-[0.32rem] file:text-gray-200 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-gray-600 focus:border-purple-400 focus:text-gray-200 focus:shadow-[0_0_0_1px] focus:shadow-purple-400 focus:outline-none"
                  type="file"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="mt-2">
                <label className="block text-sm text-gray-400">
                  Tell us your expected price
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-200 bg-gray-700 rounded"
                  type="text"
                  onChange={(e) => setExpPrice(e.target.value)}
                  required={true}
                  placeholder="Price"
                />
              </div>
              <div className="mt-4 flex justify-between w-full">
                <button
                  className="px-4 py-1 text-white tracking-wider bg-gray-900 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default SellPage;
