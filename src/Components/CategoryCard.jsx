import Btn from "../Components/Button";

function CategoryCard(props) {
  return (
    <div
      className=" w-[46%]  sm:w-[30%] h-[90%] rounded-xl overflow-hidden relative bg-center bg-cover group transition-all duration-300 hover:opacity-50 hover:shadow-white hover:shadow-lg"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Btn href={props.location} className="text-white font-bold text-2xl">
          {props.name}
        </Btn>
      </div>
    </div>
  );
}

export default CategoryCard;