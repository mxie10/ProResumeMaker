'use client';

import { useRouter } from "next/navigation";
import Input from "./component/input/Input";
import Button from "./component/input/Button";
import ListingCard from "./component/listing/ListingCard";

const Home = () => {

  const router = useRouter();

  const Header = () => {
    return (
      <div 
        className="
          flex
          flex-row
          items-center
          justify-between
          px-14
          py-8
          border-b-2
        border-neutral-100
        "
      >
        <div className="text-2xl font-bold text-blue-950">
          Dashboard
        </div>
        <div className="flex flex-row items-center gap-2">
          <Input placeHolder="Search..." shadow/>
          <Button name="+ Add New" width="w-1/3" bgColor="bg-blue-700" onClick={() => router.push('/onboarding')}/>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-neutral-50">
        <Header />
        <div className="px-20 py-4 flex flex-col gap-12 lg:flex-row lg:flex-wrap">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          
        </div>
      {/* footer */}
    </div>
  );
};

export default Home;








