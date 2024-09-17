import GridItem from "../GridItem/GridItem";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  urls: {
    thumb: string;
    regular: string;
  };
  alt_description: string;
  openModal: (url: string, alt: string) => void;
}

const ImageCard = ({ urls, alt_description, openModal }: ImageCardProps) => (
  <GridItem>
    <div className={css.thumb}>
      <img
        src={urls.thumb}
        alt={alt_description || "Image"}
        onClick={() => openModal(urls.regular, alt_description)}
      />
    </div>
  </GridItem>
);

export default ImageCard;
