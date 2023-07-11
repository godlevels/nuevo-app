
// import components

import Explore from "./components/Explore";
import Hero from "./components/Hero";
import SelectedProducts from "./components/SelectedProducts";

const App = () => {
  return (
    <div className="">
      <Hero />
      <Explore />
      <SelectedProducts type='featured' />
      <SelectedProducts type='trending' />
    </div>
  )
};

export default App;
