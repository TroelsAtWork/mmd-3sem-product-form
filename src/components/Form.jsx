"use client";
import action from "@/app/action";
import Form from "next/form";
import { useActionState } from "react";

const MyForm = () => {
  const [state, resAction, isPending] = useActionState(action, {
    message: "",
  });
  return (
    <>
      <div>{state && state.message}</div>
      <Form action={resAction} className="flex flex-col gap-3 p-6 max-w-sm">
        <input
          name="resname"
          type="text"
          placeholder="name"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </>
  );
};

export default MyForm;
