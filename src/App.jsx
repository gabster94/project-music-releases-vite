import data from "./data.json";
import React from "react";

console.log(data);

// The main component that imports data.json and maps through it to render Album components.
export const App = () => {
  return <Albums />;
};

const Albums = () => {
  return (
    <main>
      <ul>
        {data.albums.items.map((album) => (
          <Album album={album} key={album.id} />
        ))}
      </ul>
    </main>
  );
};

const Album = ({ album }) => {
  return (
    <li>
      <div>
        <AlbumCover album={album} />
        <AlbumName album={album} />
        <ArtistName album={album} />
      </div>
    </li>
  );
};

const AlbumCover = ({ album }) => {
  const imageUrl = album.images[1].url;

  return <img src={imageUrl} alt={`${album.name} cover`} />;
};

const AlbumName = ({ album }) => {
  return (
    <h3>
      <a
        href={album.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {album.name}
      </a>
    </h3>
  );
};

const ArtistName = ({ album }) => {
  return (
    <p>
      {album.artists.map((artist, index) => (
        <React.Fragment key={artist.id}>
          {index > 0 && ", "}
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artist.name}
          </a>
        </React.Fragment>
      ))}
    </p>
  );
};
