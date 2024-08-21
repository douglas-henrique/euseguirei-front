import Header from "@/components/Header";
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <div className="z-10 w-full h-screen max-w-5xl flex flex-col  font-mono text-sm lg:flex border">
        <Header />
        <h1 className="mt-24 text-3xl">Acaso não sabeis? 👑</h1>
        <div className="flex flex-row border flex-1 p-5">
          <AspectRatio ratio={9 / 16} className="bg-muted shadow-md max-w-[400px] max-h-[500px] hover:cursor-pointer hover:scale-105 transition-all hover:shadow-xl">
            <Image
              src="/sacerdote.png"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
            <h1 className="text-white">teste</h1>
          </AspectRatio>
          {/* <Link href='/liturgy'>
            <div className="h[150px] w-[300px] relative rounded-xl h-[400px] ">
              <Image src={'/sacerdote.png'} alt="Sacerdote photo" className="object-cover rounded-3xl " fill objectFit="contain" />
            </div>
          </Link> */}
        </div>
      </div>
    </main>
  );
}
