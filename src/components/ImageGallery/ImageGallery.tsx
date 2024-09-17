import Grid from "../Grid/Grid";
import ImageCard from "../ImageCard/ImageCard";

interface Image {
  id: string;
  urls: {
    thumb: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (url: string, alt: string) => void;
}

const ImageGallery = ({ images, openModal }: ImageGalleryProps) => (
  <Grid>
    {images.map(({ id, urls, alt_description }) => (
      <ImageCard
        key={id}
        urls={urls}
        alt_description={alt_description}
        openModal={openModal}
      />
    ))}
  </Grid>
);

export default ImageGallery;
