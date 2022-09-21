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
  const setCurrentIndex: Function = props.setCurrentIndex;

  const { name, calories, time, person, image, imageLarge }: DishType =
    dishes[currentIndex];
  return (
    <figure className="relative ">
      <picture className="">
        <img src={imageLarge} alt={name} className="absolute -top-36 max-w-[14rem] left-8" />

        <div>
          {currentIndex === 0
            ? OtherDishes(dishes, [1, 2, 3], setCurrentIndex)
            : currentIndex === 1
            ? OtherDishes(dishes, [0, 2, 3], setCurrentIndex)
            : currentIndex === 2
            ? OtherDishes(dishes, [0, 1, 3], setCurrentIndex)
            : OtherDishes(dishes, [0, 1, 2], setCurrentIndex)}
        </div>
      </picture>
      <figcaption className="rounded-3xl pt-44 min-w-[18rem] bg-white bg-opacity-60 px-5 shadow-lg shadow-neutral-400">
        <header className="text-center w-full ">
          <h1 className="mb-3 font-bold text-bold text-4xl leading-tight  mx-auto flex flex-col">
            <span>{name.split(" ")[0]} </span>
            <span className="">
              {" "}
              {name.split(" ").map((word) => {
                return name.split(" ").indexOf(word) > 0 ? word + " " : " ";
              })}
            </span>
          </h1>
          <p className="border-t-2 pt-3 text-gray-400 font-semibold text-lg">
            {calories}
          </p>
        </header>

        <div className="py-5 px-5 pb-10 flex justify-between items-center gap-14">
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

function OtherDishes(dishes: DishType[], oIndexes: number[], setCurrentIndex: Function) {
  return (
    <>
      <img
        src={dishes[oIndexes[0]].image}
        alt={dishes[oIndexes[0]].name}
        onClick={() => setCurrentIndex(oIndexes[0])}
        className="absolute left-[-1em]  drop-shadow top-[1em] w-[3.8rem] h-[3.8rem] active:scale-150 transition-transform "
      />
      <img
        src={dishes[oIndexes[1]].image}
        alt={dishes[oIndexes[1]].name}
        onClick={() => setCurrentIndex(oIndexes[1])}
        className="absolute left-[20%] drop-shadow  top-[5.4em] w-[3.8rem] h-[3.8rem] active:scale-150 transition-transform "
      />
      <img
        src={dishes[oIndexes[2]].image}
        alt={dishes[oIndexes[2]].name}
        onClick={() => setCurrentIndex(oIndexes[2])}
        className="absolute left-[60%] drop-shadow top-[5.3em] w-[3.5rem] h-[3.5rem] active:scale-150 transition-transform "
      />
    </>
  );
}
