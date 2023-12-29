function render_header ()
{
  let newHeader = document.createElement("header");
  let body = document.querySelector("body");

  let newImg1 = document.createElement("img");
  let newImg2 = document.createElement("img");
  let newImg3 = document.createElement("img");


  let textContainer = document.createElement("div");
  let newH1Text = document.createElement("h1");
  let newH1Text2 = document.createElement("h1");

  newH1Text.textContent = "Utbytesstudier"
  newH1Text2.textContent = "Missa inte chansen!"

  body.appendChild(newHeader);
  newHeader.appendChild(newImg1);
  newHeader.appendChild(textContainer)
  textContainer.appendChild(newH1Text);
  textContainer.appendChild(newH1Text2);
  newHeader.appendChild(newImg2);
  newHeader.appendChild(newImg3);


  
  newImg1.src = "media/geo_images/argentina_normal_1.jpg";
  newImg2.src = "media/geo_images/argentina_normal_2.jpg";
  newImg3.src = "media/geo_images/argentina_normal_3.jpg";
}