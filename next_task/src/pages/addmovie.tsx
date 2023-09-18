import React, { FormEvent } from "react";
import { useState } from "react";
import { Navbar } from "./components/navbar";

export default function addmovie() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="flex justify-center font-extrabold underline">
        Add Movie
      </h1>
      <div className="flex justify-center m-8 my-8">
        <form
          onSubmit={async (e: any) => {
            e.preventDefault();
            const imgSrc = e.currentTarget.imgLink.value;
            const duration = e.currentTarget.lastDate.value;
            const realesedate = e.currentTarget.realeseDate.value;
            const director = e.currentTarget.directorName.value;
            const desc = e.currentTarget.description.value;
            const title = e.currentTarget.movieTitle.value;
            fetch("http://localhost:3500/addmovie", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                imgSrc,
                duration,
                realesedate,
                director,
                desc,
                title,
              }),
            });
            console.log(imgSrc, duration, realesedate, director, desc, title);
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="movieTitle"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Movie Title:
            </label>
            <input
              type="text"
              name="movieTitle"
              id="movieTitle"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your movie Title"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your movie description"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="directorName"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Director Name:
            </label>
            <input
              type="text"
              name="directorName"
              id="directorName"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your Director Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="realeseDate"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Realse Date:
            </label>
            <input
              type="date"
              name="realeseDate"
              id="realeseDate"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter Realese Date"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastDate"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Last Date:
            </label>
            <input
              type="date"
              name="lastDate"
              id="lastDate"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter Last Date"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="imgLink"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Banner Image Link:
            </label>
            <input
              type="text"
              name="imgLink"
              id="imgLink"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter Banner Image Link"
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
      </div>
    </>
  );
}
