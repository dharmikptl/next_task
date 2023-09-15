import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar";
export default function Home() {
  const [userData, setUserData] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://localhost:3500/userbook").then((res) =>
      res.json().then(setUserData)
    );
  }, []);
  console.log(userData);
  return (
    <>
      <Navbar />
      <table className="table-auto border-collapse border-4 text-center w-100">
        <thead>
          <tr className="border-collapse border-4">
            <th>Booking ID</th>
            <th>Movie Name</th>
            <th>Username</th>
            <th>Number Of Seats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userData.map(data=>(<div>{data?.id}</div>))}</td>
            <td>{userData.map(data=>(<div>{data?.boshow?.movie?.title}</div>))}</td>
            <td>{userData.map(data=>(<div>{data?.userbook?.username}</div>))}</td>
            <td>{userData.map(data=>(<div>{data?.number_tickets}</div>))}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
