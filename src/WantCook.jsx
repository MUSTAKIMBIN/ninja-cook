import PropTypes from 'prop-types';

const WantCook = ({wantCookItems}) => {
    // console.log(typeof wantCookItems)
    return (
        <div className="text-center">
            <h4 className="text-2xl font-semibold py-5 border-b">Want ot <span className="text-[#E8751A]">Cook</span> : {wantCookItems.length} </h4>
            <div className="text-xs font-semibold text-gray-600 py-5 flex justify-between">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            {
                wantCookItems.map((wantCookItem,idx)=> <div className='py-4 flex justify-between items-center text-xs font-semibold' key={idx}>
                    <p>{wantCookItem.Recipe_name}</p>
                    <p>{wantCookItem.Preparing_time} <br /> minutes</p>
                    <p>{wantCookItem.Calories} <br /> Calories</p>
                    <button className='bg-[#FDA403] py-1 px-2 rounded-3xl text-xs text-black font-semibold'>Preparing</button>
                </div>)
            }
            
        </div>
    );
};

WantCook.propTypes={
    wantCookItems: PropTypes.array
}

export default WantCook;