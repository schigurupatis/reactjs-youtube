import React from "react";
import Button from "./Button";

const Buttons = () => {
  const buttonNames = [
    "All",
    "Music",
    "Telugu Cinema",
    "News",
    "Live",
    "Sports",
    "Trailers",
    "Mixes",
    "Engineering",
    "Dance",
    "Tours",
    "Cricket",
  ];

  return (
    <div className="flex justify-start items-center gap-3 my-4 w-full">
      {buttonNames.map((buttonName) => (
        <Button key={buttonName} data={buttonName} />
      ))}
    </div>
  );
};

export default Buttons;
