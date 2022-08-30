import renderCards from './renderCards.js'
import { dataCards } from './dataCards.js'

const products = document.querySelector('.products__list')
const sort = document.querySelector('.price-select')
const price = document.querySelectorAll('.products__price')

function sortCards(sortType) {
  if (sortType === 'asc') {
    dataCards.sort((min, max) => min.price - max.price)
    renderCards();
  }
  if (sortType === 'desc') {
    dataCards.sort((min, max) => max.price - min.price)
    renderCards();
  }
}

sort.addEventListener('change', (event) => {
  sortCards(event.target.value)
})