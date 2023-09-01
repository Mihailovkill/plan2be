"use client";
import React, { useRef, useEffect } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import MainButton from "./components/buttons/MainButton";
import LoginButton from "./components/buttons/LoginButton";
import RegisterButton from "./components/buttons/RegisterButton";

export default function Home() {
  const registerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (registerButtonRef.current) {
        const rect = registerButtonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top; // y position within the element.

        registerButtonRef.current.style.setProperty("--x", `${x}px`);
        registerButtonRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    registerButtonRef.current?.addEventListener("mousemove", handleMouseMove);
    return;
    /* TODO: complete the logic for when hover is not active then the circle should disappear */
  }, []);
  return (
    <>
      <Head>
        <title>Plan2be</title>
        <meta name="description" content="Plan2be" />
      </Head>
      <header className={styles.header}>
        <MainButton text="About" href="/about" />
        <MainButton text="Contact" href="/contact" />
        <MainButton text="Support" href="/support " />
        <MainButton text="Code Snippets - DELETE" href="/codeSnippets " />
      </header>
      <main className={styles.main}>
        <div className={styles.mainPic}>
          <Image
            src={"/home.jpg"}
            height={586}
            width={879}
            alt="Connect with other devs"
          />
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <LoginButton />
          </div>
          <div className={styles.card}>
            <RegisterButton />
          </div>
        </div>
      </main>
    </>
  );
}
