import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Btn from '../Components/Button'

const movieValidationSchema = Yup.object({
  title: Yup.string().required("Movie title is required"),
  Subtitle: Yup.string().required("Subtitle name is required"),
  director: Yup.string().required("Director name is required"),
  releaseDate: Yup.date().required("Release date is required"),
  genre: Yup.string().required("Genre is required"),
  rating: Yup.number()
    .min(0)
    .max(10)
    .required("Rating must be between 0 and 10"),
  description: Yup.string().required("Description is required"),
  poster: Yup.string().url("invalid url").required("Description is required"),
});

const AddMovie = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center min-h-screen text-gray-900">
      <div className="w-full max-w-screen-2xl bg-color-1 bg-opacity-10 p-8 rounded-lg shadow-sm shadow-color-1 mt-10 mb-40">
        <Formik
          initialValues={{
            title: "",
            Subtitle: "",
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
          {() => (
            <Form className="space-y-6  text-white">
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
                <label htmlFor="Subtitle" className="block font-semibold">
                  sub Title
                </label>
                <Field
                  type="text"
                  name="Subtitle"
                  className="mt-1 block w-full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="Subtitle"
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
                  className="mt-1 block w/full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
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
                  className="mt-1 block w/full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="releaseDate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="genre" className="block font-semibold">
                  category{" "}
                </label>
                <Field
                  as="select"
                  name="genre"
                  className="mt-1 block w/full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                >
                  <option value="" disabled className="bg-color-1">
                    category
                  </option>
                  <option
                    value="thriller"
                    className="bg-color-1"
                  >
                    Series
                  </option>
                  <option value="action" className="bg-color-1">
                    Kids
                  </option>
                  <option value="comedy" className="bg-color-1">
                    Comedies
                  </option>
                  <option value="action" className="bg-color-1">
                    Action
                  </option>
                  <option value="sci-fi" className="bg-color-1">
                    Documnetary
                  </option>
                </Field>
                <ErrorMessage
                  name="genre"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="description" className="block  font-semibold">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="mt-1 block w/full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="poster" className="block font-semibold">
                  Movie Poster
                </label>
                <Field
                  type="text"
                  name="poster"
                  className="mt-1 block w/full shadow-sm shadow-color-1 rounded-md py-2 px-3 bg-transparent"
                />
                <ErrorMessage
                  name="poster"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <Btn
                type="submit"
              >
                Add Movie
              </Btn>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddMovie;
