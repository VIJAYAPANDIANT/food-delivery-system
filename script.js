const restaurants = [
  {
    id: 1,
    name: "Burger House",
    cuisine: "American • Burgers",
    rating: 4.8,
    time: "25-30 min",
    deliveryFee: "$1.99",
    image: "images/burger.png",
  },
  {
    id: 2,
    name: "L'Italiano Pizza",
    cuisine: "Italian • Pizza",
    rating: 4.5,
    time: "35-45 min",
    deliveryFee: "Free",
    image: "images/pizza.png",
  },
  {
    id: 3,
    name: "Sushi Express",
    cuisine: "Japanese • Sushi",
    rating: 4.9,
    time: "40-50 min",
    deliveryFee: "$3.49",
    image: "images/sushi.png",
  },
  {
    id: 4,
    name: "Green Bowl",
    cuisine: "Healthy • Salads",
    rating: 4.6,
    time: "15-25 min",
    deliveryFee: "$0.99",
    image: "images/salad.png",
  },
  {
    id: 5,
    name: "Pasta Bella",
    cuisine: "Italian • Pasta",
    rating: 4.7,
    time: "30-40 min",
    deliveryFee: "$2.49",
    image: "images/pasta.png",
  },
];

const grid = document.getElementById("restaurant-grid");
const addBtn = document.getElementById("add-btn");
const modal = document.getElementById("add-modal");
const closeBtn = document.querySelector(".close-btn");
const addForm = document.getElementById("add-form");

function createCard(restaurant) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}" class="card-image">
        <div class="card-content">
            <div class="card-header">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <div class="rating">
                    <span class="star">★</span> ${restaurant.rating}
                </div>
            </div>
            <p class="cuisine">${restaurant.cuisine}</p>
            <div class="card-footer">
                <div class="delivery-time">
                    <span class="icon">🕒</span> ${restaurant.time}
                </div>
                <div class="delivery-fee">
                    Delivery: ${restaurant.deliveryFee}
                </div>
            </div>
        </div>
    `;

  return card;
}

function renderGrid() {
    grid.innerHTML = '';
    restaurants.forEach((restaurant) => {
        grid.appendChild(createCard(restaurant));
    });
}

// Modal Logic
addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submission
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newRestaurant = {
        id: restaurants.length + 1,
        name: document.getElementById('name').value,
        cuisine: document.getElementById('cuisine').value,
        rating: parseFloat(document.getElementById('rating').value),
        time: document.getElementById('time').value,
        deliveryFee: document.getElementById('deliveryFee').value,
        image: document.getElementById('image').value
    };
    
    restaurants.unshift(newRestaurant); // Add to top of list
    renderGrid();
    
    addForm.reset();
    modal.style.display = 'none';
});

function init() {
    renderGrid();
}

document.addEventListener("DOMContentLoaded", init);
