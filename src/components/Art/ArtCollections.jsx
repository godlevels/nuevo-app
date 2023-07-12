import { artCollections } from '../../data'
import './Art.scss'

const ArtCollections = () => {
    return (
        <section>
            <div className='container mx-auto mt-16'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-[3.125rem] font-normal leading-[125%] tracking-[0.0625]'>Art Collection</h1>
                        <p className='text-[1rem] font-normal'>Discover the beauty of art and elevate your space. Shop the Palace Luxury Art Collection now!</p>
                    </div>
                    <button className='text-[1rem]'>SHOW MORE</button>
                </div>

                <div className='flex items-center gap-x-3 my-8'>
                    {artCollections.map((data, index)=> {
                        return (
                            <div key={index}>
                                <div className='base'>
                                    <img src={data.img} alt="" className='mainImg' />
                                    {/* <img src={data.img2} alt="" className='secondImg' /> */}
                                </div>

                                <button className="capitalize bg-black rounded-[.3rem] text-[.8rem] md:text-[1rem] text-white flex items-center justify-center text-center py-3 px-[1.875rem] my-8 hover:bg-black/75 transition-all ease-in">{data.btn}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ArtCollections
