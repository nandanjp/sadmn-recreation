import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen w-full grid-cols-1 items-center justify-items-center gap-2 px-4 lg:grid-cols-[3fr_4fr] lg:px-0">
      {children}
      <Image
        src={
          // "https://images.unsplash.com/photo-1612036781124-847f8939b154?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          "/assets/bg-1.jpeg"
        }
        alt="black-and-red-nintendo-switch"
        width={1920}
        height={1080}
        className="hidden h-full w-full rounded-l-xl object-cover lg:block"
      />
    </div>
  );
}
