export default {
	data:()=>{
	return	Api1.data.map(country=>{
		country.ccn3= country.ccn3+1
		return country
	})
	}
}