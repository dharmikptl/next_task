import { Navbar } from "./components/navbar";

export default function addshow() {
  return (
    <>
      <Navbar></Navbar>
      <h1>Add show</h1>
      <form
        onSubmit={async (e: any) => {
          e.preventDefault();
          const movieName = e.currentTarget.movieName.value;
          const theaerName = e.currentTarget.theaerName.value;
          const date = e.currentTarget.date.value + ":00";
          const contact = e.currentTarget.contact.value;
          const ava = e.currentTarget.ava.value;
          fetch("http://localhost:3500/addshow", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              movieName,
              theaerName,
              date,
              contact,
              ava,
            }),
          });
          console.log(movieName, theaerName, date, contact, ava);
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="movieName"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            Enter Movie Name
          </label>
          <input
            type="text"
            name="movieName"
            id="movieName"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter Movie name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="theaterName"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            Enter Theater Name
          </label>
          <input
            type="text"
            name="theaterName"
            id="theaerName"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter Theater Name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="Contact"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            register Contact Number
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter register contact Number"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            Enter show time Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter Show time and date"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ava"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            availibility
          </label>
          <input
            type="text"
            name="ava"
            id="ava"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter availibility"
          />
        </div>

        <button
          type="submit"
          className="create"
          // onClick={() => window.open("./")}
        >
          Submit
        </button>
      </form>
    </>
  );
}
