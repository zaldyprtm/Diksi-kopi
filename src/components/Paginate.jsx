export const Paginate = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  // Menghitung jumlah halaman
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="join flex justify-center mx-auto">
        <button
          className="join-item btn"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`join-item btn ${currentPage === number ? 'btn-active' : ''}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="join-item btn"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          »
        </button>
      </div>
    </>
  );
};