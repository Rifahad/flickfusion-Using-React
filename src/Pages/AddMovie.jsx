import { Formik, Form, Field, ErrorMessage } from "formik";
import  movieValidationSchema  from "../Utility/MovieValidation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const AddMovie = () => {
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const handleSubmit = (values, { setSubmitting }) => {
    dispatch({type:'Movies',payload:values})
    setSubmitting(false)
    navigate('/')
  };
  const id=uuidv4(5)
  return (
    <div className="flex justify-center items-center min-h-screen text-gray-900">
      <div className="w-full max-w-screen-2xl bg-color-1 bg-opacity-10 p-8 rounded-lg shadow-sm shadow-color-1 mt-10 mb-40">
        <Formik
          initialValues={{
            id:id,
            title: "",
            subtitle: "",
            director: "",
            releaseDate: "",
            genre: "",
            rating: "",
            description: "",
            poster: "",
          }}
          validationSchema={movieValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6 text-white">
              <div>
                <label htmlFor="title" className="block font-semibold">
                  Movie Title
                </label>
                <Field
                  type="text"
                  name="title"
                  className="mt-1 block w-full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="subtitle" className="block font-semibold">
                  Subtitle
                </label>
                <Field
                  type="text"
                  name="subtitle"
                  className="mt-1 block w-full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="subtitle"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="director" className="block font-semibold">
                  Director
                </label>
                <Field
                  type="text"
                  name="director"
                  className="mt-1 block w-full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="director"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="releaseDate" className="block font-semibold">
                  Release Date
                </label>
                <Field
                  type="date"
                  name="releaseDate"
                  className="mt-1 block w-full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="releaseDate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="genre" className="block font-semibold">
                  Genre
                </label>
                <Field
                  as="select"
                  name="genre"
                  className="mt-1 block w-full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                >
                  <option value="" disabled className="bg-color-1">
                    Select Genre
                  </option>
                  <option value="thriller" className="bg-color-1">
                    Thriller
                  </option>
                  <option value="action" className="bg-color-1">
                    Action
                  </option>
                  <option value="comedy" className="bg-color-1">
                    Comedy
                  </option>
                  <option value="sci-fi" className="bg-color-1">
                    Sci-Fi
                  </option>
                  <option value="documentary" className="bg-color-1">
                    Documentary
                  </option>
                </Field>
                <ErrorMessage
                  name="genre"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="rating" className="block font-semibold">
                  Rating
                </label>
                <Field
                  type="number"
                  name="rating"
                  className="mt-1 block w-full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="rating"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="description" className="block font-semibold">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="mt-1 block w-full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="poster" className="block font-semibold">
                  Movie Poster URL
                </label>
                <Field
                  type="text"
                  name="poster"
                  className="mt-1 block w-full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="poster"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
              >
                Add Movie
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddMovie;
