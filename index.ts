import { api } from './api';
import { IPost } from './interfaces';

const render = (posts: IPost[]) => {
	const ul = document.createElement('div');
	let html = ``;
	posts.forEach((p, index) => {
		html += `<p>#${index + 1}. ${p.title} --- ${p.title}<p/>`;
	});
	ul.innerHTML = html;
	document.body.append(ul);
};

const getData = async () => {
	const response = await api.getPosts();
	render(response.data);
};

getData();
