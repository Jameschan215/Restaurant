import '../styles/home.css';

export function home() {
	const title = `Welcome to Odin's Dessert`;
	const brandDesc = `
		Indulge in a realm where sweetness reigns supreme. At Odin's Dessert, 
		we craft heavenly treats inspired by myth and magic. From divine 
		pastries to legendary cakes, every bite tells a story. Step into our 
		world and discover desserts that are truly fit for the gods.
	`;

	const homePage = `
		<div class="home-wrapper">
			<div class="home">
				<h1>${title}</h1>

				<p>${brandDesc}</p>

				<button class="btn">Order</button>
			</div>
		</div>
	`;

	return homePage;
}
