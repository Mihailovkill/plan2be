import React, { useRef, useEffect } from "react";
import styles from "@components/buttons/LoginButton.module.css";

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
    return () =>
      loginButtonRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <button ref={loginButtonRef} className={styles.loginButton}>
      Login
    </button>
  );
};

export default LoginButton;
