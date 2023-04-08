import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
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
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>About the team</code>
          </p>
          <div>
            <Link href="/about">
              By <code className={styles.code}>Team AAMS</code>
            </Link>
          </div>
        </div>

        <Link href={`/`} className={styles.center}>
          <Image
            src={require("/assets/efarm.svg")}
            alt="Next.js Logo"
            priority
          />
        </Link>

        <div className={styles.grid}>
          <a
            href="https://github.com/roverflow"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Vinay
              {/* <span>-&gt;</span> */}
            </h2>
            <p className={inter.className}>1JT19CS102</p>
          </a>

          <a
            href="https://github.com/bitmos"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Shravan
              {/* <span>-&gt;</span> */}
            </h2>
            <p className={inter.className}>1JT19CS086</p>
          </a>

          <a
            href="https://github.com/RakshithJKashyap"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Rakshith
              {/* <span>-&gt;</span> */}
            </h2>
            <p className={inter.className}>1JT19CS069</p>
          </a>

          <a
            href="https://github.com/sarvajith2000"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Krishna Koustub
              {/* <span>-&gt;</span> */}
            </h2>
            <p className={inter.className}>Unknown</p>
          </a>
        </div>
      </main>
    </>
  );
}
