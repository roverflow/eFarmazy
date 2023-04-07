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
    path: "/dashboard/pickaclass",
    name: "Class",
    description: "Pick a space to teach.",
  },
  {
    path: "/dashboard/availability",
    name: "Availability",
    description: "Check classroom availability.",
  },
  {
    path: "/dashboard/report",
    name: "Report",
    description: "View the attendance report.",
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
            <code className={styles.code}>Your Class</code>
          </Header>
          <Link href={`/`} className={styles.center}>
            <Image
              src={require("/assets/aams.png")}
              alt="aamsLogo"
              style={{ width: "100%", height: "100%" }}
              priority
            />
          </Link>

          <div className={styles.grid}>
            {dashboardRoutes.map((route) => {
              return (
                <Link href={route.path} className={styles.card}>
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
