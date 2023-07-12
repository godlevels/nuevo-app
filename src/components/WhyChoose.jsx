import { chooseData } from "../data"


const WhyChoose = () => {
    return (
        <section className="bg-black h-[16rem] max-w-[80rem] pb-3">
            <div className="container mx-auto">
                <h1 className="text-[3.125rem] text-white text-center capitalize pt-3 pb-7 leading-[125%] tracking-[0.0625rem]">why should you choose us?</h1>

                <div className="flex justify-between items-center">
                    {chooseData.map((data, i)=> {
                        return (
                            <div key={i} className="flex flex-col gap-y-2">
                                <img src={data.icon} alt="" className="w-8" />
                                <h1 className="text-[1.25rem] text-white">{data.title}</h1>
                                <p className="text-[1rem] text-white w-[18.375rem] flex flex-col justify-center">{data.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
