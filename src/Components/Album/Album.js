import React from "react";
import ApiRequestWrapper from "../ApiRequest/ApiRequestWrapper";

const BASE_URL = "https://api.spotify.com/v1/albums";

const Album = props => {
  let url = BASE_URL;
  let options = {};
  if (Array.isArray(props.id)) {
    options.ids = props.id.join(",");
  } else {
    url += `/${props.id}`;
  }

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Album.Tracks = props => {
  let url = BASE_URL + `/${props.id}/tracks`;
  let options = {};

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

export default Album;
