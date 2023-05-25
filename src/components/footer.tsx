import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 mx-auto text-center m-4">
      <span>
        crafted by{" "}
        <Link
          href="https://zachbharris.com"
          className="font-semibold font-sans underline underline-offset-4 text-zinc-400"
        >
          zachbharris
        </Link>
      </span>
    </footer>
  );
}
