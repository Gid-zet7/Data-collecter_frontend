import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { CreateApi } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["Data Form", "Migrant", "User"],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
