# RotationCSS

This npm package parses the exif data of a jpeg file
and returns a hash that has the necessary CSS
to rotate the image correctly.

```javascript
  import rotationCSS from 'rotation-css';

  const inputElement = document.querySelector("input")
  const imageElement = document.querySelector("img")

  const reader = new FileReader();
  reader.onload = function(event) {
    imageElement.src = event.target.result;
    imageElement.style = rotationCSS(event.target.result);
  };
  reader.readAsDataURL(inputElement.files[0]);
```

This package uses code based on [Exif.js](https://github.com/exif-js/exif-js) to
extract the actual metadata.
