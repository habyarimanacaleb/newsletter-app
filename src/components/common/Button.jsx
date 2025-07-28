const Button = ({ label, onClick }) => {
  return (
    <div className="flex justify-center items-center my-6 ">

    <button className="btn px-3 py-2 text-2xl border-2 border-blue-600 rounded-lg lg:rounded-full hover:bg-blue-700" onClick={onClick}>
      {label}
    </button>
    </div>
  );
}

export default Button;