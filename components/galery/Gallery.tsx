"use client";

import { useGetImagesQuery } from "@/lib/services/imageApi";
import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import GaleryLoadingState from "./Galery-Loading-Skeleton";
import { CloseOutlined, EditNote, FitScreen } from "@mui/icons-material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toggleModal } from "@/lib/features/modal/modalSlice";

function Gallery() {
  const { data, isLoading, error } = useGetImagesQuery();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const modalIsOpen = useAppSelector((state) => state.openModal.modalIsOpen);
  const dispatch = useAppDispatch();

  const handleOpen = (index: number) => {
    dispatch(toggleModal());
    setSelectedIndex(index);
  };
  const handleClose = () => dispatch(toggleModal());

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
      <div>
        <Modal
          className=" justify-center flex items-center text-white bg-black bg-opacity-50"
          open={modalIsOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            initialSlide={selectedIndex}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="max-w-[1100px] bg-slate-200 w-5/6 cursor-pointer  relative h-[600px] "
          >
            {data?.map((image) => (
              <SwiperSlide key={image.id}>
                <button
                  onClick={handleClose}
                  className="absolute group right-1 top-1 z-20 border-sky-900 border-opacity-60 hover:bg-white border rounded-full"
                >
                  <CloseOutlined className="fill-sky-600" />
                </button>
                <div className="bg-sky-950  w-full h-full p-[1px] ">
                  <Image
                    src={image.download_url}
                    alt={image.author}
                    width={1000}
                    height={1000}
                    className=" w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-center italic font-serif rounded-[20px_0_0_0] absolute bottom-0 right-0 px-2 mt-4 bg-sky-950  bg-opacity-70">
                  Author: {image.author}
                </h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal>
      </div>
      {data && (
        <div className="py-4 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
          {data.map((image, index) => (
            <div
              onClick={() => handleOpen(index)}
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
