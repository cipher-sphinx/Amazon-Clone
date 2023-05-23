import React from "react";
import * as p from "./Products";

function ProductPanel() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        {p.Book()}
        {p.BakingMixer()}
        {p.FitnessTracker()}
      </div>

      <div class="product_row d-flex">
        {p.AmazonSpeaker()}
        {p.iPad()}
      </div>
      <div class="product_row d-flex">{p.LEDMonitor()}</div>
    </div>
  );
}

export default ProductPanel;
