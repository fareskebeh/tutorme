import SplitText from "../../components/SplitText";
import HomeSearch from "./HomeSearch";

const Home = () => {
  return (
    <div className="h-[100dvh] pt-20 px-8 flex flex-col sm:flex-row">
      <div className=" sm:h-full flex justify-center sm:text-left items-center sm:flex-1">
        <SplitText
          text="Are you in need of a tutor right away?"
          className="text-5xl my-4 sm:text-7xl font-black text-left"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>

      <div className="sm:h-full flex justify-center items-center sm:flex-1">
        
        {/* Postponed functionality currently */}

        <HomeSearch/>
      </div>
    </div>
  );
};

export default Home;
