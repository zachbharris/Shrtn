"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

import Icon from "./icon";
import { z } from "zod";

type Inputs = {
  url: string;
};

type Status = "idle" | "loading" | "success" | "error" | "copied";

const formSchema = z.object({
  url: z.string().url(),
});

export default function Form() {
  const [pathUrl, setPathUrl] = useState(
    "https://thisisareallylongurlthatkeepsgoingonforeverandireally.com/shouldfixthatyouknow"
  );
  const [status, setStatus] = useState<Status>("idle");
  const [redirect, setRedirect] = useState();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<Inputs> = async (e: any) => {
    switch (status) {
      case "success":
        handleCopy();
        setStatus("copied");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus("idle");
        reset();
        break;
      case "idle": {
        setStatus("loading");
        const values = getValues();
        const res = await fetch("/api/urls", {
          method: "POST",
          body: JSON.stringify({ url: values.url }),
        });

        const { data } = await res.json();

        setRedirect(data.id);
        setPathUrl(`${window.location.href}${data.id}`);
        setStatus("success");
        setStatus("success");
        break;
      }
    }
  };

  function handleCopy() {
    navigator.clipboard.writeText(pathUrl);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="url" className="flex flex-col gap-2 mb-8">
          <span>Destination URL</span>
          <input
            {...register("url", {
              required: true,
            })}
            type="url"
            id="url"
            autoFocus
            placeholder="https://example.com"
            className="rounded-md px-4 py-2 bg-zinc-200/90 dark:bg-zinc-800/70 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.url ? (
            <span className="text-red-500">
              {errors.url.message ?? "Something went wrong."}
            </span>
          ) : null}
        </label>

        <div className="relative flex flex-row gap-4">
          <button
            disabled={status === "loading"}
            type="submit"
            className={`relative flex flex-row w-full justify-center items-center text-zinc-50 bg-blue-500 enabled:hover:bg-blue-600 dark:bg-blue-700 dark:enabled:hover:bg-blue-800 px-4 py-2 rounded-md fill-blue-400 dark:fill-blue-700 transition-colors ease-in-out overflow-hidden h-10 focus:outline-none focus:ring focus:ring-blue-500`}
          >
            <AnimatePresence initial={false} presenceAffectsLayout>
              {status === "loading" ? (
                <motion.div
                  key="loading"
                  initial={{ y: -40, position: "absolute" }}
                  animate={{ y: 0 }}
                  exit={{ y: 40, position: "absolute" }}
                >
                  <Icon name="loading" className="animate-spin" />
                </motion.div>
              ) : status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ y: -40, position: "absolute" }}
                  animate={{ y: 0 }}
                  exit={{ y: 40, position: "absolute" }}
                  className="grid grid-flow-col justify-between gap-2 items-center"
                >
                  <span className="text-ellipsis overflow-hidden ">
                    {pathUrl}
                  </span>
                  <Icon name="copy" />
                </motion.div>
              ) : status === "copied" ? (
                <motion.div
                  key="copied"
                  initial={{
                    y: -40,
                    position: "absolute",
                  }}
                  animate={{
                    y: 0,
                    position: "absolute",
                  }}
                  exit={{ y: 40, position: "absolute" }}
                  className="flex flex-row gap-2 items-center"
                >
                  <Icon name="check" />
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ y: -40, position: "absolute" }}
                  animate={{ y: 0 }}
                  exit={{ y: 40, position: "absolute" }}
                  className="flex flex-row gap-2 justify-center items-center"
                >
                  <Icon name="magic" />
                  <span>shrtn</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </form>
    </div>
  );
}

function useTextAnimation() {
  const [scope, animate] = useAnimate();

  animate(
    "div",
    { y: -40, position: "absolute" },
    { duration: 0.5, delay: 0.25 }
  );

  return scope;
}
