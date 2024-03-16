import PropTypes from 'prop-types';
const IngredientsList = ({ingreds}) => {
    // console.log(typeof ingreds)
    return (
       <>
        <li>{ingreds}</li>
       </>
    );
};

IngredientsList.propTypes={
    ingreds: PropTypes.string.isRequired
}

export default IngredientsList;