import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';
import IngredientsList from "./components/IngredientsList";


const SingleCard = ({foodCard,handleWantToCook}) => {
    const {Recipe_name,Recipe_image,Short_description,Preparing_time,Ingredients,Calories}=foodCard
    return (
        <div>
            <div className="p-4 bg-gray-50 rounded-xl border-[1px] border-[#E8751A] shadow-sm shadow-[#FDA403]">
            <img src={Recipe_image} className="rounded-lg w-full h-36" alt="" />
            <h4 className="text-xl font-bold mt-5 mb-2">{Recipe_name}</h4>
            <p className="text-sm my-1 font-semibold text-gray-500 border-b pb-4">{Short_description}</p>
            <h5 className="text-lg font-bold mb-4 mt-1">Ingridents : {Ingredients.length} </h5>
            <ul className="text-xs border-b text-gray-400 font-bold list-disc pl-5 space-y-2 pb-4">
              {
                Ingredients.map((ingreds,idx) => <IngredientsList key={idx} ingreds={ingreds}></IngredientsList>)
              }
            </ul>
            <div className="flex justify-around my-6">
              <div className="flex items-center justify-center gap-2">
              <div className="text-2xl"> 
              <IoTimeOutline />
              </div> <p className="text-sm font-semibold">{Preparing_time} minutes</p>
              </div>
              <div className="flex items-center justify-center gap-2">
              <div className="text-2xl"> 
              <FaFire/>
              </div> <p className="text-sm font-semibold">{Calories} Calories</p>
              </div>
            </div>
              <button onClick={()=>handleWantToCook(foodCard)} className='bg-[#FDA403] py-3 px-6 rounded-3xl text-black font-semibold'>Want ot Cook </button>
          </div>
        </div>
    );
};

SingleCard.propTypes={
    foodCard: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}

export default SingleCard;