import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" text-white   w-full h-screen  flex items-center   justify-center ">
      <form
        className="  justify-center items-center bg-[#d1e0e0] shadow-md bg-opacity-10 flex gap-5 flex-col  h-[200px] w-[350px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-2">
          <label htmlFor="userName">UserName</label>
          <input
            className="rounded-md  bg-slate-300  bg-transparent border"
            {...register("userName", { required: true, maxLength: 20 })}
          />
        </div>

        <div className="flex gap-2">
          <label htmlFor="userName">UserName</label>
          <input
            className="rounded-md  bg-slate-300  bg-transparent border"
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
          />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
