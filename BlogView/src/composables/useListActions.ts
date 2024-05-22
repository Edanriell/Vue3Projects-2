export const useListActions = (items: any) => {
	const addItem = (item: any) => {
		items.value.push(item);
	};
	const deleteItem = (id: any) => {
		const index = items.value.findIndex((item: any) => item.id === id);

		index >= 0 && items.value.splice(index, 1);
	};

	return {
		addItem,
		deleteItem
	};
};
