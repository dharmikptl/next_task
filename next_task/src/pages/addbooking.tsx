import { Navbar } from "./components/navbar";
import React from "react";
import { FormEvent } from "react";

export default function addbooking() {
  return (
    <>
      <Navbar />
      <form
        onSubmit={async (e: any) => {
          e.preventDefault();
          const email = e.currentTarget.email.value;
          const showDate = e.currentTarget.showDate.value;
          const showTime = e.currentTarget.showTime.value;
          const number_tickets = e.currentTarget.numbertickets.value;
          const total_cost = number_tickets * 400;
          fetch("http://localhost:3500/booking", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              showDate,
              showTime,
              number_tickets,
              total_cost,
            }),
          });
          console.log(email, showDate, showTime, number_tickets, total_cost);
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            Enter Your email
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
            htmlFor="showDate"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            show date
          </label>
          <input
            type="date"
            name="showDate"
            id="showDate"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="showTime"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            SHow Time:
          </label>
          <input
            type="time"
            name="showTime"
            id="showTime"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter your Show Time"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="numbertickets"
            className="block text-white-700 text-sm font-bold mb-2"
          >
            Number of Tickets:
          </label>
          <input
            type="number"
            name="numbertickets"
            id="numbertickets"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
            placeholder="Enter your Number of Tickets"
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
