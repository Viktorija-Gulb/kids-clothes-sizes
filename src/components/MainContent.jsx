import React from "react";

import HatSizes from "./hatSizesContent/HatSizes";
import ClotheSizes from "./clothesSizes/ClothesSizes";
import ShoesSizes from "./shoesSizesContent/ShoesSizes";

function MainContent() {
  return (
    <main className="main">
      <ClotheSizes />
      <HatSizes />
      <ShoesSizes />
    </main>
  );
}

export default MainContent;
