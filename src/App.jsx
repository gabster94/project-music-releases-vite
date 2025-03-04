import data from "./data.json";
import React from "react";

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

// The Album component represents an individual album.
// It receives the entire album object as a prop and uses it to render various parts of the album's details.
const Album = ({ album }) => {
  return (
    <li>
      <div>
        {/* Passing the album prop to the AlbumCover, AlbumName, and ArtistName components */}
        <AlbumCover album={album} />
        <AlbumName album={album} />
        <ArtistName album={album} />
      </div>
    </li>
  );
};

// The AlbumCover component is responsible for rendering the album's cover image.
// It receives the album prop and retrieves the image URL from the album's `images` array.
const AlbumCover = ({ album }) => {
  // const imageUrl = album.images[1].url;

  // Access the second image in the images array. If there are fewer images, use a fallback.
  const imageUrl =
    album.images.length > 1 ? album.images[1].url : "default-image-url.jpg";

  // Render the album cover image with an alt attribute for accessibility
  return <img src={imageUrl} alt={`${album.name} cover`} />;
};

// The AlbumName component renders the album's name as a clickable link to the album's Spotify page.
// It receives the album prop and extracts the relevant data to display the album's name.
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

// The ArtistName component renders the names of all artists associated with the album.
// It maps over the album's `artists` array and generates a list of clickable artist names.
const ArtistName = ({ album }) => {
  return (
    <p>
      {/* Map over the `artists` array and display each artist's name with a link to their Spotify page */}
      {album.artists.map((artist, index) => (
        // React.Fragment is used here to avoid adding extra DOM elements (like <div>s)
        // It is a wrapper component without any impact on the output DOM structure.
        <React.Fragment key={artist.id}>
          {/* If it's not the first artist, display a comma to separate the names */}
          {index > 0 && ", "}
          {/* Link to the artist's Spotify profile */}
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
