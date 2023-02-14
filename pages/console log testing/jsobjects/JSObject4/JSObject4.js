export default {
	myFun2: async () => {
	function getQuote() {
  let quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit laborum.";
  return quote;
}

async function main() {
  try {
    var quote = await getQuote();
    console.log(quote);
  } catch (error) {
    console.error(error);
  }
}
		main()
	},
	
	secondFunction: function () {
		this.myFun2
	}
}