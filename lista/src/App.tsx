import { useState } from "react";
import { images } from "./components/images";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [filteredImages, setFilteredImages] = useState(
    Object.entries(images)
  );

  // 👉 estado da imagem selecionada
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  function handleSearch() {
    const term = search.toLowerCase();

    const result = Object.entries(images).filter(([name]) =>
      name.toLowerCase().includes(term)
    );

    setFilteredImages(result);
  }

  return (
    <>
      <header>
        <h1>Search wallpaper Cat Mascote called Coffe</h1>
      </header>

      <main>
        <input
          type="text"
          placeholder="Digite um termo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button onClick={handleSearch}>Search</button>

        {filteredImages.length === 0 ? (
          <p>Nenhuma imagem encontrada</p>
        ) : (
          <ul className="image-list">
            {filteredImages.map(([name, src]) => (
              <li
                key={name}
                className="image-item"
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={name} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        )}
      </main>

      {/* 🔥 MODAL */}
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            className="modal-image"
            alt="Imagem ampliada"
          />
        </div>
      )}

      <footer>
        <p>© 2024, this is not an official Magic the Gathering site</p>
      </footer>
    </>
  );
}
