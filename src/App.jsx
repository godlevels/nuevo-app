
// import components

import ArtCollections from "./components/Art/ArtCollections";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import SelectedProducts from "./components/SelectedProducts";

const App = () => {
  return (
    <div className="">
      <Hero />
      <Explore />
      <SelectedProducts type='featured' />
      <ArtCollections />
      <SelectedProducts type='trending' />
    </div>
  )
};

export default App;
