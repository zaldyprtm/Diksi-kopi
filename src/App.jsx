import React, { useState } from "react";
import { Data } from "./components/Data";
import { Navbar } from "./components/Navbar";
import { Paginate } from "./components/Paginate";
import { Hero } from "./components/Hero";
import { Welcome } from "./components/Welcome";
import Slider from "./components/Slider";

function App(props) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  console.log(Data);

  // Menghitung indeks awal dan akhir untuk data pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDisplayData = Data.slice(indexOfFirstItem, indexOfLastItem);

  // Mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <Navbar onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        {/* <Hero /> */}
        <Slider />
        <Welcome />
      </div>

      <div className="mt-20 mx-auto grid md:grid-cols-4">
        <div className="mb-4  mx-auto text-center">
          <h1 className="font-bold text-2xl text-kopi">Menu</h1>
          <p className="text-sm text-wrap">kami menyediakan berbagai menu kopi pilihan dengan rasa terbaik</p>
        </div>
        {currentDisplayData
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
      <Paginate
        itemsPerPage={itemsPerPage}
        totalItems={Data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}

export default App;
