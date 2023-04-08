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
        .get(`http://16.171.32.81:8000/api/users/${drop.api}`)
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
        .get(`http://16.171.32.81:8000/api/users/${drop.api}`)
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
            Buy Fresh&nbsp;
            <code className={styles.code}>Vegetables & Fruits</code>
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
            <table class="w-full max-w-1100 border border-gray-700 mt-4 bg-gray-900 text-gray-100 text-sm font-light">
              <thead class="bg-gray-800 border-b border-gray-700 font-medium">
                <tr>
                  <th class="px-6 py-4 text-left">Product</th>
                  <th class="px-6 py-4 text-left">User</th>
                  <th class="px-6 py-4 text-right">Price</th>
                  <th class="px-6 py-4 text-center">Availability</th>
                </tr>
              </thead>
              <tbody>
                {data !== "" &&
                  data.map((a, i) => {
                    return (
                      <tr
                        key={i}
                        class="border-b border-gray-700 hover:bg-gray-800"
                      >
                        <td class="px-6 py-2 whitespace-nowrap">
                          {a.Location}
                        </td>
                        <td class="px-6 py-2 whitespace-nowrap">{a.User}</td>
                        <td class="px-6 py-2 text-right whitespace-nowrap">
                          {a.Price.toFixed(2)} Rs
                        </td>
                        <td class="px-6 py-2">
                          <a
                            class="inline-block px-4 py-2 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition duration-200"
                            href="#"
                          >
                            Buy Now
                          </a>
                        </td>
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
