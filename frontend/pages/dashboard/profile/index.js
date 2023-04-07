import DashboardLayout from "@/Layout/DashboardLayout";
import React from "react";
import Header from "@/components/Header/Header";
import styles from "@/styles/Home.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

const Profile = () => {
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("logged_in");
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
  return (
    <div class="container mx-auto">
      <div>
        <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
          <div class="flex justify-center">
            <img
              src="https://avatars0.githubusercontent.com/u/35900628?v=4"
              alt=""
              class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div class="mt-16">
            <h1 class="font-bold text-center text-3xl text-gray-900">
              Vinay Mulugund
            </h1>
            <p class="text-center text-sm text-gray-400 font-medium">
              Redhat @Ansible
            </p>
            <p>
              <span></span>
            </p>
            <div class="px-6" style={{ margin: "2rem" }}>
              <button
                onClick={props.handleLogout}
                class="w-full text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
              >
                Logout
              </button>
            </div>
            <div class="w-full">
              <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                <span
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Updated his status
                  <span class="text-gray-500 text-xs">24 min ago</span>
                </span>

                <span
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Added new profile picture
                  <span class="text-gray-500 text-xs">42 min ago</span>
                </span>

                <span
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Posted new article in <span class="font-bold">#Web Dev</span>
                  <span class="text-gray-500 text-xs">49 min ago</span>
                </span>

                <span
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Edited website settings
                  <span class="text-gray-500 text-xs">1 day ago</span>
                </span>

                <span
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2 "
                  />
                  Added new rank
                  <span class="text-gray-500 text-xs">5 days ago</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
