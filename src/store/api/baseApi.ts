import type { Prospect } from "@/store/data/prospect";
import type { APIQueryArguments, APIResponse } from "@/store/types";
import { mockBaseQuery } from "@/store/utils";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  baseQuery: mockBaseQuery,
  endpoints: (builder) => ({
    getProspect: builder.query<Prospect, APIQueryArguments>({
      query: ({ id }) => ({ url: `/prospects/${id}`, method: "GET" }),
      transformResponse: (response: APIResponse<Prospect>) => response.data,
      providesTags: ["prospect"],
    }),
  }),
  tagTypes: ["prospect"],
});

export const { useGetProspectQuery } = baseApi;
