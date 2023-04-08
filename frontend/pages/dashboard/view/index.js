import DashboardLayout from "@/Layout/DashboardLayout";
import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { Cookie } from "next/font/google";
import Cookies from "js-cookie";

const ViewPage = () => {
  const [stash, setStash] = useState("");
  useEffect(() => {
    const fetchx = async () => {
      await axios
        .get(`http://16.171.32.81:8000/api/users/getStash`, {
          params: {
            user_id: Cookies.get("user"),
          },
        })
        .then((res) => {
          console.log(res);
          setStash(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchx();
  }, []);

  return (
    <>
      <DashboardLayout>
        <main className={styles.dashMain_jc}>
          <Header hide={true}>
            View your previous&nbsp;
            <code className={styles.code}>stash</code>
          </Header>
          <table class="w-full max-w-1100 border border-gray-200 mt-16 bg-gray-800 text-white text-sm font-light">
            <thead class="bg-gray-700 border-b border-gray-600 font-medium">
              <tr>
                <th class="px-6 py-4 text-left">Product Name</th>
                <th class="px-6 py-4 text-left">Category</th>
                <th class="px-6 py-4 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {stash !== "" &&
                stash.map((data, i) => (
                  <tr
                    key={i}
                    class="border-b border-gray-600 hover:bg-gray-700"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      {data.ProductName}
                    </td>
                    <td class="px-6 py-4">{data.Category}</td>
                    <td class="px-6 py-4 text-right">
                      Rs. {data.Score.toFixed(2)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      </DashboardLayout>
    </>
  );
};

export default ViewPage;
