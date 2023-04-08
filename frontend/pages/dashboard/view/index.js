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
        .get("http://localhost:8000/api/users/getStash", {
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
          <table
            style={{
              maxWidth: "1100px",
              width: "100%",
              border: "1px solid black",
              marginTop: "4rem",
            }}
            className="bg-white text-black text-center  text-sm font-light"
          >
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {stash !== "" &&
                stash.map((data, i) => (
                  <tr
                    key={i}
                    style={{ border: "1px solid black" }}
                    class="px-6 py-4"
                  >
                    <td>{data.ProductName}</td>
                    <td>{data.Category}</td>
                    <td>{data.Score}</td>
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
