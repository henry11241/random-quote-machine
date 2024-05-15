import Buttons from "@/components/buttons";
import QuoteAuthor from "@/components/quoteAuthor";
import QuoteText from "@/components/quoteText";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-700">
      <div className="flex flex-col card bg-white min-h-[300px] w-[550px] px-[40px] py-[50px] rounded justify-between">
        <QuoteText />
        <QuoteAuthor />
        <Buttons />
      </div>
    </main>
  )
}
