import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AuthLayout from "@/Layout/AuthLayout";

const inter = Inter({ subsets: ["latin"] });

export default function SignUp() {
  return (
    <>
      <AuthLayout>
        <main className={styles.auth_lt}>
          <div className={styles.description}>
            <p>
              Create your&nbsp;
              <code className={styles.code}>Student account</code>
            </p>
            <div>
              <Link href="/about">
                By <code className={styles.code}>Team Threshold</code>
              </Link>
            </div>
          </div>

          {/* <div className={styles.auth}>
            <form className="flex flex-col gap-3" style={{ width: "500px" }}>
              <div className="flex flex-col gap-2">
                <label className={styles.code}>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={styles.code}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={styles.code}>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={styles.code}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={styles.code}>Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  className={styles.code}
                />
              </div>
              <div className={styles.btn_base}>
                <p>Sign Up</p>
              </div>
            </form>
          </div> */}
          <div class="leading-loose">
            <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
              <h1 class="text-gray-800">Registration</h1>
              <div class="">
                <label class="block text-sm text-gray-00" for="cus_name">
                  Name
                </label>
                <input
                  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="cus_name"
                  name="cus_name"
                  type="text"
                  required=""
                  placeholder="Your Name"
                  aria-label="Name"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_email">
                  Email
                </label>
                <input
                  class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Your Email"
                  aria-label="Email"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_email">
                  Phone
                </label>
                <input
                  class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="phone"
                  required=""
                  placeholder="Your Phone"
                  aria-label="Email"
                />
              </div>
              <div class="mt-2">
                <label class=" block text-sm text-gray-600" for="cus_email">
                  Address
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Street"
                  aria-label="Email"
                />
              </div>
              <div class="mt-2">
                <label
                  class="hidden text-sm block text-gray-600"
                  for="cus_email"
                >
                  City
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="City"
                  aria-label="Email"
                />
              </div>
              <div class="inline-block mt-2 w-1/2 pr-1">
                <label
                  class="hidden block text-sm text-gray-600"
                  for="cus_email"
                >
                  Country
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Country"
                  aria-label="Email"
                />
              </div>
              <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label
                  class="hidden block text-sm text-gray-600"
                  for="cus_email"
                >
                  Zip
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Zip"
                  aria-label="Email"
                />
              </div>
              <div class="mt-4 flex justify-between w-full">
                <button
                  class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                >
                  Register
                </button>
                <Link href="/auth/signin" className="text-black cursor-pointer">
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
