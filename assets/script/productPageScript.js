const productSection = document.body;
let html = ``;

const getShoe = async function (brand) {
  const url = await fetch(
    "https://648846b20e2469c038fd62ce.mockapi.io/ShoeShope"
  );

  const data = await url.json();

  data.forEach((element) => {
    console.log(element.colors);
    html += `<section action="" id="container">
    <div class="product-img" style="background-image: url(${element.image});">
        <img src="./assets/image/back.png" alt="" class="back-arrow" />
        <p>- - -</p>
      </div>

      <div class="product-information">
        <div class="product-information-header">
          <p>${element.brand} ${element.name}</p>
          <img src="./assets/image/like.png" alt="" />
        </div>

        <div class="product-info">
          <span class="sold-info"> 7,434 sold</span>
          <img src="./assets/image/star-half.svg" alt="" />
          <span class="viewers"> 4.8 (3,895 viewers)</span>
        </div>
        <hr />
        <div class="desc">
          <h4>Description</h4>
          <p>
            ${element.description}
          </p>
        </div>

        <div id="title">
          <p>Size</p>
          <p>Color</p>
        </div>

        <div class="size-color">
          <div class="product-sizes">
            <a>${element.sizes[0]}</a>
            <a>${element.sizes[1]}</a>
            <a>${element.sizes[2]}</a>
          </div>

          <div class="product-colors">
        
            <a style="background-color: ${element.colors[0]};"></a>
            <a style="background-color: ${element.colors[1]};"></a>
            <a style="background-color: ${element.colors[2]};"></a>
            <a style="background-color: ${element.colors[3]};"></a>

          </div>
        </div>
      </div>

      <div class="product-quantity">
        <p class="quantity">Quantity</p>

        <div class="add-remove">
          <p class="remove">-</p>
          <p>1</p>
          <p class="add">+</p>
        </div>
      </div>

      <hr />
      <section class="add-to-cart">
        <div class="price">
          <p>Total Price</p>
          <p>$ 2.400</p>
        </div>

        <a class="add-btn"><i class="bi bi-lock-fill"></i> Add to cart </a>
      </section>
      </section>`;
    productSection.innerHTML = html;
    // container.insertAdjacentHTML("beforeend", html);
  });
};

getShoe();
