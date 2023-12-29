document.addEventListener('DOMContentLoaded', function () {
  const reviewForm = document.getElementById('review-form');
  const reviewsSection = document.getElementById('reviews');

  reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    if (name && rating && comment) {
      addReview(name, rating, comment);
      reviewForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });

  function addReview(name, rating, comment) {
    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `
      <h3>${name}</h3>
      <p>Rating: ${rating}</p>
      <p>${comment}</p>
    `;

    reviewsSection.appendChild(review);
  }
});
