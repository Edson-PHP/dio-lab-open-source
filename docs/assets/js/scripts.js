const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const searchValue = searchInput.value;
  const url = `https://github.com/elidianaandrade/dio-lab-open-source/tree/main/community/${encodeURIComponent(searchValue)}.md`; 
  window.open(url, '_blank');
});

// Botão Up de Scroll
const moveTop = () => {
  scrollTo({
    behavior: "smooth",
    top: 0
  });
}

window.addEventListener("scroll", () => {
  if(scrollY <= 50){
    btnUp.style.display = "none";
  } else { 
    btnUp.style.display = "block";
  }
});

const btnUp = document.querySelector(".up");
btnUp.addEventListener("click", moveTop);
