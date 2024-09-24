import { auth } from "@clerk/nextjs/server";
import { ArrowRight, BoxIcon } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "~/components/product-card";
import { SimpleCard } from "~/components/simple-card";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const user = auth();
  const hello = await api.hello();
  const protectedHello =
    user && user.userId ? await api.protectedHello() : "not signed in :(";

  return (
    <HydrateClient>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-12 py-6 pb-24">
        <section className="flex w-full flex-col items-center gap-4 py-8 md:py-12 xl:py-20">
          <div className="flex flex-col items-center gap-2 px-5">
            <h1 className="w-full scroll-m-20 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Foundation for your commerce platform
            </h1>
            <p className="max-w-lg text-center text-lg text-muted-foreground">
              Skateshop is an open-source platform for building and customizing
              your own commerce platform with ease. TRPC would like to say
              &apos;
              {hello}&apos;. TRPC would also like to say that &apos;
              {protectedHello}&apos;
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-4">
            <Button variant="default">Buy Now</Button>
            <Button variant="outline" className="h-full">
              Sell Now
            </Button>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-items-center gap-2 pt-4 sm:grid-cols-2 sm:gap-4 sm:pt-8 md:grid-cols-4 md:pt-12">
            {[...new Array(4).fill(0)].map((_, i) => (
              <SimpleCard
                key={`stores-${i}`}
                title="Skateboards"
                descripition="The best skateboards for all levels of skaters"
                icon={<BoxIcon className="h-4 w-4" />}
                footer="10 products"
              />
            ))}
          </div>
        </section>
        <section className="flex w-full flex-col items-center gap-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl">
                Featured products
              </h2>
              <p className="max-w-lg text-sm text-muted-foreground sm:text-base md:text-lg">
                Explore products from around the world
              </p>
            </div>
            <Link
              href="/products"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hidden sm:block",
              )}
            >
              <p className="flex items-center gap-2">
                View all products <ArrowRight className="h-4 w-4" />
              </p>
            </Link>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-items-center gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
            {[...new Array(9).fill(0)].map((_, i) => (
              <ProductCard
                key={`product-${i}`}
                classname="h-full w-full"
                product={{ name: "Electronic Granite Towls", price: 251 }}
              />
            ))}
          </div>
          <Link
            href="/products"
            className={cn(buttonVariants({ variant: "ghost" }), "sm:hidden")}
          >
            <p className="flex items-center gap-2">
              View all stores <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
        </section>
        <section className="flex w-full flex-col items-center gap-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl">
                Featured stores
              </h2>
              <p className="max-w-lg text-sm text-muted-foreground sm:text-base md:text-lg">
                Explore stores from around the world
              </p>
            </div>
            <Link
              href="/products"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "hidden sm:block",
              )}
            >
              <p className="flex items-center gap-2">
                View all stores <ArrowRight className="h-4 w-4" />
              </p>
            </Link>
          </div>
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
            {[...new Array(6).fill(0)].map((_, i) => (
              <SimpleCard
                key={`stores-${i}`}
                title="skateshop"
                descripition="skateboarding gears for skaters"
                icon={<BoxIcon className="h-4 w-4" />}
                footer="10 products"
              />
            ))}
          </div>
          <Link
            href="/products"
            className={cn(buttonVariants({ variant: "ghost" }), "sm:hidden")}
          >
            <p className="flex items-center gap-2">
              View all stores <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
        </section>
      </div>
    </HydrateClient>
  );
}
