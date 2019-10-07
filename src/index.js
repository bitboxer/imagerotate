import exif2css from "exif2css";

import exifOrientation from "./exif_orientation";

const rotationCSS = imageBlob => {
  const orientation = exifOrientation(imageBlob);
  const css = exif2css(orientation);

  if (css.transform) {
    return {"transform": css.transform};
  }
  if (css["transform-origin"]) {
    return {"transform-origin": css["transform-origin"]};
  }

  return {};
};

export default rotationCSS;
