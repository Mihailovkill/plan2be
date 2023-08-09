import React, { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/buttons/RegisterButton.module.css";

const RegisterButton: React.FC = () => {
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
    <Link href={"/register"} className={styles.regLink}>
      <button ref={registerButtonRef} className={styles.registerButton}>
        <div className={styles.bigSpan}>
          <span className={styles.span}>Sign up</span>
        </div>
        <div className={styles.smallSpan}>
          <span className={styles.span}>Sign up and explore today.</span>
        </div>
      </button>
    </Link>
  );
};

export default RegisterButton;
