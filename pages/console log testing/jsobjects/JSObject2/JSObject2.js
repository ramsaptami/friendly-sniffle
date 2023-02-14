export default {
	arrayType: ["red", "green", "blue"],
	myFun1: () => {
		console.log(Countries.data[0].cca2)
		console.warn(this.ar)
		console.log(this.arrayType)
		console.log(this.arrayType)
		console.log(this.arrayType)
		console.log('hiii')
	},
	myFun2: async () => {
		return storeValue('animal', 'https://dog-api.kinduff.com/api/facts')
			.then(() => {
			console.warn('Attempting to find new dog pics')
			return Api1.run()
				.then(() => {
				console.log(Api1.data)
				return 1;
			})
		})
		console.log('false error')
	},
	IntervalCheck: () => {
		setInterval(() => {
			return storeValue('name', appsmith.user.name)
				.then(() => {
				return Api1.run()
					.then(() => {
					console.log('Api has been executed')
					showAlert('testConsole')
					console.log('from user obj ',appsmith.user.name)
					console.log('from store ', appsmith.store.name)
				})
			})
		}, 1000, 'testConsole')
	},
	clearInsterval: () => {
		clearInterval('testConsole')
		console.warn('Stopping the interval')
	},
	funcKey: function() { 
		console.error('function keyword')
		console.log('hi')
		this.funcType2()
	},
	funcType2: function(){
		console.log("parent");
		return Api1.run(async()=>{
			console.log("child");
			return Countries.run()
				.then(() => {
				console.log('grandchild') 
			return JSObject1.data()
			.catch(() => console.log('great grandchild') ) }) });
	},
	
	thirdFunction: function name(){
const getCustomers = [{data: 'language',
											country: {location: 'india',
															 pincode: '560075'}}]
return getCustomers
    }
}