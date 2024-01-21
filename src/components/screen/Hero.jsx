import Banner from "./Banner";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mt-2">
        <div className="flex items-center gap-5 w-full">
          <div className="w-full">
            <Banner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
