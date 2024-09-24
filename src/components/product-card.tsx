import { Eye, ImageIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

interface ProductCardProps {
  classname?: string;
  product: {
    name: string;
    price: number;
  };
}

export function ProductCard({ classname, product }: ProductCardProps) {
  return (
    <Link href={"/product/something"} className={cn(classname)}>
      <Card className="h-full w-full">
        <CardContent className="flex h-64 w-full items-center justify-center rounded-t-lg bg-gray-200 p-0">
          <ImageIcon className="h-10 w-10 text-muted-foreground" />
        </CardContent>
        <CardFooter className="flex w-full flex-col justify-between gap-4 p-3">
          <div className="flex w-full flex-col gap-1">
            <p className="text-base text-primary">{product.name}</p>
            <p className="text-sm text-muted-foreground">${product.price}</p>
          </div>
          <div className="flex w-full justify-end gap-2">
            <Button className="flex-1">Add to cart</Button>
            <Button size="icon" className="bg-muted">
              <Eye className="h-5 w-5 text-primary" />{" "}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
