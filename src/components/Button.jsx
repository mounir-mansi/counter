import PropTypes from "prop-types";


const Button = ({ increment, onClickFunction }) => {
    const handleClick = () => {
      onClickFunction(increment)
    }
    return <button onClick={handleClick}>{increment}</button>
  }

Button.propTypes = {
increment: PropTypes.number.isRequired,
onClickFunction: PropTypes.number.isRequired,
}

export default Button;