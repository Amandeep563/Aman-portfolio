import { DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiGo } from "react-icons/si";
const Technologies = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <RiTailwindCssLine className="text-7xl" />
        </div>
        <div className="p-4">
          <DiPython className="text-7xl text-yellow-300" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="p-4">
          <SiGo className="text-7xl text-cyan-300" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
