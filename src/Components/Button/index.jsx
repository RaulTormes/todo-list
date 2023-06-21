export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" h-12 px-4 rounded-xl  text-white bg-slate-800"
    >
      {children}
    </button>
  );
};
