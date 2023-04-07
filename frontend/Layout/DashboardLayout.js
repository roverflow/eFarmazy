import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Loading from "@/components/Loading/Loading";
import Head from "next/head";

const DashboardLayout = (props) => {
  const [loading, setLoading] = useState(true);
  const access_token = Cookies.get("access_token");
  const refresh_token = Cookies.get("refresh_token");
  const logged_in = Cookies.get("logged_in");
  const router = useRouter();
  useEffect(() => {
    if (access_token && refresh_token && logged_in === "true") {
      setLoading(false);
    } else {
      router.push("/auth/signin");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Head>
          <title>eFarmzy</title>
          <meta name="description" content="eFarmzy" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {props.children}
      </>
    );
  }
};

export default DashboardLayout;
