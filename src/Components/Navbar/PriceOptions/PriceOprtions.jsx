import { useEffect, useState } from "react";
import Options from "../Options/Options";

const PriceOprtions = () => {
  const [priceOptions, setPriceOptions] = useState([]);
  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => setPriceOptions(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className=" text-center p-2 font-bold uppercase">
        <h1 className="text-2xl font-semibold md:text-4xl">
          Price Option: {priceOptions.length}{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-10">
        {priceOptions.map((option) => (
          <Options key={option.id} options={option}></Options>
        ))}
      </div>
    </div>
  );
};

export default PriceOprtions;
