import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import CursorBall from "./components/CursorBall";
import Background from "./components/Background";

export default function Home() {
  return (
    <>
      {/* <CursorBall/> */}
      <div className="flex relative overflow-hidden flex-col px-3 pb-8 w-full border-b border-solid shadow-xl max-w-8xl z-[9] text-padding md:px-3 border-neutral-800 bg-[#111111]" >
      <Background/>
      <Hero />
      <Project />
      </div>
    </>
  );
}
