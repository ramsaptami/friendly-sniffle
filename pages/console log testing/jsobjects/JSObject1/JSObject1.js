export default {
	data:()=>{
	return	Countries.data.map(country=>{
		country.ccn3= country.ccn3+1
		return country
	})
	},
	mutate: () => {
		appsmith.store.country = 'India'
		return appsmith.store.country
	},
	mutate1: function () {
		console.log(Countries.data[0].name.common + '1')
		console.log(Countries.data[0].name.common + '1')
		console.log(Countries.data[0].name.common + '1')
	},
}