import CardCarousel from "@/components/CardCarousel";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/home/Hero";
import WebVitals from "@/components/home/web-vitals";
import ComingSoon from "@/components/layout/comingSoon";
import { DEPLOY_URL } from "@/lib/constants";
import { courseCards } from "data/sampleData";
import Image from "next/image";
export default async function Home() {
  return (
    <>
      <div className="z-10 w-full  px-5 xl:px-0 font-">
        <section className="w-full h-screen">
          <Hero></Hero>
        </section>
        <section className="w-full h-screen py-10">
          <div className="flex px-24 items-center">
            <Image className="w-1/2 p-10" src={'/section-2.png'} alt="section-2" width={514} height={120}></Image>
            <div className="w-1/2 align-middle py-10">
              <h1 className="py-5 text-xl font-bold">About The Skip Project</h1>
              <p>Founded with a vision to uplift the POC community in technology, **Skip** is more than just a learning platform. With our team of expert instructors and partnerships with prestigious educational institutions, we aim to create a ripple effect of positive change in the tech industry.</p>
              <button className="text-white h-10 bg-gradient-button px-5 my-5 rounded-lg">Watch Video</button>
            </div>
          </div>
        </section>
        <section className="w-full h-screen py-10">
          <div className="h-1/6 px-24">
            <div className="w-full h-1/2 text-center text-4xl font-bold">Upcoming <span className="text-green-300">Courses</span></div>
            <div className="w-1/2 h-1/2 text-center text-lg mx-auto py-2 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</div>
          </div>

          <div className="h-5/6 py-10 px-24">
            <CardCarousel>
              {courseCards.map((courseCard) => {
                return <CourseCard course={courseCard}></CourseCard>
              })}
            </CardCarousel>
          </div>
        </section>
        <ComingSoon
          title="Join Our Tech Community Today!"
          description="Join Us and Explore Limitless Possibilities in Technology, Tailored for you."
          ctaLink="https://lmgfwsubawc.typeform.com/to/CQy3URCB"
        />
        {/* <a
          href="https://twitter.com/project-skip/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Precedent
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Building blocks for your Next project</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            An opinionated collection of components, hooks, and utilities for
            your Next.js project.
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Deploy to Vercel</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/project-skip-tey/precedent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))} */}
      </div>
    </>
  );
}

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Project Skipto [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth + Database",
    description:
      "Project Skipcomes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Project Skipoffers a collection of hooks, utilities, and `@vercel/og`",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
