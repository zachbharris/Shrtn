import Form from "@/components/form";

export default function Home() {
  return (
    <div className="relative max-w-lg mx-auto w-full">
      <div className="relative -z-10 blur-2xl opacity-40">
        <span className="absolute block h-[600px] w-[600px] bg-purple-600 -top-[150px] -left-48 rounded-full animate-shimmy mix-blend-overlay" />
        <span className="absolute block h-[600px] w-[600px] bg-blue-600 -top-[150px] -right-48 rounded-full animate-shimmy animation-delay-2 mix-blend-overlay" />
      </div>
      <main className="z-0 flex flex-col p-8 w-full">
        <h1 className="font-bold font-sans text-4xl mb-8">Shrtn</h1>
        <Form />
      </main>
    </div>
  );
}
