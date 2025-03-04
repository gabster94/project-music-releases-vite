import data from "./data.json";
import React from "react";

import { ArtistName } from "./components/ArtistName";
import { AlbumName } from "./components/AlbumName";
import { AlbumCover } from "./components/AlbumCover";
import { Album } from "./components/Album";

console.log(data);

// The main component that imports data.json and maps through it to render Album components.
export const App = () => {
  return <Albums />;
};

// The Albums component is responsible for rendering a list of albums.
// It maps through the data and renders an individual Album component for each album.
const Albums = () => {
  return (
    <main>
      <ul>
        {/* Map over each album in the data.json and pass each album as a prop to the Album component */}
        {data.albums.items.map((album) => (
          <Album album={album} key={album.id} />
        ))}
      </ul>
    </main>
  );
};
