import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import DashboardLayout from "@/Layout/DashboardLayout";

const inter = Inter({ subsets: ["latin"] });

const dashboardRoutes = [
  {
    path: "/dashboard/sell",
    name: "Sell",
    description: "Sell your stash.",
  },
  {
    path: "/dashboard/view",
    name: "View",
    description: "View your previous reports.",
  },
  {
    path: "/dashboard/market",
    name: "Market",
    description: "View the Market.",
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
    description: "View your profile.",
  },
];

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <main className={styles.main}>
          <Header>
            Get started by choosing&nbsp;
            <code className={styles.code}>Your Option</code>
          </Header>
          <Link href={`/`} className={styles.center}>
            <Image src={require("/assets/efarm.svg")} alt="aamsLogo" priority />
          </Link>

          <div className={styles.grid}>
            {dashboardRoutes.map((route, i) => {
              return (
                <Link href={route.path} className={styles.card} key={i}>
                  <h2 className={inter.className}>{route.name}</h2>
                  <p className={inter.className}>{route.description}</p>
                </Link>
              );
            })}
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
