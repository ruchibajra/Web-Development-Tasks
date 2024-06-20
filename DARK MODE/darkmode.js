let currentIndex = 0;

function moveCarousel(direction) {
    const container = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardWidth = cards[0].offsetWidth;
    const containerWidth = container.offsetWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = totalCards - visibleCards;
    }

    container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
    });
}
