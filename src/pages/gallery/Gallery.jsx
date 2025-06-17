import GalleryBook from "@/components/gallerybook/GalleryBook";

const Gallery = () => {
  return (
    <div className="container-custom mx-auto flex flex-col items-center justify-center py-12">
      <div className="text-center mb-16 w-full">
        <span className="section-subtitle">Explore Our Gallery</span>
        <h2 className="section-title text-center after:left-1/4 after:w-1/2">
          Gallery
        </h2>
        <p className="mt-6 max-w-2xl mx-auto">
          Discover the vibrant and delicious world of our bokits and agoulou
          through our gallery. Each image captures the essence of our
          traditional recipes and the joy they bring.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <GalleryBook />
      </div>
    </div>
  );
};

export default Gallery