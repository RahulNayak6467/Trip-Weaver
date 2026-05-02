function CTA() {
  return (
    <div
      style={{
        background: "var(--gradient-cta)",
      }}
      className="h-200 bg-(--gradient-cta) flex flex-col justify-center items-center"
    >
      <h1 className="text-7xl font-display font-black">Ready when</h1>
      <h1 className="text-7xl font-display font-black">you are.</h1>
      <p className="mt-6 tracking-wide font-extralight text-cream">
        Describe any trip.We'll hanlde the rest.
      </p>

      <div className="flex justify-center items-center mt-6">
        <div>
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="text-deep-ink bg-white w-100 px-6 py-4 rounded-l-sm shadow-light-lift"
          />
        </div>
        <div>
          <button className="text-white uppercase bg-black text-sm font-mono px-6 py-4.5 rounded-r-sm  shadow-light-lift">
            Weave my trip
          </button>
        </div>
      </div>
      <div className="flex gap-3 text-sm mt-2 text-cream">
        <p>Free to try</p>
        <p>No credit card</p>
        <p>cancel anytime</p>
      </div>
    </div>
  );
}

export default CTA;
