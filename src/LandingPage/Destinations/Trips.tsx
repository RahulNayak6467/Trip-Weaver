import Jaisalmer from "../../assets/Jaisalmer.jpg";

function Trips() {
  return (
    // <div className="w-80 relative object-center object-cover">
    //   <div className="h-100">
    //     <img className="rounded-2xl" src={Jaisalmer} alt="Jaisalmer" />
    //     <div className="inset-0 h-full rounded-4xl  w-full absolute top-0 left-0 bg-black/20 z-2"></div>
    //   </div>
    //   <div className="z-10 relative -top-4 px-5 ">
    //     <p className="text-cream  text-sm tracking-wider">Desert Nights</p>
    //     <h1 className="font-sans text-lg text-white tracking-wider font-bold leading-1">
    //       Kerala{" "}
    //     </h1>
    //     <h1 className="font-sans text-lg text-white tracking-wider font-bold">
    //       BackWaters
    //     </h1>
    //   </div>
    // </div>
    <div className="relative w-80">
      <img
        src={Jaisalmer}
        className="w-80 rounded-t-2xl rounded-b-2xl object-center object-cover"
      />
      <div className="inset-0 h-full rounded-t-2xl    rounded-b-2xl   w-full absolute  left-0 bg-gradient-to-t from-black/80 to-transparent z-2"></div>
      <div className="absolute inset-0 z-2 top-80 p-3 ">
        <p className="text-cream-warm/50 text-[10px] tracking-wider mb-4">
          Coastal Escape
        </p>
        <h1 className="text-cream text-2xl font-display leading-2.5 tracking-wide font-stretch-extra-condensed">
          Kerala
        </h1>
        <h1 className="text-cream text-2xl font-display tracking-wide font-stretch-semi-condensed">
          Backwaters
        </h1>
      </div>
    </div>
  );
}

export default Trips;
