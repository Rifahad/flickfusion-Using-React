import * as Yup from "yup";

// Validation schema
const movieValidationSchema = Yup.object({
  title: Yup.string().required("Movie title is required"),
  subtitle: Yup.string().required("Subtitle name is required"),
  director: Yup.string().required("Director name is required"),
  releaseDate: Yup.date().required("Release date is required"),
  genre: Yup.string().required("Genre is required"),
  rating: Yup.number()
    .min(0, "Rating must be at least 0")
    .max(10, "Rating must be at most 10")
    .required("Rating must be between 0 and 10"),
  description: Yup.string().required("Description is required"),
  poster: Yup.string().url("Invalid URL").required("Poster URL is required"),
});

export default movieValidationSchema
