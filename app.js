const itunes = new iTunes();
const ui = new UI();

const searchBox = document.querySelector(".text-box");

searchBox.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    AmagiLoader.show();
    setTimeout(() => {
      AmagiLoader.hide();
    }, 700);
    const encodedTextURL = encodeURIComponent(userText);
    itunes.getArtistData(encodedTextURL).then((artistData) => {
      ui.paintUI(artistData);
    });
  } else {
    alert("Ispunite unos!");
    ui.clearUI();
  }
});