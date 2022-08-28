import {dataCards} from './dataCards.js'

const products = document.querySelector('.products__list')


// Функция отрисовки карточки
export function generateCards() {
  const cards = []
  for (let i = 0; i < dataCards.length; i++) {
    cards.push(
      `
        <div class="products__item">
          <a href="" class="products__link">
            <div class="products__img">
              <img src="./src/img/product_1.png" alt="">
            </div>
            <div class="products__content">
              <div class="products__title">${dataCards[i].title}</div>
              <div class="products__bottom">
                <div class="products__price">${dataCards[i].price}<sup>₽</sup> </div>
                <button type="submit" class="products__icon products__btn"></button>
              </div>
            </div>
          </a>
        </div>
      `
    )
  }
  return cards
}

let renderCards = generateCards()

products.innerHTML = renderCards.join('')