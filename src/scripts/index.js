import '../styles/reset.css';
import '../styles/main.css';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';
import { about } from './about';

const tabs = [
	{
		tabId: 1,
		tabName: 'Home',
	},
	{
		tabId: 2,
		tabName: 'Menu',
	},
	{
		tabId: 3,
		tabName: 'Contact',
	},
	{
		tabId: 4,
		tabName: 'About',
	},
];

const navDom = document.querySelector('header nav');
const contentDom = document.querySelector('#content');
let currentTabId = 1;

function updatePage() {
	navDom.innerHTML = tabs
		.map(
			(tab) =>
				`<button class="tab ${
					currentTabId === tab.tabId ? 'active' : ''
				}" data-tab-id="${tab.tabId}">${tab.tabName}</button>`
		)
		.join('');

	getPageContent(currentTabId);

	// Tab event listeners
	document.querySelectorAll('header nav button').forEach((btn) => {
		btn.addEventListener('click', (event) => {
			const tabId = +event.target.getAttribute('data-tab-id');
			if (tabId) {
				currentTabId = tabId;
				updatePage();
			}
		});
	});
}

function getPageContent(tabId) {
	switch (tabId) {
		case 1:
			contentDom.innerHTML = home();
			break;
		case 2:
			contentDom.innerHTML = menu();
			break;
		case 3:
			contentDom.innerHTML = contact();
			break;
		case 4:
			contentDom.innerHTML = about();
			break;
		default:
			break;
	}
}

updatePage();
