document.addEventListener("DOMContentLoaded", () => {
  const searchcontainer = document.querySelector(".search");
  console.log(searchcontainer);
  const searchbar = document.querySelector(".search-container");
  console.log(searchbar);
  const icon = document.querySelector(".search-icon");
  const input = document.querySelector(".search-input");
  console.log(input);
  const searchInput = document.querySelector(".search-input");
  const artists = document.querySelectorAll(".artistsimages .Ist");
  const albums = document.querySelectorAll(".albumsimages .sec");
  const radios = document.querySelectorAll(".radiosimages .radio");

  searchcontainer.addEventListener("click", () => {
    searchbar.style.display = "block";
    icon.style.marginTop = "16px";
  });
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    artists.forEach((artist) => {
      const artistName = artist
        .querySelector(".artistname h3")
        .textContent.toLowerCase();
      if (artistName.includes(query)) {
        artist.style.display = "";
      } else {
        artist.style.display = "none";
      }
    });

    albums.forEach((album) => {
      const albumName = album
        .querySelector(".albumname h3")
        .textContent.toLowerCase();
      if (albumName.includes(query)) {
        album.style.display = "";
      } else {
        album.style.display = "none";
      }
    });

    radios.forEach((radio) => {
      const radioName = radio
        .querySelector(".radioname h3")
        .textContent.toLowerCase();
      if (radioName.includes(query)) {
        radio.style.display = "";
      } else {
        radio.style.display = "none";
      }
    });
  });
});
  