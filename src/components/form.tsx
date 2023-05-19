"use client";

import { useState } from "react";
import Icon from "./icon";

type Status = "idle" | "loading" | "success" | "error";

export default function Form() {
  const [url, setUrl] = useState("");
  const [pathUrl, setPathUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [redirect, setRedirect] = useState();

  async function handleSubmit(e: any) {
    e.preventDefault();

    setStatus("loading");

    const res = await fetch("/api/urls", {
      method: "POST",
      body: JSON.stringify({ url }),
    });

    const { data } = await res.json();

    setRedirect(data.id);
    setPathUrl(`${window.location.href}/${data.id}`);
    setUrl("");
    setStatus("idle");
  }

  function handleCopy() {
    navigator.clipboard.writeText(pathUrl);
  }

  return (
    <div className="">
      <label htmlFor="new-url" className="flex flex-col gap-2 mb-8">
        <span>Destination URL</span>
        <input
          type="url"
          name="url"
          id="new-url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="rounded-md px-4 py-2 bg-zinc-100/70 dark:bg-zinc-900/70"
        />
      </label>
      <div className="relative block w-full">
        {status === "loading" ? (
          <Icon
            name="loading"
            className="absolute inset-0 m-auto animate-spin"
          />
        ) : null}

        <button
          disabled={status === "loading"}
          type="submit"
          onClick={handleSubmit}
          className={`flex flex-row w-full justify-center items-center gap-2 text-zinc-50 bg-blue-500 enabled:hover:bg-blue-600 dark:bg-blue-700 dark:enabled:hover:bg-blue-800 p-2 rounded-md fill-blue-400 dark:fill-blue-700 mb-8 ${
            status === "loading" ? "opacity-25" : ""
          }`}
        >
          Submit
        </button>
      </div>

      {status !== "loading" && redirect ? (
        <div className="flex flex-row w-full justify-between items-center p-4 bg-zinc-200/70 dark:bg-zinc-900/70 rounded-md">
          <span>{pathUrl}</span>
          <button onClick={handleCopy}>
            <Icon name="copy" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
