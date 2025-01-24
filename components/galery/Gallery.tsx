"use client";

import { useGetImagesQuery } from "@/lib/services/imageApi";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import GaleryLoadingState from "./Galery-Loading-Skeleton";
import { EditNote, FitScreen } from "@mui/icons-material";

function Gallery() {
  const { data, isLoading, error } = useGetImagesQuery();

  if (isLoading) {
    return <GaleryLoadingState />;
  }

  if (error) {
    return (
      <Typography variant="h2">
        Something went Wrong while loading data!
      </Typography>
    );
  }

  return (
    <Box>
      {data && (
        <div className="py-4 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
          {data.map((image, index) => (
            <div
              key={image.id}
              className={`w-full cursor-pointer overflow-hidden group relative h-60 ${
                index % 5 === 0
                  ? " xl:col-span-2 xl:row-span-2 xl:h-full"
                  : "xl:col-span-1 xl:row-span-1"
              }`}
            >
              <Image
                src={
                  image.download_url || "https://picsum.photos/id/239/200/300"
                }
                alt="photo"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
              <div className="absolute z-20 inset-x-0  right-0 xl:translate-y-10 group-hover:translate-y-0 bottom-0 bg-sky-900 opacity-80 text-white flex duration-300  space-x-2 px-1">
                <EditNote />
                <p className="xl:translate-x-20 xl:opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-x-0">
                  {image.author}
                </p>
              </div>
              <div className="absolute flex z-10 bg-black bg-opacity-0 rounded-full right-0 top-0 p-1 group-hover:inset-x-0 group-hover:inset-y-0  duration-300 transition-transform group-hover:bg-opacity-70 group-hover:rounded-none">
                <FitScreen className=" fill-white opacity-50 group-hover:animate-ping group-hover:opacity-100 group-hover:m-auto group-hover:fill-sky-300 duration-500 transition-all group-hover:scale-150" />
              </div>
            </div>
          ))}
        </div>
      )}
    </Box>
  );
}

export default Gallery;
