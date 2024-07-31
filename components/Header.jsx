import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Michael Reyes<span className="text-accent">.</span>
            </h1>
          </Link>

          {/* desktop nav and hire me button */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="../public/resume.pdf">
              <Button>Resume</Button>
            </Link>
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">mobile nav</div>
        </div>
      </header>
    </>
  );
};

export default Header;
