import {AiOutlineClose} from 'react-icons/ai'
const imgTest = 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

export const FoodDetails = ({modalFoodDetails}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/80  z-10" onClick={modalFoodDetails}>
      
      <div className="relative top-[3%] mx-auto w-[90%] min-h-[500px] p-12 bg-slate-200 text-center flex-col  md:w-[800px] md:max-h-[90%] gap-6">
        
        <div className="w-full h-auto  flex flex-col justify-center items-center">
          <img src={imgTest} alt="food" className="w-full h-full mb-4 object-cover" />

          <div className="">
            <h2 className="font-bold text-xl mb-4">Modal</h2>
            <p className="text-2xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="flex justify-end text-2xl py-2 px-6 rounded-2xl bg-orange-500 text-white">
            $10
          </div>
        </div>

        <AiOutlineClose size={30} className="absolute top-3 right-3 cursor-pointer" onClick={modalFoodDetails} />

      </div>

    </div>
  )
}

