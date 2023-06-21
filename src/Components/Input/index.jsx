export const Input = ({ value, onChange }) => {
  return (
    <fieldset className="flex flex-col text-black font-mono flex-1">
      <label hmtlfor="title">Title</label>
      <input
        className="p-2 rounded-md font-medium focus:outline-none border-2 border-slate-300"
        id="title"
        name="title"
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};
