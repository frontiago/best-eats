import {categories} from '../data/data'

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-6 py-12 overflow-x-hidden">
        <h1 className="mb-6 text-orange-600 font-bold text-4xl text-center">Top Rated Menu Categories</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">   
            {categories.map((item, index) => (
                <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:scale-105 duration-500" key={index}>
                    <h2 className="font-bold sm:text-xl">{item.name}</h2>
                    <img className="" src={item.image} alt={item.name} />
                </div>
            ))}
           
        </div>
    </div>
  )
}

export default Category
