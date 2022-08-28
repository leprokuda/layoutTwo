// Рендер количества карточек
document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelector('.products__list')
  const count = document.querySelector('.filter__count-number')

  function renderCountCards() {
    count.innerHTML = products.children.length
  }

  renderCountCards()
})
