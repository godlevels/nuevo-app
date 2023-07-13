import "./Inspiration.scss"
import Inspo1 from '../../assets/img/1.svg'
import Inspo2 from '../../assets/img/2.svg'
import Inspo3 from '../../assets/img/3.png'
import Inspo4 from '../../assets/img/4.svg'
import Inspo5 from '../../assets/img/5.svg'
import Inspo6 from '../../assets/img/6.svg'

const Inspiration = () => {
    return (
        <div className="my-20 container mx-auto">
            <h1 className="text-[3.125rem] leading-[125%] tracking-[0.0625] ml-2 capitalize mb-6">shopping inspiration</h1>
            <div className="categories flex gap-[10px] m-[10px] h-[80vh]">
                <div className="col">
                    <div className="row">
                        <img src={Inspo1} alt="" />
                    </div>
                    <div className="row">
                        <img src={Inspo2} alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src={Inspo3} alt="" />
                    </div>
                </div>
                <div className="col col-l">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <img src={Inspo4} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={Inspo5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <img src={Inspo6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inspiration
