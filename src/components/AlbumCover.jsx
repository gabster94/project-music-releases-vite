//– Handles the album cover image and hover effects (dark overlay, play button, heart, ellipsis).
import React from "react";

// The AlbumCover component is responsible for rendering the album's cover image.
// It receives the album prop and retrieves the image URL from the album's `images` array.
export const AlbumCover = ({ album }) => {
  // const imageUrl = album.images[1].url;

  // Access the second image in the images array. If there are fewer images, use a fallback.
  const imageUrl =
    album.images.length > 1 ? album.images[1].url : "default-image-url.jpg";

  // Render the album cover image with an alt attribute for accessibility
  return <img src={imageUrl} alt={`${album.name} cover`} />;
};
