import Image from "next/image";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function BlogPage() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-6 py-10">
      <div className="w-full flex-col gap-6">
        <h1 className="w-full scroll-m-20 px-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Blog
        </h1>
        <p className="text-muted-foreground max-w-lg text-center text-lg">
          Explore the latest news and updates from the community
        </p>
      </div>
      <Separator />
      <div className="grid w-full grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...new Array(6).fill(0)].map((_, i) => (
          <Card
            key={`blog-post-${i}`}
            className="flex h-full max-h-96 w-full max-w-96 flex-col gap-2 p-2"
          >
            <Image
              src={"/assets/howls-1.jpeg"}
              width={256}
              height={256}
              className="h-full w-full max-w-96 rounded-lg object-contain"
              alt="blog photo"
              priority
            />
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              The Joke Tax
            </h3>
            <p className="text-muted-foreground text-sm">
              Explore how the Tony Hawk's Pro Skater series has influenced
            </p>
            <p className="text-muted-foreground text-sm">July 4, 2023</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
