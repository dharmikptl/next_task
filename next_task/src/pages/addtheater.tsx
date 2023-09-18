import { Navbar } from "./components/navbar";

export default function addtheater() {
  return (
    <>
      <Navbar></Navbar>
      <h1>Theater Register</h1>
      <form
        onSubmit={async (e: any) => {
          e.preventDefault();
          const name = e.currentTarget.theaterName.value;
          const location = e.currentTarget.location.value;
          const capacity = parseInt(e.currentTarget.capacity.value);
          const contact = e.currentTarget.contact.value;
          fetch("http://localhost:3500/addtheater", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              location,
              capacity,
              contact,
            }),
          });
          console.log(name, location, capacity, contact);
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="theaterName"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            Enter Your Theater Name
          </label>
          <input
            type="text"
            name="theaterName"
            id="theaterName"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter your theater name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter Location"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="capacity"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            Seating Capacity:
          </label>
          <input
            type="number"
            name="capacity"
            id="capacity"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter Seating capacity"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="contact"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            theater Contact number:
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter Theater contact number"
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
