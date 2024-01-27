"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
  containerClassName?: string;
}

const Skeleton: React.FC<SkeletonProps> = (props: SkeletonProps) => {
  const baseContainerClass = "max-w-sm animate-pulse";
  const baseSkeletonClass = "bg-[#0E191F] rounded-2xl w-full mb-4";
  return (
    <div
      className={
        props.containerClassName
          ? `${baseContainerClass} ${props.containerClassName}`
          : baseContainerClass
      }
    >
      <div
        className={
          props.className
            ? `${baseSkeletonClass} ${props.className}`
            : baseSkeletonClass
        }
      />
    </div>
  );
};

export default Skeleton;
