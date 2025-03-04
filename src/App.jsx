import data from "./data.json";

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
        <h2>IMAGE</h2>
        <AlbumName album={album} />
        <ArtistName album={album} />
      </div>
    </li>
  );
};

const AlbumCover = () => {};

const AlbumName = ({ album }) => {
  return (
    <h3>
      <a href={album.external_urls.spotify} target="_blank">
        {album.name}
      </a>
    </h3>
  );
};

const ArtistName = ({ album }) => {
  const artistNames = album.artists.map((artist) => artist.name).join(", ");
  return <p>{artistNames}</p>;
};
