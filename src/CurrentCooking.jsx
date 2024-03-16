import PropTypes from 'prop-types';

const CurrentCooking = ({currentCookings}) => {
    console.log( currentCookings)
    // let newCurrentCookings = []
    // newCurrentCookings = [...currentCookings]
    // console.log(typeof newCurrentCookings)

    return (
        <div className="text-center">
            <h4 className="text-2xl font-semibold py-5 border-b">Currently <span className="text-[#E8751A]">cooking</span> : {currentCookings.length}</h4>
            <div className="text-xs font-semibold text-gray-600 py-5 ">
                <tr className="flex justify-between">
                    <td>Name</td>
                    <td>Time</td>
                    <td>Calories</td>
                </tr>
                {
                    currentCookings.map((cck,idx) => <tr className='flex justify-between space-y-3 items-center' key={idx}> 
                    <td>{cck?.Recipe_name}</td>
                    <td>{cck?.Preparing_time} minutes</td>
                    <td>{cck?.Calories} Calories</td>
                    </tr>)
                }
            </div>
        </div>
    );
};

CurrentCooking.propTypes={
    currentCookings: PropTypes.array
}

export default CurrentCooking;