const db = new Dexie("shoeStoreDatabase");

const nikeButton = document.querySelector(".nikeBtn");
const addidasButton = document.querySelector(".addidasBtn");
const pumaButton = document.querySelector(".pumaBtn");
const asicsButton = document.querySelector(".asicsBtn");
const reebokButton = document.querySelector(".reebokBtn");
const converseButton = document.querySelector(".converseBtn");
const newBalanceButton = document.querySelector(".newBalanceBtn");

const searchBar = document.querySelector("#search-input");

const filterBtnSection = document.querySelector(".filter-btns");
const filterBtn = document.querySelectorAll(".filter-btns button");

let nikeHtml = ``;
let addidasHtml = ``;
let pumaHtml = ``;
let asicsHtml = ``;
let reebokHtml = ``;
let newBalanceHtml = ``;
let converseHtml = ``;

let html = ``;
let errorMessage = ``;

filterBtnSection.addEventListener("mouseenter", function () {
  filterBtn.forEach((button) => {
    button.style.transform = "translateX(-200px)";
  });
});

filterBtnSection.addEventListener("mouseleave", function () {
  filterBtn.forEach((button) => {
    button.style.transform = "translateX(190px)";
  });
});

searchBar.addEventListener("input", function () {
  db.products
    .where("brand")
    .equals(searchBar.value)
    .toArray()
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        const { id, brand, name, price, image, sizes, description } = element;

        html = `<div class = ${brand === searchBar.value ? "show" : "hidden"}>
          <img class="product-image" src="${image}" alt="" />
          <p class="brand">${brand}</p>
          <p class="price">$ ${price}</p>
        </div>`;
        productSection.innerHTML = html;

        productSection.insertAdjacentHTML("beforeend", html);
      });
    });
});

const productSection = document.querySelector(".product-section");

db.version(1).stores({
  products: "id, brand, name, price, image, description",
});

