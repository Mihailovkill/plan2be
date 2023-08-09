import Link from "next/link";
import styles from "src/styles/buttons/MainButton.module.css";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <div className={styles.linkButton}>
      <Link href={href} passHref>
        <button className={styles.button}>{text}</button>
      </Link>
    </div>
  );
};

export default Button;
