"use client";

import { useGetImagesQuery } from "@/lib/services/imageApi";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import GaleryLoadingState from "./Galery-Loading-Skeleton";
import { EditNote } from "@mui/icons-material";

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
              className={`w-full relative h-60 ${
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
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-sky-900 opacity-60 text-white flex py-1 space-x-2 px-1">
                <EditNote />
                <p>{image.author}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Box>
  );
}

export default Gallery;
