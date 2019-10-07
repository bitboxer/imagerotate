import exif2css from "exif2css";

import exifOrientation from "./exif_orientation";

const rotationCSS = imageBlob => {
  const orientation = exifOrientation(imageBlob);
  const css = exif2css(orientation);

  let style = {}
  if (css["transform"]) {
    style["transform"] = css["transform"];
  }
  if (css["transform-origin"]) {
    style["transform-origin"] = css["transform-origin"];
  }
  return style;
};

export default rotationCSS;
