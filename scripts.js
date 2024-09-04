$(document).ready(function () {
  function filterTrendingMovies() {
    var rating = $("#ratingFilterTrending").val().toLowerCase();
    var genre = $("#genreFilterTrending").val().toLowerCase();
    var name = $("#nameFilterTrending").val().toLowerCase();

    $("#trendingContainer .movie-card").each(function () {
      var card = $(this);
      var cardRating = card.data("rating").toLowerCase();
      var cardGenre = card.data("genre").toLowerCase();
      var cardName = card.data("name").toLowerCase();

      if (
        (rating === "" || cardRating.includes(rating)) &&
        (genre === "" || cardGenre.includes(genre)) &&
        (name === "" || cardName.includes(name))
      ) {
        card.show();
      } else {
        card.hide();
      }
    });

    paginateTrending();
  }

  function paginateTrending() {
    const itemsPerPage = 4;
    const $cards = $("#trendingContainer .movie-card:visible");
    const totalPages = Math.ceil($cards.length / itemsPerPage);

    function showPage(page) {
      $cards
        .hide()
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .show();
    }

    function createPagination() {
      let paginationHtml = "<ul class='pagination'>";
      for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<li class="page-item"><a href="#" class="page-link" data-page="${i}">${i}</a></li>`;
      }
      paginationHtml += "</ul>";
      $("#pagination-container").html(paginationHtml);
    }

    $("#pagination-container")
      .off("click")
      .on("click", ".page-link", function (e) {
        e.preventDefault();
        const page = $(this).data("page");
        showPage(page);
      });

    createPagination();
    showPage(1);
  }

  function filterLikeMovies() {
    var rating = $("#likeRating").val().toLowerCase();
    var genre = $("#likeFilter").val().toLowerCase();
    var name = $("#nameFilterLike").val().toLowerCase();

    $("#likeContainer .movie-card").each(function () {
      var card = $(this);
      var cardRating = card.data("rating").toLowerCase();
      var cardGenre = card.data("genre").toLowerCase();
      var cardName = card.data("name").toLowerCase();

      if (
        (rating === "" || cardRating.includes(rating)) &&
        (genre === "" || cardGenre.includes(genre)) &&
        (name === "" || cardName.includes(name))
      ) {
        card.show();
      } else {
        card.hide();
      }
    });

    paginateLikeMovies();
  }

  function paginateLikeMovies() {
    const itemsPerPage = 4;
    const $cards = $("#likeContainer .movie-card:visible");
    const totalPages = Math.ceil($cards.length / itemsPerPage);

    function showPage(page) {
      $cards
        .hide()
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .show();
    }

    function createPagination() {
      let paginationHtml = "<ul class='pagination'>";
      for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<li class="page-item"><a href="#" class="page-link" data-page="${i}">${i}</a></li>`;
      }
      paginationHtml += "</ul>";
      $("#pagination-container-like").html(paginationHtml);
    }

    $("#pagination-container-like")
      .off("click")
      .on("click", ".page-link", function (e) {
        e.preventDefault();
        const page = $(this).data("page");
        showPage(page);
      });

    createPagination();
    showPage(1);
  }

  $("#ratingFilterTrending, #genreFilterTrending, #nameFilterTrending").on(
    "change keyup",
    filterTrendingMovies
  );

  $("#likeRating, #likeFilter, #nameFilterLike").on(
    "change keyup",
    filterLikeMovies
  );

  filterTrendingMovies();
  filterLikeMovies();
});
