import React from "react";

type DishType = {
  name: string;
  calories: string;
  time: string;
  person: string;
  image: string;
  imageLarge: string;
};

const CardMobile = ({ ...props }: any) => {
  const dishes: DishType[] = props.dishes;
  const currentIndex: number = props.currentIndex;

  const {name, calories ,time, person, image, imageLarge}: DishType = dishes[currentIndex];
  return (
    <figure className="relative ">
      <picture>
        <img
          src={imageLarge}
          alt={name}
          className="absolute -top-36"
        /> 

        <div>
             <img src="" alt="" className="w-xl" /><img src="" alt="" className="w-xl" /><img src="" alt="" className="w-xl" />
        </div>
      </picture>
      <figcaption className="rounded-3xl pt-44 bg-white bg-opacity-60 px-5 shadow-lg shadow-neutral-400">
        <header className="text-center w-full ">
          <h1 className="mb-3 font-bold text-bold text-4xl leading-tight  mx-auto flex flex-col">
            <span>{name.split(" ")[0]} </span>
            <span className=""> {name.split(" ").map(word=> {
                return name.split(' ').indexOf(word) > 0 ? 
                word + " ": " "                
            })}
            </span>
          </h1>
          <p className="border-t-2 pt-3 text-gray-400 font-semibold text-lg">
            {calories}
          </p>
        </header>

        <div className="py-5 pb-10 flex justify-between items-center gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 font-semibold">Time</span>
            <span className="font-bold text-sm">{time}</span>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span className="text-gray-400 font-semibold">Person</span>
            <span className="font-bold text-sm">{person}</span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default CardMobile;
