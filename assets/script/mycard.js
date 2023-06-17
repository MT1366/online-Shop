let html =``;
const container = document.querySelector('.mycart-content')

const getOrders = async function () {
    const url = await fetch(
      "https://648846b20e2469c038fd62ce.mockapi.io/wishlistUsers"
    );
  
    const data = await url.json();
    console.log(data)

    data.forEach(element => {
      

    html += `<section class="rows">
    <div class="image">
      <img src="${element.image}" alt="" width="90px" />
    </div>

    <div class="content">
      <div class="title">
        <p>${element.name}</p>
        <img src="./assets/image/trash-fill.svg" alt="" width="15px" />
      </div>

      <div class="color-size">
        <span class="color-icon" style="background:${element.colors[0]} ;"></span>
        <span class="color">${element.colors[0]}</span>
        <span class="dash">|</span>
        <span class="size">${element.sizes[1]}</span>
      </div>

      <div class="product-quantity">
        <p class="quantity">Quantity</p>

        <div class="add-remove">
          <a class="remove">-</a>
          <a>1</a>
          <a class="add">+</a>
        </div>
      </div>
    </div>
  </section>`

  container.innerHTML = html;
});

}

getOrders()