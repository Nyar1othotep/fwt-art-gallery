import React from "react";

import { TArtistResponse } from "@/entities/artists";

interface IArtistInfo {
  artist: TArtistResponse;
}

const ArtistInfo: React.FC<IArtistInfo> = ({ artist }) => {
  console.log(artist);

  return <div>ArtistInfo</div>;
};

export default ArtistInfo;
