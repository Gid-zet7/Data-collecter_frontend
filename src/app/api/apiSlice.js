import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating the api
export const apiSlice = createApi({
  // Set base url to fetch or perform operations on data to the backend
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),

  // Tag types will be used for cached data
  tagTypes: ["Data Form", "Migrant", "User"],

  //   We will attach extended slices for data form, migrant, and user to this api slice
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
