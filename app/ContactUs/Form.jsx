export default function Form({
  onSubmitHandler,
  handleChange,
  formData,
  extensions,
}) {
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-matteBlack"
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-matteBlack"
        />
      </div>
      <div>
        <label htmlFor="extension">Extension: </label>
        <select
          name="extension"
          id="extension"
          value={formData.extension}
          onChange={handleChange}
          className="bg-matteBlack"
        >
          <option value="">Select Extension: </option>
          {extensions.map((el, key) => (
            <option key={key} value={`${el[0]} ${el[1]}`}>
              {el[0]} {el[1]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="phone">Phone Number: </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-matteBlack"
        />
      </div>
      <div>
        <label htmlFor="message">Message: </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-matteBlack"
        ></textarea>
         
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
