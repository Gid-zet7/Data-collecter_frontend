import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCredentials } from "../../features/auth/authSlice";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8080",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   // console.log(`args--${args}`);
//   // console.log(`api--${api}`);
//   // console.log(`extraOptions--${extraOptions}`); // {shout: true}

//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 403) {
//     console.log("sending refresh token");

//     // send refresh token to get new access token
//     const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

//     if (refreshResult?.data) {
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data }));

//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       if (refreshResult?.error?.status === 403) {
//         refreshResult.error.data.message = "Your login has expired";
//       }
//       return refreshResult;
//     }
//   }
//   return result;
// };

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
