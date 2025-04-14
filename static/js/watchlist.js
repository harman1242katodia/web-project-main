function scrollGallery(galleryId, amount) {
    document.getElementById(galleryId).scrollBy({ left: amount, behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".movie-card").forEach(card => {
        const movieName = card.getAttribute("data-movie");
        const watchlistBtn = card.querySelector(".watchlist-btn");
        const favoriteBtn = card.querySelector(".favorite-btn");

        if (localStorage.getItem(`watchlist-${movieName}`)) {
            watchlistBtn.classList.add("active");
        }
        if (localStorage.getItem(`favorite-${movieName}`)) {
            favoriteBtn.classList.add("active");
        }
    });
});

