import {data} from '../data/data'
import {useState} from 'react'
import {FoodDetails} from './FoodDetails'

const Food = () => {
  const [foods, setFoods] = useState(data)
  const [foodModal, setFoodModal] = useState(false)
  const [foodData, setFoodData] = useState([])

  // Filter by category
  const filterType = (category) => setFoods(data.filter(item => item.category === category))

  // Filter by price
  const filterPrice = (price) => {
    const filteredPrice = data.filter(item => item.price >= price && item.price < price + 10 )
    setFoods(filteredPrice)
  }

  // Toggle modal food details
  const modalFoodDetails = (image, name, detail, price) => {
    setFoodData([image, name, detail, price])
    setFoodModal(!foodModal)
  }

  return (
    <div className="max-w-[1640px] m-auto px-4 py-8">
        <h1 className="text-orange-600 font-bold text-4xl text-center mb-4">Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between">

            {/* Filter Type */}
            <div className="mb-3">
                <p className="font-bold text-gray-700 mb-1">Filter Type</p>
                <div className="flex justify-between flex-wrap lg:gap-3">
                    <button onClick={() => setFoods(data)} className="mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                    <button onClick={() => filterType('burger')} 
                    className="mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burgers</button>
                    <button onClick={() => filterType('pizza')} className="mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
                    <button onClick={() => filterType('salad')} className="mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salad</button>
                    <button onClick={() => filterType('chicken')} className="mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className="font-bold text-gray-700 mb-1">Filter Price</p>
                <div className="flex justify-between max-w-[390px] w-full gap-3">
                    <button onClick={() => filterPrice(10)} className="mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$10</button>
                    <button onClick={() => filterPrice(20)} className="mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$20</button>
                    <button onClick={() => filterPrice(30)} className="mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$30</button>
                    <button onClick={() => filterPrice(40)} className="mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$40</button>
                </div>
            </div>
        </div>  

        {/* Display Foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">

            {foods.map((item, index) => (
                <div key={index} 
                    onClick={() => modalFoodDetails(item.image, item.name, item.detail, item.price)} 
                    className="border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer">
                    <img className="w-full h-[200px] object-cover rounded-t-lg" src={item.image} alt={item.name} />
                    <div className="flex justify-between px-2 py-4">
                        <p className="font-bold">{item.name}</p>
                        <p>
                            <span className="bg-orange-500 text-white p-2 rounded-full">${item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
            
            {foodModal && 
                <FoodDetails modalFoodDetails={modalFoodDetails} foodData={foodData}/>  
            }

        </div>

    </div>
  )
}

export default Food
