import { Button } from "@/components/ui/button";
import { GoArrowDown } from "react-icons/go";

// components
import Socials from "@/components/Socials";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hey there, my name is <br />
              <span className="text-accent">Michael Reyes</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I enjoy Bringing product vision to life on web, mobile, and
              desktop applications. check out some of my latest projects.
            </p>
            {/* projects btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Latest Projects</span>
                <GoArrowDown className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">socials</div>
              <Socials />
            </div>
          </div>
          <div>Photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
