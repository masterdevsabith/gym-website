// "use client";

import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
  image: string;
  title: string;
  desc: string;
}

const Cards = ({ image, title, desc }: CardProps) => {
  // const [showFullComment, setShowFullComment] = useState(false);

  // const toggleComment = () => {
  //   setShowFullComment(!showFullComment);
  // };

  // const truncatedComment = (comment: string, maxLength: number) => {
  //   if (comment.split(" ").length > maxLength) {
  //     return comment.split(" ").splice(0, maxLength).join(" ") + "...";
  //   }
  //   return comment;
  // };
  return (
    <div className="mr-6  overflow-hidden bg-white flex flex-col items-center justify-start rounded-lg">
      <Image
        src={image}
        alt="card_image"
        width={500}
        height={500}
        className="w-full"
      />
      <div className="bottom text-black px-4 py-5">
        <h2 className="font-bold">{title}</h2>
        <p className="font-normal text-sm">
          {/* {showFullComment ? desc : truncatedComment(desc, 14)}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleComment}>
            {showFullComment ? " Show less" : " show more"} */}

          {desc}
        </p>
      </div>
    </div>
  );
};

export default Cards;
