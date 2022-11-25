// list of 20 fruits with name and price and id
const fruitsList = [
	{ id: 1, name: "Apples", price: 2.99 },
	{ id: 2, name: "Oranges", price: 3.99 },
	{ id: 3, name: "Pears", price: 1.99 },
	{ id: 4, name: "Grapes", price: 0.99 },
	{ id: 5, name: "Bananas", price: 0.79 },
	{ id: 6, name: "Strawberries", price: 3.99 },
	{ id: 7, name: "Blueberries", price: 2.99 },
	{ id: 8, name: "Raspberries", price: 5.99 },
	{ id: 9, name: "Mangos", price: 4.99 },
	{ id: 10, name: "Pineapple", price: 6.49 },
	{ id: 11, name: "Coconuts", price: 1.99 },
	{ id: 12, name: "Pomegranate", price: 2.49 },
	{ id: 13, name: "Papaya", price: 1.49 },
	{ id: 14, name: "Watermelon", price: 3.49 },
	{ id: 15, name: "Lemon", price: 2.49 },
	{ id: 16, name: "Lime", price: 1.49 },
	{ id: 17, name: "Cherries", price: 5.99 },
	{ id: 18, name: "Kiwi", price: 4.49 },
	{ id: 19, name: "Peach", price: 3.99 },
	{ id: 20, name: "Plum", price: 0.99 },
];

function renderFruits(fruits) {
	const fruitsList = document.querySelector("#fruits-list");
	let productItem = "";
	fruits.forEach((fruit) => {
		productItem += renderRow(fruit, productItem);
	});
	fruitsList.innerHTML = productItem;
}
renderFruits(fruitsList);
function renderRow(fruit) {
	let row = "";
	if (fruit.id % 3 === 1) {
		row += `<tr>`;
	}
	row += `
        <td>
			<div id=${"fruit-" + fruit.id} class="product">
				<button  class="favorite">
					<img src="images/star.svg" alt="favorite">
				</button>
				<h2>${fruit.name}</h2>
				<p>${fruit.price}</p>
				<button>Add to Cart</button>
			</div>
        </td>
		`;
	if (fruit.id % 3 === 0) {
		row += `</tr>`;
	}
	return row;
}
