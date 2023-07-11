import { features } from "../data";

const Features = () => {
  return (
    <div className="bg-white rounded-tr-[40px] w-[15rem] md:pl-0 md:pr-6 py-4 md:w-[70rem] mt-2">
      <div className="flex justify-center items-center flex-wrap gap-y-3">
        {features.map((item, index)=> {
          return (
            <div key={index} className="md:min-h-[70px] w-3/6 flex flex-col items-center justify-center md:flex-1">
              <img className="h-[2rem] w-[2rem] md:h-[5rem] md:w-[5rem]" src={item.img} alt="" />
              <div className="capitalize text-[.6rem] md:text-[1rem] text-black font-bold">{item.text}</div>
            </div>
          ) 
        })}
      </div>
    </div>
  )
};

export default Features;
