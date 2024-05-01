import React, { useState } from "react";
import { Data } from "./components/Data";
import { Navbar } from "./components/Navbar";
import { Paginate } from "./components/Paginate";

function App(props) {
  const [search, setSearch] = useState("");

  // Menampilkan hanya 4 item pada halaman pertama
  const displayData = Data.slice(0, 4);

  return (
    <>
      <div>
        <Navbar onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="mt-20 mx-auto grid md:grid-cols-4">
        {displayData
          .filter((item) =>
            search.toLowerCase() === ""
              ? true
              : item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div
              key={item.id}
              className="mb-10 mx-auto w-80 grid grid-cols-1 text-center"
            >
              <div className="flex justify-center w-24 items-center mx-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-2xl w-28 mb-2 hover:scale-125 transition ease-in-out duration-300"
                />
              </div>
              <p className="font-bold text-kopi mt-2">{item.name}</p>
              <p className="text-[#F5F5DC] text-sm mb-1">{item.description}</p>
              <p className="text-sm text-[#C3B091]">Rp {item.price}</p>
            </div>
          ))}
      </div>
      <div>
        <Paginate />
      </div>
    </>
  );
}

export default App;
