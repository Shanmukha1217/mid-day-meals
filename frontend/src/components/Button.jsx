/* eslint-disable react/prop-types */

const Button = ({ type, text }) => {
  return (
    <button
      className="px-2 py-1 bg-green-600 rounded-md text-white font-bold hover:bg-green-700"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
