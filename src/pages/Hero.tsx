import { layout } from "../styles";

const Hero = () => {
  return (
    <div className={`${layout.fullPage} ${layout.defaultPadding}`}>
      <h1 className="text-5xl font-bold">Samuel Erlangga</h1>
      <p className="text-lg mt-2 text-gray-400">
        Full Stack Developer | Tech Lead | AI Enthusiast
      </p>
    </div>
  );
};

export default Hero;
