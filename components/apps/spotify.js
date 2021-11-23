import React from "react";

export default function Spotify() {
  return (
    <iframe
      src="https://open.spotify.com/embed/playlist/4LnTQT9pZuyXG96WS9RNzU"
      frameBorder="0"
      title="Spotify"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  );
}

export const displaySpotify = () => {
  <Spotify> </Spotify>;
};
