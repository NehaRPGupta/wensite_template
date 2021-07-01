const menu = [
  {
    id: 1,
    title: "Buttermilk Pancake",
    category: "breakfast",
    price: 15.99,
    img: "img/cupcake.jpg",
    desc: `Buttermilk provides the acidic element needed for baking 
                soda to make your baked goods rise. And then there's the 
                texture that it brings to baked good`,
  },

  {
    id: 2,
    title: "Diner Double",
    category: "dinner",
    price: 25.0,
    img: "img/diner-double.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam autem et tempore vitae
            doloribus quisquam atque magni sequi odit.`,
  },

  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 22.99,
    img: "img/milk.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam autem et tempore vitae"
            doloribus quisquam atque magni sequi odit.`,
  },

  {
    id: 4,
    title: "Country Delight",
    category: "lunch",
    price: 17.0,
    img: "img/delight.webp",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam autem et tempore vitae
            doloribus quisquam atque magni sequi odit.`,
  },

  {
    id: 5,
    title: "Egg Attack",
    category: "breakfast",
    price: 10.09,
    img: "img/egg.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam autem et tempore vitae
            doloribus quisquam atque magni sequi odit.`,
  },

  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 17.99,
    img: "img/oreao.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam autem et tempore vitae
            doloribus quisquam atque magni sequi odit.`,
  },

  {
    id: 7,
    title: "Bacon Overflow",
    category: "lunch",
    price: 10.67,
    img: "img/bacon.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam autem et tempore vitae
            doloribus quisquam atque magni sequi odit.`,
  },

  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 10.67,
    img: "img/american.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam autem et tempore vitae
            doloribus quisquam atque magni sequi odit.`,
  },

  {
    id: 9,
    title: "sendwich",
    category: "breakfast",
    price: 10.67,
    img: "img/sendwich.jpg",
    desc: `Merriam-Webster defines a “sandwich” to be “two or more slices of bread 
                or a split roll having a filling in between” or one slice of bread 
                covered with food.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
  displayMenuButtons();
});

function displayMenuItem(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `<article class="menu-item flex">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header class="flex">
                <h4>${item.title}</h4>
                <h4 class="price">$ ${item.price}</h4>
            </header>
            <p>
               ${item.desc}
            </p>
        </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return ` <button class="filter-btn" type="button"
         data-id=${category}>
            ${category}
         </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCategory);
      }
    });
  });
}
