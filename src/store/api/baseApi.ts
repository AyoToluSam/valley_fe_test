import { type TrainingHistory } from "@/store/data/ai-training";
import { type Prospect } from "@/store/data/prospect";
import { type UserProfile } from "@/store/data/user";
import type { APIQueryArguments, APIResponse } from "@/store/types";
import { mockBaseQuery } from "@/store/utils";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  baseQuery: mockBaseQuery,
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfile, void>({
      query: () => ({ url: "/user-profile", method: "GET" }),
      transformResponse: (response: APIResponse<UserProfile>) => response.data,
      providesTags: ["user_profile"],
    }),

    getProspect: builder.query<Prospect, APIQueryArguments>({
      query: ({ id }) => ({ url: `/prospects/${id}`, method: "GET" }),
      transformResponse: (response: APIResponse<Prospect>) => response.data,
      providesTags: ["prospect"],
    }),

    getAITrainingHistory: builder.query<TrainingHistory[], APIQueryArguments>({
      query: ({ params }) => ({
        url: "/training-history",
        method: "GET",
        params,
      }),
      transformResponse: (response: APIResponse<TrainingHistory[]>) =>
        response.data,
      providesTags: ["training_history"],
    }),
  }),
  tagTypes: ["user_profile", "prospect", "training_history"],
});

export const {
  useGetUserProfileQuery,
  useGetProspectQuery,
  useGetAITrainingHistoryQuery,
} = baseApi;
