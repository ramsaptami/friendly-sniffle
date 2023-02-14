export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//storeValue('id', 123)
		return (appsmith.store.id ?? '')
	},
	clearStore: async () => { //function to clear store values
		Object.keys(appsmith.store).forEach((eachKey) => {
			storeValue(eachKey, 'undefined')	
			//return showAlert(eachKey)
		})
	}
}