export const Banner = () => {
  return (
    <div className="flex flex-col h-screen justify-center uppercase text-primaryTextColor">
      <div className="flex justify-center ">
        <div className="flex flex-col">
          <div>
            <h1 className="text-6xl lg:text-9xl font-bold leading-tight text-center">
              Frontend <br /> Expert
            </h1>
          </div>
          <div className="flex flex-row justify-between w-full pt-10">
            <div className="text-left">
              <p>Currently crafting</p>
              <p>experiences at Epsilon</p>
            </div>
            <div className="text-right">(2020 - Present)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
