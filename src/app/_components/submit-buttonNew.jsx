"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function SubmitButtonNew(props) {
  const { pending } = useFormStatus();
  let buttonName = props?.buttonName || "Submit";
  let variant = props?.variant || "projectbtn";
  return (
    <button
      variant={variant}
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? (
        <div className="flex flex-row justify-center items-center gap-1 text-white ">
          Loading &nbsp;
          <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
        </div>
      ) : (
        buttonName
      )}
    </button>
  );
}
