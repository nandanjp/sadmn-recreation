import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Card } from "~/components/ui/card";
import { siteConfig } from "~/lib/utils";

export default function Page() {
  return (
    <div className="bg-background flex h-full w-full flex-col py-4 sm:py-6 md:py-8">
      <Link
        href="/"
        className="flex w-full items-center sm:px-2 md:px-4 lg:px-6"
      >
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <div className="flex h-full flex-1 items-center justify-center">
        <Card className="w-fit sm:p-4 md:p-2">
          <SignIn />
        </Card>
      </div>
    </div>
  );
}
