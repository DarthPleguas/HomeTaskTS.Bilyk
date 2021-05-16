interface IObj {
	id: number;
	name: string;
}
const myArray: IObj[] = [
	{ id: 0, name: 'Jhon' },
	{ id: 1, name: 'Sara' },
	{ id: 2, name: 'Domnic' },
	{ id: 3, name: 'Bravo' },
];
const updateObjectInArray = <T>(
	array: T[],
	key: string,
	newKeyValue: string
) => {
	return [...array].map((item) => {
		const newObject = { ...item, [newKeyValue]: item[key] };
		delete newObject[key];
		return newObject;
	});
};

console.log(updateObjectInArray<IObj>(myArray, 'name', 'not-name'));
