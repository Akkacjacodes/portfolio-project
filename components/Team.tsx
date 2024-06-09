"use client";

// import { FaLocationArrow } from "react-icons/fa6";
import { team } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import "./3d-card.css";

const RecentProjects = () => {
  return (
    <div className="py-20" id="team">
      <h1 className="heading">
        Meet our{" "}
        <span className="text-purple">tallented team</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
        {team.map((item) => (
          <CardContainer
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] sm:w-96 w-[80vw]"
          >
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={item.img}
                  alt="cover"
                  className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                {/* <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Who
                </CardItem> */}
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() => window.open(item.link, "_blank")}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Connect on linkedin →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
