import './Card.scss'
const Card = ({item}) => {
    return (
        <div className="flex flex-col gap-y-1 bg-white px-3 py-2">
            <div className="image">
                <img src={item.favImg} alt="" className='fav' />
                <img src={item.img} alt="" className="mainImg" />
                <img src={item.img2} alt="" className="secondImg" />
            </div>
            <h2 className='text-[1rem] font-bold'>{item.title}</h2>
            <h2 className='text-[.9rem] font-normal'>{item.subtitle}</h2>
            <div className="flex items-center justify-between">
                <h3 className='text-[1.8rem] font-extrabold'>{item.price}</h3>
                <img src={item.cartIcon} alt="" />
            </div>
        </div>
    )
}

export default Card
