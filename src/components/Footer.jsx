import React from 'react'

const Footer = () => {
  const data = new Date()
  const year = data.getFullYear()

  return (
    <>
        <div className="w-full min-h-[250px] bg-orange-500 py-12 text-white flex flex-col md:flex-row justify-center items-center text-center gap-16 md:gap-60">
            <div>
                <h3 className="text-black/60 mb-4 font-bold">Categories</h3>
                <ul className="flex flex-col text-xl gap-2 m-auto text-center justify-center">
                    <li className="hover:text-yellow-400"><a href="#">Burgers</a></li>
                    <li className="hover:text-yellow-400"><a href="#">Pizzas</a></li>
                    <li className="hover:text-yellow-400"><a href="#">Salads</a></li>
                    <li className="hover:text-yellow-400"><a href="#">Chicken</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-black/60 mb-4 font-bold">Top Categories</h3>
                <ul className="flex flex-col text-xl gap-2 m-auto text-center justify-center">
                    <li className="hover:text-yellow-400"><a href="#">Fast Foods</a></li>
                    <li className="hover:text-yellow-400"><a href="#">Pizzas</a></li>
                    <li className="hover:text-yellow-400"><a href="#">Wings</a></li>
                    <li className="hover:text-yellow-400"><a href="#">Indian</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-black/60 mb-4 font-bold">Explore</h3>
                <ul className="flex flex-col text-xl gap-2 m-auto text-center justify-center">
                    <li className="hover:text-yellow-400"><a href="#">Promotions</a></li>
                    <li className="hover:text-yellow-400"><a href="#">Help</a></li>
                    <li className="hover:text-yellow-400"><a href="#">Invite</a></li>
                    <li className="hover:text-yellow-400"><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="w-full bg-orange-700 text-white p-4 text-center items-center">
            <p>Best Eats {year}, Foods & Market - All Rights Reserved</p>
        </div>
    </>
  )
}

export default Footer