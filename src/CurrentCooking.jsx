import PropTypes from 'prop-types';

const CurrentCooking = ({currentCookings}) => {
    console.log(currentCookings)
    return (
        <div className="text-center">
            <h4 className="text-2xl font-semibold py-5 border-b">Currently <span className="text-[#E8751A]">cooking</span> : </h4>
            <div className="text-xs font-semibold text-gray-600 py-5 flex justify-between">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
        </div>
    );
};

CurrentCooking.propTypes={
    currentCookings: PropTypes.array
}

export default CurrentCooking;