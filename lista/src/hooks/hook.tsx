import { images } from "../components/images";
import { useState } from "react";

type ImageKey = keyof typeof images;

export function useCoffeImage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getImage = (key: ImageKey) => {
    setSelectedImage(images[key]);
  };

  return { selectedImage, getImage };
}
