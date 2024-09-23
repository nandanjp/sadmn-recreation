import { cn } from "~/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface SimpleCardProps {
  title: string;
  descripition: string;
  icon: React.ReactNode;
  footer: string;
  classname?: string;
}

export function SimpleCard({
  classname,
  title,
  descripition,
  icon,
  footer,
}: SimpleCardProps) {
  return (
    <Card className={cn(classname)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{descripition}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="text-muted-foreground flex w-full items-center gap-1 text-xs">
        {icon} {footer}
      </CardFooter>
    </Card>
  );
}
