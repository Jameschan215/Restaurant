import '../styles/menu.css';

export function menu() {
	const menu = [
		{
			title: '“Grate” Apple Crisp',
			price: 20,
			rating: 5.0,
			image:
				'https://www.allrecipes.com/thmb/RIXw4Qf8rqUzDRvwScq_jvEfe5Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8727014_Grate-Apple-Crisp_John-Mitzewich_4x3-696dc975443f40e699ecd784d94fb5d7.jpg',
		},
		{
			title: 'Creamy Peach Tart',
			price: 50,
			rating: 4.3,
			image:
				'https://www.allrecipes.com/thmb/FUqa0eHEyyoAGBmE0uuCvHMKEdc=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8701686_Creamy-No-Bake-Peach-Tart_Kim-Shupe_4x3-ca4e42159fcd415899eb2733848b0b47.jpg',
		},
		{
			title: 'No-Bake Cannoli Pie',
			price: 30,
			rating: 5,
			image:
				'https://www.allrecipes.com/thmb/-nbyry_4H6ZSIJSa82Z7u8QNLqo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8654867-no-bake-cannoli-pie-ddmfs-hero-4x3-42158-be55b284296444159567689247be6267.jpg',
		},
		{
			title: 'Cranberry-Orange Tart',
			price: 26,
			rating: 4.5,
			image:
				'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7405641.jpg&q=60&c=sc&poi=auto&orient=true&h=512',
		},
		{
			title: 'Eggnog Pie',
			price: 15,
			rating: 4.2,
			image:
				'https://www.allrecipes.com/thmb/IGeKz7rX_pntpkTdEysqgBRQ9eo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7459130_Eggnog-Pie-4x3-f8d31e4a1e644435bf4abbcb9b17d4fc.jpg',
		},
		{
			title: 'Dirty Soda Cookies',
			price: 19.99,
			rating: 0,
			image:
				'https://www.allrecipes.com/thmb/uObZ-Ormn6NQepBvXpC6IIDiCVk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-nicolesdirtysodacookie-VAT-4x3-52556599e9c44578b70b19914a953a3f.jpg',
		},
		{
			title: 'Almond Rum Cake',
			price: 24.99,
			rating: 5.0,
			image:
				'https://www.allrecipes.com/thmb/C7z3uum46-BAzibBcRYOCqBXDUQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8733619_French-Almond-Rum-Cake_Kim-Shupe_4x3-f400b73500314ae6a9e11f6eacba9e51.jpg',
		},
		{
			title: 'Pumpkin Tiramisu Cake',
			price: 30,
			rating: 5.0,
			image:
				'https://www.allrecipes.com/thmb/IUAUxMVoNiFlUIA70EmW_6PD3xQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8729937_Pumpkin-Tiramisu-Bundt-Cake_Kim-Shupe_4x3-9dfac258987849fbb31a56cd368547fc.jpg',
		},
		{
			title: 'Bloomin’ Apples',
			price: 23,
			rating: 0,
			image:
				'https://www.allrecipes.com/thmb/9lbIrk3WiKIPMlBNZg4J3ki5flg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8703606-bloomin-apple-DDMFS-4x3-step-08-fb46926815b64ada853bea11ec6282ff.jpg',
		},
		{
			title: 'Pecan Pie Cake',
			price: 24,
			rating: 3,
			image:
				'https://www.allrecipes.com/thmb/RbgYXpddsRFFf6jSoo17b-F32mc=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8734473kimshupe_pecanupsidedowncake_4x3-89db5ed1fb5f4dc9b2f74db0d6596605.jpg',
		},
	];

	const menuDom = menu
		.map(
			(item) =>
				`
		<div class="menu-item">
			<div class="item-photo">
				<img src="${item.image}" alt="${item.title}">
			</div>
			<div class="item-desc">
				<h2 class="item-title">${item.title}</h2>
				<p class="item-price">Price: ${item.price.toFixed(2)}</p>
				<p class="item-rating">Rating: ${item.rating.toFixed(1)}</p>
			</div>
		</div>
		`
		)
		.join('');

	return `
		<div class="menu-wrapper">
			<h1>Our menu</h1>
			<div class="menu">${menuDom}</div>
		</div>
	`;
}
