import PropTypes from 'prop-types';

const WantCook = ({wantCookItems,handlePreparing}) => {
    // console.log(typeof wantCookItems)
    return (
        <div className="text-center">
            <h4 className="text-2xl font-semibold py-5 border-b">Want ot <span className="text-[#E8751A]">Cook</span> : {wantCookItems.length} </h4>
            <div className="text-xs font-semibold text-gray-600 py-5 ">
                <tr className='flex gap-14 ml-3'>
                    <th>Name</th>
                    <th>Time</th>
                    <th className='mr-4'>Calories</th>
                </tr>
            </div>
            {
                wantCookItems.map((wantCookItem,idx)=> <div className='py-4 flex justify-between items-center text-xs font-semibold' key={idx}>
                    <span>{idx+1}.</span>
                    <tr className='flex gap-4 items-center '>
                        <td>{wantCookItem.Recipe_name}</td>
                        <td>{wantCookItem.Preparing_time} <br /> minutes</td>
                        <td>{wantCookItem.Calories} <br /> Calories</td>
                    </tr>
                    <button onClick={()=>handlePreparing(wantCookItem.recipe_id)} className='bg-[#FDA403] py-1 px-2 rounded-3xl text-xs text-black font-semibold'>Preparing</button>
                </div>)
            }
            
        </div>
    );
};

WantCook.propTypes={
    wantCookItems: PropTypes.array,
    handlePreparing: PropTypes.func
}

export default WantCook;