"use client";

import Link from "next/link";
import { useState } from "react";

export default function Form() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("idle");
  const [redirect, setRedirect] = useState();

  async function handleSubmit(e: any) {
    e.preventDefault();

    setStatus("loading");

    const res = await fetch("/api/urls", {
      method: "POST",
      body: JSON.stringify({ url }),
    });

    const { data } = await res.json();

    console.log({ data });

    setRedirect(data.id);
    setStatus("idle");
  }

  return (
    <div>
      <label htmlFor="new-url">
        <input
          type="url"
          name="url"
          id="new-url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button
        disabled={status === "loading"}
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {redirect ? (
        <Link className="text-black dark:text-white" href={`/${redirect}`}>
          {redirect}
        </Link>
      ) : null}
    </div>
  );
}
