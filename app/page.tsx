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
        <div className="text-2xl font-bold">
          Dashboard
        </div>
        <div className="flex flex-row items-center justify-center">
          <Input placeHolder="Search..." shadow/>
          <Button name="+ Add New" width="w-1/3" other="ml-2" onClick={() => router.push('/onboarding')}/>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full bg-neutral-50">
      <Header/>
      <div className="
        px-20
        py-4
        flex
        flex-col
        gap-12
        lg:flex-row
      ">
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
      </div>
    </div>
  )
}

export default Home;








