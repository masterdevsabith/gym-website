import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
  href: string;
  classes?: string;
}

const Button = ({ title, href, classes }: ButtonProps) => {
  return (
    <Link href={href} className={`px-4 py-3  text-black font-bold ${classes}`}>
      {title}
    </Link>
  );
};

export default Button;
