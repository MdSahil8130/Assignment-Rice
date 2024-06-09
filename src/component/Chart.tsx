import ChartBar from "./ChartBar";

const Chart = () => {
  return (
    <div>
      {/* <div className="flex gap-14 mt-10">
        <div className="bg-slate-100 hover:bg-[#00B49D] hover:text-white  p-3 mt-3 rounded-full w-1/4">
          <button className="w-full">
            <p className="text-left">USAGE</p>
          </button>
        </div>
        <div className="bg-slate-100 hover:bg-[#00B49D] hover:text-white  p-3 mt-3 rounded-full w-1/4">
          <button className="w-full">
            <p className="text-left">CALCULATE</p>
          </button>
        </div>
      </div> */}
      <div className="mt-24">
        <ChartBar />
      </div>
    </div>
  );
};

export default Chart;
