import React from "react";
import { ProductsView } from "./modules/products/ProductsView";

import "./App.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <div className="max-w-7xl flex flex-col items-center m-auto pt-10">
      <ProductsView />
    </div>
  );
}

export default App;
