import React from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";

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
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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
      <Card sx={{ maxWidth: 345, height: 320 }} onClick={handleOpen}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ objectFit: "cover", height: 200 }}
            image={thumbnail}
            alt={`${title} image `}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {brand}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full flex flex-row justify-end">
            <button onClick={handleClose} className="text-xl font-bold">
              x
            </button>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-full h-full"
          >
            {images.map((image) => (
              <SwiperSlide
                key={image}
                className="flex justify-center items-center"
              >
                <img
                  src={image}
                  className="w-90 h-90 object-cover"
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
