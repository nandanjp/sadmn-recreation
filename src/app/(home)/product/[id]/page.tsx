import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { ProductCard } from "~/components/product-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  return (
    <div className="container mx-auto flex w-full max-w-screen-xl flex-col items-center gap-6 pb-12 pt-4">
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[4fr_3fr]">
        <Card>
          <Image
            src={"/assets/your-name-2.jpeg"}
            alt="your name is goated"
            width={1920}
            height={1080}
            className="h-full w-full rounded-xl object-cover"
          />
        </Card>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-normal">
              Generic Rubber Bacon
            </h1>
            <p className="text-lg text-muted-foreground">$669</p>
            <p className="text-lg text-muted-foreground">skateshop</p>
          </div>
          <Separator />
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-6">
              <p className="pb-2 text-lg text-muted-foreground">80 in stock</p>
              <div className="flex items-center gap-2">
                {[...new Array(5).fill(0)].map((_, i) => (
                  <Star className="h-4 w-4 text-yellow-400" key={`star-${i}`} />
                ))}
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Button size={"lg"}>Buy now</Button>
                <Button variant="outline" size={"lg"}>
                  Add to cart
                </Button>
              </div>
            </div>
            <Button size={"icon"} variant={"outline"}>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
          <Separator />
          <Accordion
            type="single"
            collapsible
            defaultChecked
            className="w-full"
          >
            <AccordionItem value="description">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                The slim & simple Maple Gaming Keyboard from Dev Byte comes with
                a sleek body and 7- Color RGB LED Back-lighting for smart
                functionality
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <h1 className="w-full self-start overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold md:text-3xl">
        More products from skateshop
      </h1>
      <ScrollArea className="w-full max-w-screen-xl pb-4">
        <div className="flex w-full items-center gap-4">
          {[...new Array(4)].map((_, i) => (
            <ProductCard
              key={`other-${i}`}
              product={{
                name: "Electronic Fresh Keyboard",
                price: 108,
              }}
              classname="w-full h-96 min-w-72"
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
