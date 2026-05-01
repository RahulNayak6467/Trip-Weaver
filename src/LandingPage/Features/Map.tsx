import mapdemo from "../../assets/mapdemo.jpg";

function MapDemo() {
  return (
    <div
      className="bg-cover bg-center rounded-2xl mt-50 border border-deep-ink shadow-light-card  h-full"
      style={{
        backgroundImage: `url(${mapdemo})`,
        height: "50%",
        width: "60%",
      }}
    ></div>
  );
}

export default MapDemo;
