import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <Navbar email={session?.user?.email as string} name={session?.user?.name as string} avatar={session?.user?.image as string}/>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}