import DashboardLayout from "@/Layout/DashboardLayout";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import styles from "@/styles/Home.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const Profile = (props) => {
  const router = useRouter();

  const handleLogout = async () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("logged_in");
    Cookies.remove("user");
    const response = await axios
      .get("http://localhost:8000/api/auth/logout")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/auth/signin");
  };

  return (
    <DashboardLayout>
      <main className={styles.dashMain}>
        <Header hide={true}>
          View your&nbsp;
          <code className={styles.code}>Profile</code>
        </Header>
        <div className={styles.basecenter}>
          <ProfileCard handleLogout={handleLogout} />
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Profile;

const ProfileCard = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("http://localhost:8000/api/users/me", {
          params: {
            user_id: `${Cookies.get("user")}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUser();
  }, []);
  return (
    <div className="container mx-auto">
      <div>
        <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
          <div className="flex justify-center">
            <img
              src="https://avatars0.githubusercontent.com/u/35900628?v=4"
              alt=""
              className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div className="mt-16">
            <h1 className="font-bold text-center text-3xl text-gray-900">
              {user && user.name}
            </h1>
            <p className="text-center text-sm text-gray-400 font-medium">
              {user && user.role}
            </p>
            <p>
              <span></span>
            </p>
            <div className="px-6" style={{ margin: "2rem" }}>
              <button
                onClick={props.handleLogout}
                className="w-full text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
              >
                Logout
              </button>
            </div>
            <div className="w-full">
              <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                <span
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Age
                  <span className="text-gray-500 text-xs">
                    {" "}
                    {user && user.age}
                  </span>
                </span>

                <span
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  {user && user.email}
                  <span className="text-gray-500 text-xs">42 min ago</span>
                </span>

                <span
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  {user && user.city}
                </span>

                <span
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  {user && user.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
