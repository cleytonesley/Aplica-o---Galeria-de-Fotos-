const photos = [
    { title: "Natureza", url: "https://campusceaec.org/wp-content/uploads/2021/09/natureza_bioenergia-768x512.png" },
    { title: "Montanha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Everest_kalapatthar_crop.jpg/800px-Everest_kalapatthar_crop.jpg" },
    { title: "Cidade", url: "https://storage.caosplanejado.com/uploads/2021/01/homoge.jpg" },
    { title: "Lago", url: "https://images.ecycle.com.br/wp-content/uploads/2022/02/16145546/ledrosee-mountain-lake-g85fa16044_1920.jpg.webp" },
    { title: "Floresta", url: "https://123ecos.com.br/wp-content/uploads/2024/09/floresta-tropical-300x169.jpg" },
    { title: "Pôr do Sol", url: "https://fotodicasbrasil.com.br/wp-content/uploads/2015/06/Destacada2-do-Artigo-Dicas-para-Fotografar-Por-do-Sol.jpg" },
    { title: "Cachoeira", url: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/10/cachoeiras-capa2019-01-820x430.jpg" },
    { title: "Praia", url: "https://redesoberano.com.br/wp-content/uploads/2021/06/As-praias-mais-proximas-do-Centro-de-Porto-Seguro-768x432.jpg" },
    { title: "Campo", url: "https://img.freepik.com/fotos-premium/um-campo-de-trigo-amarelo-com-campo-de-girassol-e-arvores-verdes-no-fundo_715893-3080.jpg?w=740" },
    { title: "Deserto", url: "https://xtravel.com.br/wp-content/uploads/2024/06/andrzej-kryszpiniuk-deserto-saara-marrocos-xtravel-unsplash.jpg" },
  ];
  
  const gallery = document.getElementById("photo-gallery");
  const searchInput = document.getElementById("search");
  const noResultsMessage = document.getElementById("no-results");
  
  function renderPhotos(filter = "") {
    gallery.innerHTML = "";
    const filteredPhotos = photos.filter(photo =>
      photo.title.toLowerCase().includes(filter.toLowerCase())
    );
  
    if (filteredPhotos.length === 0) {
      noResultsMessage.classList.remove("hidden");
      return;
    }
  
    noResultsMessage.classList.add("hidden");
  
    filteredPhotos.forEach(photo => {
      const photoItem = document.createElement("div");
      photoItem.classList.add("photo-item");
  
      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.title;
  
      const title = document.createElement("p");
      title.textContent = photo.title;
  
      photoItem.appendChild(img);
      photoItem.appendChild(title);
      gallery.appendChild(photoItem);
    });
  }
  
  searchInput.addEventListener("input", () => {
    renderPhotos(searchInput.value);
  });
  
  // Inicializa a galeria com todas as fotos
  renderPhotos();
  