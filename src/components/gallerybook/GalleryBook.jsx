import react, { useState, Suspense } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import chickenwings from "@/assets/chickenwings.jpg";
import fourbokit from "@/assets/fourbokit.jpg";
import firesthousandisland from "@/assets/firesthousandisland.jpg";
import freshIngredients from "@/assets/freshingredients.jpg";
import friedSevenIsland from "@/assets/friessevenisland.jpg";
import fritters from "@/assets/fritters.jpg";
import jerkWings from "@/assets/jerkwings.jpg";
import pepperSauce from "@/assets/peppersauce.jpg";
import saltfishBokit from "@/assets/saltfish-bokit.jpg";
import trioBokit from "@/assets/triobokit.jpg";
import veganBokit from "@/assets/veganbokit.jpg";
import veganPlatter from "@/assets/veganplatter.jpg";

const images = [
  { img: chickenwings, title: "Grilled Jerk Chicken Wings", rows: 2, cols: 2 },
  { img: fourbokit, title: "Four Bokits" },
  { img: firesthousandisland, title: "Fries Thousand Island", rows: 2 },
  { img: freshIngredients, title: "Fresh Ingredients 2" },
  { img: friedSevenIsland, title: "Fries with House Sauce", cols: 2, rows: 1 },
  { img: jerkWings, title: "Jerk Wings", cols: 2 },
  { img: fritters, title: "Fritters", cols: 2, rows: 2 },
  { img: pepperSauce, title: "Pepper Sauce", cols: 2 },
  { img: trioBokit, title: "Trio Bokit", cols: 2 },
  { img: veganBokit, title: "Vegetarian Bokit", rows: 1, cols: 2 },
  { img: saltfishBokit, title: "Saltfish Bokit", rows: 1, cols: 1 },
  { img: veganPlatter, title: "Vegetarian Platter", rows: 1, cols: 1 },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (img, title) => {
    setSelectedImage({ img, title });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <ImageList
        sx={{ width: 1000, height: 650 }}
        variant="quilted"
        cols={4}
        rowHeight={140}
      >
        {images.map((item, i) => (
          <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1}>
            {i % 2 === 0 ? (
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                onClick={() => handleOpen(item.img, item.title)}
              />
            ) : (
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                onClick={() => handleOpen(item.img, item.title)}
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{ zIndex: 1300 }}
      >
        <div className="relative">
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
          )}
          <div className="p-4">
            <h2 className="text-lg font-semibold">{selectedImage?.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {selectedImage?.title ? `Image of ${selectedImage.title}` : ""}
            </p>

            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-base font-bold mb-4">
                Price:{" "}
                <span className="text-black-700">
                  £{selectedImage?.price ? selectedImage.price : "0.00"}
                </span>
              </p>

              {/* Quantity */}

              <div className="flex items-center gap-4 mb-4">
                <label htmlFor="quantity" className="text-sm font-medium">
                  Quantity:
                </label>
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  defaultValue={0}
                  className="border rounded px-2 py-1 w-20"
                  disabled
                />
              </div>

              {/* order button */}
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
                disabled
                style={{ opacity: 0.7 }}
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      {/* <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{ zIndex: 1300 }}
      >
        <div className="relative">
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
          )}
          <div className="p-4">
            <h2 className="text-lg font-semibold">{selectedImage?.title}</h2>
            <p className="text-sm text-gray-600">
              {selectedImage?.title ? `Image of ${selectedImage.title}` : ""}
            </p>
          </div>
        </div>
      </Dialog> */}
    </>
  );
};

export default Gallery;
