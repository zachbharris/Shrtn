import prisma from "@/utils/prisma";
import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: {
    ids: string[];
  };
};

export default async function Page({ params }: PageProps) {
  const { ids } = params;
  const [id] = ids;

  console.log(id);

  // fetch url from db
  const data = await prisma.url
    .findUnique({
      where: { id },
    })
    .catch((err) => {
      return notFound();
    });

  if (!data?.redirect_url) return notFound();

  return redirect(data?.redirect_url);
}
