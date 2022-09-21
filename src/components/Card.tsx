import React from 'react'

type DishType = {
  id: Number;
  name: string;
  calories: string;
  time: string;
  person: string;
  image: string;
  imageLarge?: string
}

const Card = ({dish, onClickHandler}:{dish:DishType, onClickHandler:any}) => {
  const { id, name, calories, time, person, image } = dish;
  
  return (
    <>
      <figure className="relative h-max max-w-max" onClick={() => {
        onClickHandler(id)
      }}>
        <img src={image} alt={name} className=" max-w-[10em] relative top-[5rem] z-10 mx-auto" />
        <figcaption className="px-4 rounded-3xl shadow-2xl shadow-neutral-400 pt-12 bg-white max-w-max relative">
          <div className="card pb-6 pt-10 text-center">
            <p className="text-xl font-semibold">{name}</p>
            <span className="text-gray-400 text-lg font-semibold">{calories}</span>
          </div>
          <div className="py-2 pb-7 border-t-2 flex justify-between items-center gap-16">
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
    </>
  )
}

export default Card
