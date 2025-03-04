//– Displays the album title and artist names.
import React from "react";

// The AlbumName component renders the album's name as a clickable link to the album's Spotify page.
// It receives the album prop and extracts the relevant data to display the album's name.
export const AlbumName = ({ album }) => {
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
