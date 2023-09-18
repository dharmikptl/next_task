import React, { FormEvent } from "react";
import { useState } from "react";
import { Navbar } from "./components/navbar";

export default function userRegister() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <h1 className="flex justify-center font-extrabold underline">User Registration</h1>
      <div className="flex justify-center m-8 my-8 w-full">
        <form
          onSubmit={async (e: any) => {
            e.preventDefault();
            const username = e.currentTarget.name.value;
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            const contact = e.currentTarget.contact.value;
            fetch("http://localhost:3500/userinsert", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, email, password, contact }),
            });
            console.log(username, email, password, contact);
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Contact No.:
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your Contact Number"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
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
    </div>
  );
}
