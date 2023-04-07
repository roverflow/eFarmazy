import Head from "next/head";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "@/components/Loading/Loading";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (
      Cookies.get("access_token") &&
      Cookies.get("refresh_token") &&
      Cookies.get("logged_in") === "true"
    ) {
      router.push("/dashboard");
    } else {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <>
      <Head>
        <title>AAMS</title>
        <meta
          name="description"
          content="Automatic Attendence Management System"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/aams.svg" />
      </Head>
      <Loading />
    </>
  );
}
