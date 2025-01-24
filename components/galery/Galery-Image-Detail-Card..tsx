import { useGetImageQuery } from "@/lib/services/imageApi";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type TImageDetailCardProps = {
  id: number;
};

function ImageDetailCard(props: TImageDetailCardProps) {
  const { id } = props;

  const { data, isLoading, error } = useGetImageQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
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
        <Image
          src={data.download_url}
          alt={data.author}
          width={400}
          height={400}
        />
      )}
    </Box>
  );
}

export default ImageDetailCard;
