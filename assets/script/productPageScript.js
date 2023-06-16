const productSection = document.body;
let html = ``;

const getShoe = async function (brand) {
  const url = await fetch(
    "https://648846b20e2469c038fd62ce.mockapi.io/ShoeShope"
  );

  const data = await url.json();

  data.forEach((element) => {
    // console.log(element);
    html += `<section action="" id="container">
    <div class="product-img" style="background-image: url(${element.image});">
        <img src="./assets/image/back.png" alt="" class="back-arrow" />
        <p>- - -</p>
      </div>

      <div class="product-information">
        <div class="product-information-header">
          <p>${element.brand} ${element.name}</p>
          <a class="product-like"
            ><img src="./assets/image/like.png" alt=""
          /></a>
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
            <a style="background-color: ${element.colors[4]};"></a>

          </div>
        </div>
      </div>

      <div class="product-quantity">
        <p class="quantity">Quantity</p>

        <div class="add-remove">
          <a class="remove">-</a>
          <p class="p-q">0</p>
          <a class="add">+</a>
        </div>
      </div>

      <hr />
      <section class="add-to-cart">
        <div class="price">
          <p>Total Price</p>
          <p class="element-price">$ ${element.price}</p>
        </div>

        <a class="add-btn"><i class="bi bi-lock-fill"></i> Add to cart </a>
      </section>
      </section>`;
    productSection.innerHTML = html;
    // container.insertAdjacentHTML("beforeend", html);

    const productInformation = document.querySelector(".product-information");
    const like = document.querySelectorAll(".product-like");
    const container = document.querySelectorAll("#container");
    const likeArray = [];

    container.forEach((cont, j) => {
      like.forEach((heart, i) => {
        // console.log(container);
        heart.addEventListener("click", function () {
          heart.classList.toggle("heart-fill");

          if (j === i) {
            likeArray.push(cont);

            console.log(likeArray);
          }

          // heart.src = "./assets/image/heart-fill.svg";
          // heart.style.width = "25px";
        });
      });
    });

    const add = document.querySelectorAll(".add");
    const remove = document.querySelectorAll(".remove");
    const pQ = document.querySelectorAll(".p-q");

    let elemPrice = document.querySelectorAll(".element-price");

    add.forEach((btn, i) => {
      btn.addEventListener("click", function () {
        pQ.forEach((p, j) => {
          if (i === j) {
            p.textContent++;
            elemPrice++;
          }
        });
      });
    });
    remove.forEach((btn, i) => {
      btn.addEventListener("click", function () {
        pQ.forEach((p, j) => {
          if (i === j) {
            console.log(p.textContent);
            p.textContent--;
            elemPrice--;
          }
        });
      });
    });
  });
};

getShoe();
