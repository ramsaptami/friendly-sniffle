export default {
	myVar1: [],
	myVar2: {},
	myFun2: async () => {
		return JSObject1.data()
			.then(() => {
			console.warn('Attempting to find new dog pics')
			return Api1.run()
				.then(() => {
				console.log(Api1.data)
				return 1;
			})
		})
		console.error('false error')
	},
	new: () => {
		return JSObject1.data()
	}
}