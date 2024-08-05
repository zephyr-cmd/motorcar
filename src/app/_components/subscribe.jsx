"use client";

// import { SubmitButton } from "@/components/component/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
// import { createSubscriber } from "@/components/component/_actions";
// import { toast } from "sonner";

const initialState = {
  message: "",
};

function Subscribe() {
  // const [state, formAction] = useFormState(createSubscriber, initialState);
  // useEffect(() => {
  //   // if (state.message) {
  //   //   toast(`${state.message}`, {
  //   //     // description: "Sunday, December 03, 2023 at 9:00 AM",
  //   //   });
  //   }
  // }, [state.message]);

  return (
    <div>
      <p className="font-semibold text-lg">Subscribe</p>
      <Label className="mb-4" htmlFor="join-our-newsletter">
        Join our newsletter to stay up to date on features and releases.
      </Label>
      {/* <form className="flex flex-col space-y-3" action={formAction}> */}
      <form className="flex flex-col space-y-3">
        <Input
          className="px-4 py-2 border border-gray-600 rounded-lg text-black"
          placeholder="name@exmaple.com"
          type="email"
          name="email"
        />
        <p className="text-sm text-red-700" aria-live="polite">
          {/* {state?.errors?.email} */}
        </p>
        {/* <SubmitButton variant="projectbtn1">Subscribe</SubmitButton> */}
        {/* <p
          className="text-sm text-red-700"
          aria-live="polite"
          // className="sr-only"
        >
          {state.message}
        </p> */}
      </form>
      {}
      <p className="text-xs text-gray-300 mt-2">
        By subscribing you agree to our{" "}
        <span>
          <Link className="text-gray-500 underline" href="#">
            Privacy Policy
          </Link>{" "}
        </span>
        and provide consent to receive updates from our company.{"\n"}
      </p>
    </div>
  );
}

export default Subscribe;
