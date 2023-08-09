import React, { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/buttons/LoginButton.module.css";

const LoginButton: React.FC = () => {
  const loginButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (loginButtonRef.current) {
        const rect = loginButtonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top; // y position within the element.

        loginButtonRef.current.style.setProperty("--x", `${x}px`);
        loginButtonRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    loginButtonRef.current?.addEventListener("mousemove", handleMouseMove);
    return;

    /* TODO: complete the logic for when hover is not active then the circle should disappear */
  }, []);

  return (
    <Link href={"/login"}>
      <button ref={loginButtonRef} className={styles.loginButton}>
        <div className={styles.bigSpan}>
          <span className={styles.span}>Sign in</span>
        </div>
        <div className={styles.smallSpan}>
          <span className={styles.span}>
            Welcome back! Here you can sign in <br /> to your existing account.
          </span>
        </div>
      </button>
    </Link>
  );
};

export default LoginButton;
