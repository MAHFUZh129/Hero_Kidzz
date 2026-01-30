import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <div className="min-h-screen  font-sans dark:bg-black">
     <Banner></Banner>
     <Products></Products>
    </div>
  );
}
