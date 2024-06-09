"use client";

import "./globals.css"; 
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Paralax from "@/components/Paralax";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";


const Home = () => {

  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-full">
      <div className="max-w-7xl h-full w-full">
        <FloatingNav navItems={navItems} />
        <Paralax />
        <Hero />
        <Grid />
        <RecentProjects />
        <Team />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
