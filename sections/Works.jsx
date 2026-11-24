import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Works = () => {
  const text = `I'm just starting my coding journey.
    My projects will show up here soon.`;

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Just getting started"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
    </section>
  );
};

export default Works;