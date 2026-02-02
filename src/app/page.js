import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Test from "@/components/Test";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
   const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen  font-sans dark:bg-black">
      <Test></Test>
         <p>{JSON.stringify(session)}</p>
     <Banner></Banner>
     <Products></Products>
    </div>
  );
}
