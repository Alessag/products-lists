import React from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/system";
import { Modal } from "@mui/material";

type Props = {
  brand: string;
  images: string[];
  thumbnail: string;
  title: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #000",
};

export default function ProductCard({
  brand,
  images,
  thumbnail,
  title,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="border-2 border-red-500 flex flex-col items-center h-80 cursor-pointer bg-gray-100 space-y-2 text-gray-700"
        onClick={handleOpen}
      >
        <img
          src={thumbnail}
          alt={`${title} image `}
          className="border-2 border-blue-500 w-full h-60 object-cover"
        />
        <h3>Title: {title}</h3>
        <p>Brand: {brand}</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full h-full"
          >
            {images.map((image) => (
              <SwiperSlide
                key={image}
                className="border-2 border-green-100 flex justify-center items-center"
              >
                <img
                  src={image}
                  className="w-90 h-90 object-cover border-2"
                  alt={`${title} images`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Modal>
    </>
  );
}
