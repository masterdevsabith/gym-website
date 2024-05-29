import Image from "next/image";
import React from "react";

interface UserProps {
  image: string;
  name: string;
  classes?: string;
}
const Users = ({ image, name, classes }: UserProps) => {
  return (
    <div className="flex flex-col items-center sm:w-1/3">
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        className={`rounded-full ${classes} mb-2 ring ring-white`}
      />
      <span className="text-white font-semibold">{name}</span>
    </div>
  );
};

export default Users;
