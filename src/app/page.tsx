import Form from "@/components/form";

export default function Home() {
  return (
    <div className="relative max-w-lg mx-auto w-full">
      <main className="z-0 flex flex-col p-8 w-full">
        <h1 className="font-bold font-sans text-4xl mb-8">Shrtn</h1>
        <Form />
      </main>
    </div>
  );
}
