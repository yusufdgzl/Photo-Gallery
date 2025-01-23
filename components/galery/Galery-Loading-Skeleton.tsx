import { Box, Skeleton } from "@mui/material";

function GaleryLoadingSkeleton() {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
      {Array.from({ length: 30 }).map((_, index) => (
        <Box
          key={index}
          className={`relative group w-full h-60 ${
            index % 5 === 0
              ? "col-span-2 row-span-2 h-full"
              : "col-span-1 row-span-1"
          }`}
        >
          <Skeleton
            variant="rectangular"
            className="object-cover w-full h-full"
            height="100%"
          />
          {/* <Skeleton variant="text" /> */}
        </Box>
      ))}
    </div>
  );
}

export default GaleryLoadingSkeleton;
