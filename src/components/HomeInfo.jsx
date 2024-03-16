import { Link } from "react-router-dom";


const HomeInfo = ({currentStage}) => {
  
  if (currentStage === 1)
    return (
      <h1 className="text-3xl 	 md:text-6xl font-bold text-left py-20 md:py-6 px-8 -my-64 text-white mx-5 z-30">
        Hi, I'm
        <span className="font-bold mx-2 text-white">Mina</span>
        <span className="block my-2 font-semibold md:font-bold text-2xl md:text-3xl md:mx-2 text-white">
          {" "}
          I'm Web developer
        </span>
        <Link
          to="/about"
          className=" inline-block text-white text-lg md:text-xl mx-0 md:mx-2 my-2 md:my-4 bg-transparent hover:bg-slate-500  font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
        >
          Learn more
        </Link>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <h1 className="text-4xl  font-bold text-left py-20 md:py-6 px-8 -my-64 text-white mx-5 z-30">
        Worked with many companies
        <span className="block my-3 font-semibold md:font-bold text-xl md:text-3xl md:mx-2 text-white">
          I'm Web developer
        </span>
        <Link
          to="/about"
          className=" inline-block text-white text-lg md:text-xl mx-0 md:mx-2 my-2 md:my-4 bg-transparent hover:bg-slate-500  font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
        >
          Learn more
        </Link>
      </h1>
    );
  }

  if (currentStage === 3) {
    return (
      /*    <div className="mx-5  px-8 z-50 cursor-pointer bg-slate-400 top-10">
        <h1 className="sm:text-4xl font-bold text-left py-4 mt-56 text-white">
          Led multiple projects to <br /> success over the years. <br />
          <span className="text-xl font-semibold">
            Curious about the impact?
          </span>
        </h1>
        <Link to="/about" className="text-white" onClick={handle}>
          Visit my portfolio
        </Link>
      </div> */
      <h1 className="sm:text-4xl font-bold text-left py-4 px-8 -my-64 text-white mx-5 z-30">
        Led multiple projects to <br /> success over the years.
        <span className="font-bold text-xl mx-2 text-white">
          <br />
          Curious about the impact?
        </span>
        <br />
        <Link
          to="/about"
          className="text-xl inline-block my-4 bg-transparent hover:bg-slate-500 text-slate-300 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
        >
          Visit my portfolio{" "}
        </Link>
      </h1>
    );
  }

  if (currentStage === 4) {
    return (
      /*   <div className="mx-5  px-8 z-30 cursor-default -my-60">
        <h1 className="sm:text-4xl  font-bold text-left py-4 mt-56 text-white">
          Need a project done <br /> or looking for a dev? <br />
          <span className="text-xl font-semibold">
            I'm just a few keystrokes away{" "}
          </span>
        </h1>
        <Link to="/about" className="text-white">
          Let's talk
        </Link>
      </div> */
      <h1 className="sm:text-4xl font-bold text-left py-4 px-8 -my-64 text-white mx-5 z-30">
        Need a project done
        <br />
        or looking for a dev?
        <br />
        <span className="text-xl font-semibold">
          I'm just a few keystrokes away
        </span>
        <br /> 
        <Link
          to="/about"
          className="text-white text-xl inline-block  my-4 bg-transparent hover:bg-slate-500 text-slate-300 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
        >
          {" "}
          Let's talk
        </Link>
      </h1>
    );
  }

  return null;
};

export default HomeInfo;
