import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import React from "react";

const CustomButton = ({
  onClick,
  children,
  text,
  className,
  disabled,
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  text: string;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <Button className={`${className || ""} min-w-[150px]`} onClick={onClick && onClick}>
      {disabled ? <Loader className=" text-center m-auto animate-spin" /> : text}
      {children && children}
    </Button>
  );
};

export default CustomButton;
