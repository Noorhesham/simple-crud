import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const ModalCustom = ({ btn, content, title }: { btn: JSX.Element; content: JSX.Element; title?: string }) => {
  return (
    <Dialog>
      <DialogTrigger>{btn}</DialogTrigger>
      <DialogContent className=" py-10 px-5 min-h-[20vh]">
        <DialogHeader>{<DialogTitle>{title}</DialogTitle>}</DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default ModalCustom;
