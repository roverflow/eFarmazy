import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import AuthLayout from "@/Layout/AuthLayout";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    axios
      .post("http://16.171.32.81:8000/api/auth/login", { email, password })
      .then((res) => {
        Cookies.set("access_token", res.data.access_token, {
          sameSite: "strict",
        });
        Cookies.set("refresh_token", res.data.refresh_token, {
          sameSite: "strict",
        });
        Cookies.set("logged_in", "true", { sameSite: "strict" });
        Cookies.set("user", res.data.user, { sameSite: "strict" });
        router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Credentials");
        console.log("error in logging in");
      });
  };

  return (
    <>
      <AuthLayout>
        <main className={styles.auth_lt}>
          <div className={styles.description}>
            <p>
              <code className={styles.code}>Sign in</code>&nbsp;to your account
            </p>
            <div>
              <Link href="/about">
                By <code className={styles.code}>Team Threshold</code>
              </Link>
            </div>
          </div>

          <div className={styles.auth}>
            <form className="flex flex-col gap-3" style={{ width: "500px" }}>
              <div className="flex flex-col gap-2">
                <label className={styles.code}>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className={styles.code}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={styles.code}>Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className={styles.code}
                />
              </div>
              <div
                className={styles.btn_base}
                type="submit"
                onClick={handleSubmit}
              >
                <p>Sign in</p>
              </div>
            </form>
          </div>

          <div className="flex">
            <Link href="/auth/signup" className={styles.card}>
              <h2 className={inter.className}>SignUp</h2>
              <p className={inter.className}>Already have an account?</p>
            </Link>
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
