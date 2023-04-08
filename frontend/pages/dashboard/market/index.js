import DashboardLayout from "@/Layout/DashboardLayout";
import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";

import styles from "@/styles/Home.module.css";
import axios from "axios";

const people = [
  { id: 1, name: "Banana", unavailable: false, api: "banana" },
  { id: 2, name: "Tomato", unavailable: false, api: "tomato" },
  { id: 3, name: "Potato", unavailable: false, api: "potato" },
  { id: 4, name: "Orange", unavailable: false, api: "orange" },
];

const MarketPage = () => {
  const [data, setData] = useState("");
  const [drop, setDrop] = useState(people[0]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8000/api/users/${drop.api}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [drop]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8000/api/users/${drop.api}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <DashboardLayout>
        <main className={styles.dashMain_jc}>
          <Header hide={true}>
            View your previous&nbsp;
            <code className={styles.code}>stash</code>
          </Header>
          <div style={{ marginTop: "2rem" }}>
            <div className="mt-2 w-full">
              <label className="block text-sm text-white">Category</label>
              <Listbox value={drop} onChange={setDrop}>
                <Listbox.Button
                  className="text-black w-100 bg-gray-200 py-2 text-left px-5 rounded w-full"
                  style={{ width: "100%" }}
                >
                  {drop.name}
                </Listbox.Button>
                <Listbox.Options>
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      value={person}
                      className="text-black bg-gray-400 py-2 px-5 cursor-pointer hover:bg-gray-500"
                    >
                      {person.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
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
                  <th>Product</th>
                  <th>user</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {data !== "" &&
                  data.map((a, i) => {
                    return (
                      <tr
                        key={i}
                        style={{ border: "1px solid black" }}
                        class="px-6 py-4"
                      >
                        <td className="p-2">{a.Location}</td>
                        <td className="p-2">{a.User}</td>
                        <td className="p-2">{a.Price.toFixed(2)} Rs</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default MarketPage;
