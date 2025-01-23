import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TImage = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://picsum.photos/",
  }),
  endpoints: (builder) => ({
    getImages: builder.query<TImage[], void>({
      query: () => "v2/list",
    }),
  }),
});

export const { useGetImagesQuery } = imageApi;
