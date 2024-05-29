"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ReviewProps {
  name: string;
  comment: string;
  image: string;
}

const Review = ({ name, comment, image }: ReviewProps) => {
  const [showFullComment, setShowFullComment] = useState(false);

  const toggleComment = () => {
    setShowFullComment(!showFullComment);
  };

  const truncatedComment = (comment: string, maxLength: number) => {
    if (comment.split(" ").length > maxLength) {
      return comment.split(" ").splice(0, maxLength).join(" ") + "...";
    }
    return comment;
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mr-3 flex flex-col items-center">
      <Image
        src={image}
        alt="customer_image"
        width={60}
        height={60}
        className="rounded-full mb-3"
      />
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-gray-600">
        {showFullComment ? comment : truncatedComment(comment, 14)}
        <span className="text-blue-500 cursor-pointer" onClick={toggleComment}>
          {showFullComment ? " Show less" : " show more"}
        </span>
      </p>
    </div>
  );
};

export default Review;
