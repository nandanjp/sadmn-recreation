import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { SearchBox } from "./search-box";
import { auth } from "@clerk/nextjs/server";

export function SiteHeader() {
  const user = auth();
  return (
    <header className="border-primary/80 bg-background supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <div className="container mx-auto flex h-16 w-full max-w-screen-xl items-center gap-2 px-2 sm:px-4 md:justify-between md:px-6">
        <MainNav />
        <MobileNav />
        <nav className="flex flex-1 items-center justify-end gap-4">
          <SearchBox />
          <ModeToggle />
          {!user || !user.userId ? (
            <>
              <SignUpButton />
              <SignInButton />
            </>
          ) : (
            <UserButton />
          )}
        </nav>
      </div>
    </header>
  );
}
