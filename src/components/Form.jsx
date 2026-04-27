"use client";
import action from "@/app/action";
import Form from "next/form";
import { useActionState } from "react";

const MyForm = () => {
  const [state, resAction, isPending] = useActionState(action, {
    message: "",
  });
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        {state && state.message && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm font-medium ${
              state.success
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {state.message}
          </div>
        )}
        <Form action={resAction} className="flex flex-col gap-3">
          <input
            name="resname"
            type="text"
            placeholder="Indtast opskrift"
            className="border-2 border-gray-300 rounded px-4 py-3 text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default MyForm;
