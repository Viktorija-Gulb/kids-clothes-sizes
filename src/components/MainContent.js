import React from "react";

import HatSizes from "./hatSizes/HatSizes";
import ClotheSizes from "./clothesSizes/ClothesSizes";
import ShoesSizes from "./shoesSizes/ShoesSizes";

function MainContent() {
  return(
    <main className="main">
      <ClotheSizes />
      <HatSizes />
      <ShoesSizes />
    </main>
  );
}


export default MainContent;