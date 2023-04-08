import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AuthLayout from "@/Layout/AuthLayout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async () => {
    if (
      email === "" &&
      password === "" &&
      cpassword === "" &&
      name === "" &&
      phone === "" &&
      address === "" &&
      state === "" &&
      city === "" &&
      zip === "" &&
      age === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    if (password !== cpassword) {
      toast.error("Passwords do not match");
      return;
    }
    const data = {
      name: name,
      email: email,
      age: age,
      address: address,
      city: city,
      state: state,
      phone: phone,
      zip: zip,
      password: password,
      passwordConfirm: cpassword,
      role: "user",
      created_at: 0,
      updated_at: 0,
      verified: false,
    };

    await axios
      .post("http://16.171.32.81:8000/api/auth/register", data)
      .then((res) => {
        toast.success("Account created successfully");
        setTimeout(() => {
          router.push("/auth/signin");
        }, 2);
      })
      .catch((err) => {
        toast.error("Error in creating account");
        console.log(err);
      });
  };
  return (
    <>
      <AuthLayout>
        <main className={styles.auth_lt}>
          <div className={styles.description}>
            <p>
              Create your&nbsp;
              <code className={styles.code}>account</code>
            </p>
            <div>
              <Link href="/about">
                By <code className={styles.code}>Team Threshold</code>
              </Link>
            </div>
          </div>
          <div class="leading-loose">
            <div class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
              <h1 class="text-gray-800">Registration</h1>
              <div class="">
                <label class="block text-sm text-gray-00" for="cus_name">
                  Name
                </label>
                <input
                  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required="true"
                  placeholder="Your Name"
                  aria-label="Name"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600">Email</label>
                <input
                  class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  required="true"
                  placeholder="Your Email"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600">Phone</label>
                <input
                  class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  required="true"
                  placeholder="Your Phone"
                />
              </div>
              <div class="mt-2">
                <label class=" block text-sm text-gray-600">Address</label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  required="true"
                  placeholder="Street"
                />
              </div>
              <div class="mt-2">
                <label class="hidden text-sm block text-gray-600">City</label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  required="true"
                  placeholder="City"
                />
              </div>
              <div class="inline-block mt-2 w-1/2 pr-1">
                <label class="hidden block text-sm text-gray-600">State</label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  required="true"
                  placeholder="State"
                />
              </div>
              <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label class="hidden block text-sm text-gray-600">Zip</label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  onChange={(e) => setZip(e.target.value)}
                  type="text"
                  required="true"
                  placeholder="Zip"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600">Age</label>
                <input
                  class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  type="int"
                  onChange={(e) => setAge(e.target.value)}
                  required="true"
                  placeholder="Your Age"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600">Password</label>
                <input
                  class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required="true"
                  placeholder="Your Password"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600">
                  Confirm Password
                </label>
                <input
                  class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  onChange={(e) => setCPassword(e.target.value)}
                  type="password"
                  required="true"
                  placeholder="Confirm Password"
                />
              </div>
              <div class="mt-4 flex justify-between w-full">
                <button
                  class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  onClick={handleSubmit}
                >
                  Register
                </button>
                <Link href="/auth/signin" className="text-black cursor-pointer">
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
        </main>
        <ToastContainer />
      </AuthLayout>
    </>
  );
}
