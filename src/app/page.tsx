// import Image from "next/image";
// import { FaBarsStaggered } from "react-icons/fa6";

import Link from "next/link";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">GPTGenius</h1>
          <p className="py-6 text-lg leading-loose">
            GPTGenius: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis aliquid animi, in dolore necessitatibus ex? Quis, id
            doloremque tenetur omnis eaque mollitia doloribus, fugit odio eius,
            voluptate minus ea ipsum!
          </p>
          {children}
          <Link href="/chat" className="btn btn-secondary">Get Started</Link>
        </div>
      </div>
    </div>
  );
}
