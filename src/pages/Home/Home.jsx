import ArtCollections from "../../components/Art/ArtCollections"
import Explore from "../../components/Explore"
import Hero from "../../components/Hero"
import Hire from "../../components/Hire"
import Inspiration from "../../components/Inspiration/Inspiration"
import SelectedProducts from "../../components/SelectedProducts"
import WhyChoose from "../../components/WhyChoose"

const Home = () => {
    return (
        <div className="">
            <Hero />
            <Explore />
            <SelectedProducts type='featured' />
            <ArtCollections />
            <WhyChoose />
            <SelectedProducts type='trending' />
            <Inspiration />
            <Hire />
        </div>
    )
}

export default Home
