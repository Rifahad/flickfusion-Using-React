import { useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../Components/Card";
import Btn from "../Components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function Genre() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 14;

  const handlePageChange = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array(totalItems)
    .fill()
    .map((_, index) => <Card key={index} />)
    .slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="mb-90 pb-20">
      <div className="w-full h-auto flex flex-wrap items-center justify-center gap-16 mt-10 mb-40">
        {currentItems}
      </div>
      <ReactPaginate
        previousLabel={
          <Btn className="px-4 py-2 rounded">
            <GrFormPrevious />
          </Btn>
        }
        nextLabel={
          <Btn className="px-4 py-2 rounded">
            <MdOutlineNavigateNext />
          </Btn>
        }
        pageCount={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={"flex justify-center text-white "}
        activeClassName={"bg-color-1 bg-opacity-15"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
        pageClassName={"mr-2"}
        previousClassName={"mr-2"}
        nextClassName={"ml-2"}
        pageLinkClassName={"px-4 py-2 rounded"}
        previousLinkClassName={"px-4 py-2 rounded"}
        nextLinkClassName={"px-4 py-2 rounded"}
      />
    </div>
  );
}

export default Genre;