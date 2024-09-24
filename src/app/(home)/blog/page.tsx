import Image from "next/image";
import Link from "next/link";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function BlogPage() {
  return (
    <div className="flex h-full w-full max-w-screen-xl flex-col items-center gap-6 py-10">
      <div className="flex w-full flex-col gap-2 py-2">
        <h1 className="w-full scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Blog
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Explore the latest news and updates from the community
        </p>
      </div>
      <Separator />
      <div className="grid w-full grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...new Array(6).fill(0)].map((_, i) => (
          <Link
            href={"/blog/something"}
            className="flex h-full max-h-96 w-full max-w-96 flex-col gap-2"
            key={`blog-post-${i}`}
          >
            <Card>
              <Image
                src={"/assets/howls-1.jpeg"}
                width={256}
                height={256}
                className="h-full w-full max-w-96 rounded-lg object-contain"
                alt="blog photo"
                priority
              />
            </Card>
            <h3 className="scroll-m-20 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold tracking-tight">
              The Joke Tax The Joke Tax The Joke Tax
            </h3>
            <p className="line-clamp-2 overflow-hidden text-ellipsis text-sm text-muted-foreground xl:line-clamp-3">
              Explore how the Tony Hawk's Pro Skater series has influenced Pro
              Skater series has influenced
            </p>
            <p className="text-sm text-muted-foreground">July 4, 2023</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
