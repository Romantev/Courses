fetch("./fakeData.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    //* forEach()
    data.forEach((elm) => {
      const author = elm.author;
      console.log(author);

      const img = elm.download_url;
      console.log(img);

      //* erstellt figure
      let figure = document.createElement("figure");

      //* image
      let image = document.createElement("img");
      image.setAttribute("src", img);
      image.setAttribute("alt", author);
      figure.appendChild(image);

      //* author
      let authorOutput = document.createElement("figacation");
      authorOutput.textContent = author;
      figure.appendChild(authorOutput);

      //* ins HTML einfügen
      document.querySelector(".output").appendChild(figure);
    });
  })

  .catch((error) => console.log("Fehler", error));
