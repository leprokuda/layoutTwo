import {dataCards} from './dataCards.js'

const products = document.querySelector('.products__list')


// Функция отрисовки карточки
export default function renderCards() {
  products.innerHTML = ''
  dataCards.forEach(card => {
    products.innerHTML += 
    `
      <div class="products__item">
        <a href="" class="products__link">
          <div class="products__img">
            <img src="./src/img/product_1.png" alt="">
          </div>
          <div class="products__content">
            <div class="products__title">${card.title}</div>
            <div class="products__bottom">
              <div class="products__price">${card.price.toLocaleString('ru-RU', {useGrouping: true})}<sup>₽</sup> </div>
              <button type="submit" class="products__icon products__btn"></button>
            </div>
          </div>
        </a>
      </div>
    `
  })
}

renderCards()