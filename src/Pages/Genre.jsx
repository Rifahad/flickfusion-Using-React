import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../Components/Card";
import Btn from "../Components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";

function Genre() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "RetriveMovies" });
  }, [dispatch]);

  const movies = useSelector((state) => state.MovieData);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const offset = currentPage * itemsPerPage;
  const currentPageMovies = movies.slice(offset, offset + itemsPerPage);


  return (
    <div className="mb-90 pb-20">
      <div className="w-full h-auto flex flex-wrap items-center justify-center gap-16 mt-10 mb-40">
      {currentPageMovies.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={<GrFormPrevious />}
        nextLabel={<MdOutlineNavigateNext />}
        pageCount={Math.ceil(movies.length / itemsPerPage)}
        onPageChange={({ selected }) => setCurrentPage(selected)}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Genre;
