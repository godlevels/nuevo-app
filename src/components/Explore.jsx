
const Explore = () => {
  return (
    <section className="bg-white w-full h-[10rem] mt-[-.8rem] md:mt-[-3rem]">
      <div className="container mx-auto flex flex-col gap-y-7 justify-center text-center md:text-start md:flex-row items-center md:justify-between py-3">
        <div>
          <h1 className="md:text-[2.5rem] font-normal text-black md:leading-[2.80rem] my-3">Elevate your home with Palace Luxury <br /> everything you need in one place</h1>
          <p className="md:text-[1.25rem] font-medium text-black">Discover the best modern home brands all under one roof. Close your tabs, it's all here.</p>
        </div>
        <div>
          <button className="capitalize bg-black rounded-[.3rem] text-[.8rem] md:text-[1rem] text-white flex items-center justify-center text-center py-3 px-[1.875rem] hover:bg-black/75 transition-all ease-in">explore</button>
        </div>
      </div>
    </section>
  )
}

export default Explore
