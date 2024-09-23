import { Eye, ImageIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface ProductCardProps {
  classname?: string;
  product: {
    name: string;
    price: number;
  };
}

export function ProductCard({ classname, product }: ProductCardProps) {
  return (
    <Card className={cn(classname)}>
      <CardContent className="bg-muted flex h-48 w-full items-center justify-center p-0">
        <ImageIcon className="text-muted-foreground h-10 w-10" />
      </CardContent>
      <CardFooter className="flex w-full flex-col justify-between gap-4 p-3">
        <div className="flex w-full flex-col gap-1">
          <p className="text-primary text-base">{product.name}</p>
          <p className="text-muted-foreground text-sm">${product.price}</p>
        </div>
        <div className="flex w-full justify-end gap-2">
          <Button className="flex-1">Add to cart</Button>
          <Button size="icon" className="bg-muted">
            <Eye className="text-primary h-5 w-5" />{" "}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
