import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Curious beginner who loves to learn
    I'm turning ideas into code
    one small step at a time`;
  const aboutText = `Hi! I'm just starting my coding journey, and honestly, I'm loving it. Every bug I fix feels like a tiny victory, and every new thing I learn makes me want to build more.
  What I'm up to right now:
 Learning HTML, CSS and JavaScript from the ground up
 Exploring React and building small practice projects
 Googling error messages like a pro (and actually understanding the answers now)
 Dreaming up project ideas I can't wait to build`;

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Learning to code, one step at a time"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
