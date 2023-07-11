import { productsData } from '../data'
import Card from './Card/Card'

const SelectedProducts = ({type}) => {
    return (
        <div className='mx-auto container'>
            <div className="">
                <div className='flex items-center justify-between py-8'>
                    <h1 className='capitalize text-[2rem] font-normal text-black'>{type} products</h1>
                    <h2 className='uppercase text-[1rem] font-normal text-black'>show more</h2>
                </div>
                <div className='flex items-center justify-between'>
                    {productsData.map(item=>(
                        <Card item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SelectedProducts
