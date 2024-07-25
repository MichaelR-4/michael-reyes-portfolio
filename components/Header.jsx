import Link from "next/link";
import { Button } from "./ui/button";

const Header = (props) => {
  return (
    <>
      <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto">
          {/* logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Michael Reyes<span className="text-accent">.</span>
            </h1>
          </Link>
          {/* desktop nav */}
        </div>
      </header>
    </>
  );
};

export default Header;
