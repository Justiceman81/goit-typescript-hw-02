import getPhotos from "./apiService/photos";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import Text from "./components/Text/Text";
import { useEffect, useState } from "react";

interface Image {
  id: string;
  url: string;
  alt_description: string;
}

interface FetchResponse {
  results: Image[];
  total_pages: number;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const { results, total_pages }: FetchResponse = await getPhotos(
          query,
          page
        );
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = (value: string) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
    setIsEmpty(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url: string, alt: string) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {isVisible && (
          <LoadMoreBtn onClick={loadMore} disabled={loading}>
            {loading ? "Loading" : "Load more"}
          </LoadMoreBtn>
        )}
        {!images.length && !isEmpty && (
          <Text textAlign="center">Let`s begin search 🔎</Text>
        )}
        {loading && <Loader />}
        {error && <Text textAlign="center">❌ Something went wrong </Text>}
        {isEmpty && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        <ImageModal
          modalIsOpen={showModal}
          closeModal={closeModal}
          urls={modalUrl}
          alt_description={modalAlt}
        />
      </Container>
    </Section>
  );
};

export default App;
