import HireImg from '../assets/img/img.svg'
const Hire = () => {
    return (
        <section>
            <div className="mx-auto container flex justify-between pb-12">
                <div className='flex flex-col justify-center'>
                    <h1 className="text-[3.125rem] leading-[125%] tracking-[0.0625rem] capitalize w-[26.25rem]">hire our interior technician</h1>
                    <p className="text-[1.375rem] leading-[150%] tracking-[0.01375rem] w-[38.8125rem] my-4">Revamp your living space with the expertise of our professional interior technicians. We are dedicated to bringing your design vision to life and creating a space you'll love. Hire us today and experience the difference of true craftsmanship and attention to detail.</p>
                    <button className="capitalize bg-black rounded-[.3rem] text-[.8rem] md:text-[1rem] text-white text-center py-3 px-[1.875rem] my-8 hover:bg-black/75 transition-all ease-in w-[6rem]">Hire</button>
                </div>
                <div>
                    <img src={HireImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hire
