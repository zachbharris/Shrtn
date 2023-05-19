import prisma from "@/utils/prisma";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = params;

  console.log(id);

  // fetch url from db
  const data = await prisma.url
    .findUnique({
      where: { id: id[0] },
    })
    .catch((err) => {
      return notFound();
    });

  if (!data?.redirect_url) return notFound();

  return redirect(data?.redirect_url);
}
