export const TextArea = ({ value, onChange }) => {
  return (
    <fieldset className="flex flex-col m-3 p-2">
      <label htmlFor="Title">Description</label>
      <textarea
        name="Title"
        id="Title"
        cols="20"
        rows="5"
        className=" p-2 border-2 rounded-md border-black "
        value={value}
        onChange={onChange}
      ></textarea>
    </fieldset>
  );
};