db.products.bulkAdd([
  {
    id: 1,
    brand: "Nike",
    name: "Air Jordan",
    price: "125",
    image: "./assets/image/nike-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],
    description: "Men's shoes",
  },
  {
    id: 2,
    brand: "Nike",
    name: "Nike Court Borough",
    price: "65",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men's Shoes",
  },
  {
    id: 3,
    brand: "Nike",
    name: "Nike Air VaporMax",
    price: "210",
    image: "./assets/image/newbalance-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Big kid's shoes",
  },
  {
    id: 4,
    brand: "Nike",
    name: "Air Jordan 1 Low",
    price: "150",
    image: "./assets/image/newbalance-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men's shoes",
  },
  {
    id: 5,
    brand: "Nike",
    name: "Nike Blazer Mid",
    price: "435",
    image: "./assets/image/nike-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Casual",
  },
  {
    id: 6,
    brand: "Addidas",
    name: "Superstar shoes",
    price: "550",
    image: "./assets/image/newbalance-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men's original",
  },
  {
    id: 7,
    brand: "Addidas",
    name: "Forum Bold Shoes",
    price: "210",
    image: "./assets/image/newbalance-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Women's Original",
  },
  {
    id: 8,
    brand: "Addidas",
    name: "Forum Low Shoes",
    price: "200",
    image: "./assets/image/newbalance-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Originals",
  },
  {
    id: 9,
    brand: "Addidas",
    name: "Gazelle Shoes",
    price: "190",
    image: "./assets/image/newbalance-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Originals",
  },
  {
    id: 10,
    brand: "Puma",
    name: "Super Liga OG Retro",
    price: "89.00",
    image: "./assets/image/newbalance-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Sneakers",
  },
  {
    id: 11,
    brand: "Puma",
    name: "H.ST.20 KIT",
    price: "66.99",
    image: "./assets/image/newbalance-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Sneakers",
  },
  {
    id: 12,
    brand: "Puma",
    name: "Suede Classix",
    price: "62.99",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Season Sneakers",
  },
  {
    id: 13,
    brand: "Puma",
    name: "RS-TRCK",
    price: "120",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Escape Sneakers",
  },
  {
    id: 14,
    brand: "Converse",
    name: "Chunk 70 De Luxe",
    price: "55",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "UNISEX HIGH TOP SHOE",
  },
  {
    id: 15,
    brand: "Converse",
    name: "Chunk Taylor All Star",
    price: "45",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "UNISEX HIGH TOP SHOE",
  },
  {
    id: 16,
    brand: "Converse",
    name: "Chunk 70 Pride",
    price: "75",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "UNISEX HIGH TOP SHOE",
  },
  {
    id: 17,
    brand: "Reebok",
    name: "Club C 85",
    price: "80",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    description: "Vintage Shoes",
  },
  {
    id: 18,
    brand: "Reebok",
    name: "Nano 2 Men's Training shoe",
    price: "90",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men",
  },
  {
    id: 19,
    brand: "Reebok",
    name: "Classic Leather Shoes",
    price: "110",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Unisex Classics",
  },
  {
    id: 20,
    brand: "Reebok",
    name: "Nano X3 shoes",
    price: "100",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Unisex Sport",
  },
  {
    id: 21,
    brand: "Reebok",
    name: "Club C 85 shoes",
    price: "105",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 22,
    brand: "Asics",
    name: "GEL-KAYANO 30",
    price: "180.00",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men's Shoes",
  },
  {
    id: 23,
    brand: "Asics",
    name: "GEL-KAYANO 80",
    price: "110",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 24,
    brand: "Asics",
    name: "GEL-KAYANO 50",
    price: "105",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 25,
    brand: "Asics",
    name: "GEL-KAYANO 20",
    price: "200",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 26,
    brand: "newBalance",
    name: "GEL-KAYANO 90",
    price: "175",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 27,
    brand: "newBalance",
    name: "GEL-KAYANO 90",
    price: "175",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 28,
    brand: "newBalance",
    name: "GEL-KAYANO 90",
    price: "175",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 29,
    brand: "newBalance",
    name: "GEL-KAYANO 90",
    price: "175",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 30,
    brand: "newBalance",
    name: "GEL-KAYANO 90",
    price: "175",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 31,
    brand: "newBalance",
    name: "GEL-KAYANO 90",
    price: "175",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 32,
    brand: "newBalance",
    name: "GEL-KAYANO 90",
    price: "175",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 33,
    brand: "newBalance",
    name: "GEL-KAYANO 90",
    price: "175",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
  {
    id: 34,
    brand: "newBalance",
    name: "GEL-KAYANO 90",
    price: "175",
    image: "./assets/image/addidas-shoe.png",
    sizes: [41, 42, 43],
    colors: ["red", "white", "black", "green"],

    description: "Men Classics",
  },
]),
  db.products.toArray().then((data) => {
    data.forEach((element) => {
      const { id, brand, name, price, image, sizes, colors, desc } = element;
      html +=  `<div class = "component ${id} ${brand}">
        <img class="product-image" src="${image}" alt="" />
        <p class="brand">${brand}</p>
        <p class="price">$ ${price}</p>
      </div>`;

      productSection.innerHTML = html;

      const comp = document.querySelectorAll('.component')
      comp.forEach((product,i) => {
        product.addEventListener('click', function(){
          data.forEach ((el,j) => {
            if (i === j) {
              console.log(el)
              html = `<section action="" id="container-inner">
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
              // window.location.href = `http://127.0.0.1:5500/product-page-add-to-card.html?id=${el.id}`
              document.body.innerHTML = html;

            }
          })
        });
      });

    })

  }),
  nikeButton.addEventListener("click", function () {
    db.products
      .where("brand")
      .equals("Nike")
      .toArray()
      .then((data) => {
        data.forEach((element) => {
          console.log(element);

          const { id, brand, name, price, image, sizes, description } = element;
          html = "";
          nikeHtml += `<div class = ${brand === "Nike" ? "show" : "hidden"}>
          <img class="product-image" src="${image}" alt="" />
          <p class="brand">${brand}</p>
          <p class="price">$ ${price}</p>
        </div>`;
          productSection.innerHTML = nikeHtml;

          // productSection.insertAdjacentHTML("beforeend", html);
        });
      });
  }),
  addidasButton.addEventListener("click", function () {
    db.products
      .where("brand")
      .equals("Addidas")
      .toArray()
      .then((data) => {
        data.forEach((element) => {
          console.log(element);

          const { id, brand, name, price, image, sizes, description } = element;
          html = "";
          addidasHtml += `<div class = ${
            brand === "Addidas" ? "show" : "hidden"
          }>
          <img class="product-image" src="${image}" alt="" />
          <p class="brand">${brand}</p>
          <p class="price">$ ${price}</p>
        </div>`;
          productSection.innerHTML = addidasHtml;

          // productSection.insertAdjacentHTML("beforeend", html);
        });
      });
  }),
  pumaButton.addEventListener("click", function () {
    db.products
      .where("brand")
      .equals("Puma")
      .toArray()
      .then((data) => {
        data.forEach((element) => {
          console.log(element);

          const { id, brand, name, price, image, sizes, description } = element;

          html = "";
          pumaHtml += `<div class = ${brand === "Puma" ? "show" : "hidden"}>
          <img class="product-image" src="${image}" alt="" />
          <p class="brand">${brand}</p>
          <p class="price">$ ${price}</p>
        </div>`;
          productSection.innerHTML = pumaHtml;

          productSection.insertAdjacentHTML("beforeend", html);
        });
      });
  });
asicsButton.addEventListener("click", function () {
  db.products
    .where("brand")
    .equals("Asics")
    .toArray()
    .then((data) => {
      data.forEach((element) => {
        console.log(element);

        const { id, brand, name, price, image, sizes, description } = element;

        html = "";
        asicsHtml += `<div class = ${brand === "Asics" ? "show" : "hidden"}>
          <img class="product-image" src="${image}" alt="" />
          <p class="brand">${brand}</p>
          <p class="price">$ ${price}</p>
        </div>`;
        productSection.innerHTML = asicsHtml;

        // productSection.insertAdjacentHTML("beforeend", html);
      });
    });
});
reebokButton.addEventListener("click", function () {
  db.products
    .where("brand")
    .equals("Reebok")
    .toArray()
    .then((data) => {
      data.forEach((element) => {
        console.log(element);

        const { id, brand, name, price, image, sizes, description } = element;

        html = "";
        reebokHtml += `<div class = ${brand === "Reebok" ? "show" : "hidden"}>
          <img class="product-image" src="${image}" alt="" />
          <p class="brand">${brand}</p>
          <p class="price">$ ${price}</p>
        </div>`;
        productSection.innerHTML = reebokHtml;

        // productSection.insertAdjacentHTML("beforeend", html);
      });
    });
});
newBalanceButton.addEventListener("click", function () {
  db.products
    .where("brand")
    .equals("newBalance")
    .toArray()
    .then((data) => {
      data.forEach((element) => {
        console.log(element);

        const { id, brand, name, price, image, sizes, description } = element;

        html = "";
        newBalanceHtml += `<div class = ${
          brand === "newBalance" ? "show" : "hidden"
        }>
          <img class="product-image" src="${image}" alt="" />
          <p class="brand">${brand}</p>
          <p class="price">$ ${price}</p>
        </div>`;
        productSection.innerHTML = newBalanceHtml;

        // productSection.insertAdjacentHTML("beforeend", html);
      });
    });
});
converseButton
  .addEventListener("click", function () {
    db.products
      .where("brand")
      .equals("Converse")
      .toArray()
      .then((data) => {
        data.forEach((element) => {
          console.log(element);

          const { id, brand, name, price, image, sizes, description } = element;

          html = "";
          converseHtml += `<div class = ${
            brand === "Converse" ? "show" : "hidden"
          }>
          <img class="product-image" src="${image}" alt="" />
          <p class="brand">${brand}</p>
          <p class="price">$ ${price}</p>
        </div>`;
          productSection.innerHTML = converseHtml;

          // productSection.insertAdjacentHTML("beforeend", html);
        });
      });
  })

  .catch((error) => {
    console.log(error);
  });

// export { db };

