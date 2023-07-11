import { hero } from '../data'
import Btn from '../assets/img/right-hero.svg' 
import Features from './Features';

const Hero = () => {
  const { image, title, buttonText } = hero
  return (
    <section className='h-[600px] md:w-full bg-hero bg-right bg-cover bg-no-repeat text-white relative mb-12 lg:bg-center lg:mb-28'>
      <div className='container mx-auto text-left'>
        <div className='flex gap-x-2 md:gap-x-14 items-center md:w-[39rem] mb-10'>
          <img className='h-[25rem] md:h-[30rem] pt-[80px]' src={image} alt="" />
          <div className='flex flex-col gap-y-3 mt-12 md:mt-16'>
            <h1 className='flex w-[19rem] md:w-[33rem] text-white text-[2.5rem] md:text-[3.75rem] md:font-extrabold leading-[120%]'>{title}</h1>
            <div className='flex gap-x-2 items-center'>
              <img className='w-[1.5rem] h-[1.5rem] md:w-[2.5rem] md:h-[2.5rem]' src={Btn} alt="" />
              <button className='text-[.8rem] md:text-[1rem] font-normal uppercase'>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Features />
      </div>
    </section>
  )
};

export default Hero;
