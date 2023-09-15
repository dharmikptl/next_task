import { Navbar } from "./components/navbar";
import React from "react";
import { FormEvent } from "react";

export default function addbooking() {
  return (
    <>
      <Navbar />
      <h1 className="">Book Your show</h1>
      <form
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={async (e: any) => {
          e.preventDefault();
          const id = 4;
          const userID = await parseInt(e.currentTarget.userID.value);
          // console.log(userID);
          const showtimeID = await parseInt(e.currentTarget.aais.value);
          const number_tickets = await parseInt(e.currentTarget.num.value);
          const total_cost = number_tickets * 400;
          fetch("http://localhost:3500/booking", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id,
              userID,
              showtimeID,
              number_tickets,
              total_cost,
            }),
          });
          console.log(id, userID, showtimeID, number_tickets, total_cost);
        }}
      >
        <input className="bg-slate-300" type="text" name="userID" id="userID" />
        <br />
        <input className="bg-slate-300" type="text" name="aais" id="aais" />
        <br />
        <input className="bg-slate-300" type="text" name="num" id="num" />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
