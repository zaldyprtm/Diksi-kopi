import React, { useState } from "react";
import { Data } from "./components/Data";
import { Navbar } from "./components/Navbar";

function App(props) {
  const [search, setSearch] = useState("");


  return (
    <>
      <div>
        <Navbar onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="mt-20 mx-auto grid md:grid-cols-4">
        {Data.filter((item) =>
          search.toLowerCase() === ""
            ? true
            : item.name.toLowerCase().includes(search.toLowerCase())
        ).map((item) => (
          <div
            key={item.id}
            className="mb-10 mx-auto w-80 grid grid-cols-1 text-center"
          >
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-2xl w-32 mb-2"
              />
            </div>
            <p className="font-bold text-kopi">{item.name}</p>
            <p className="text-[#F5F5DC] text-sm mb-1">{item.description}</p>
            <p className="text-sm text-[#C3B091]">Rp {item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
