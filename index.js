module.exports = function chargerFactory(description, amount, chargeMethod){
	if chargeMethod.type == 'Dwolla' {
		//pass info on to the  Dwolla function
	} else if chargeMethod.type == 'Stripe'{
		//pass info on to the Stripe function
	} else if chargeMethod.type == 'test' {
		return payment-method-test(description)
	} else {
		return false
	}
}

var payment-method-test = function(description){
	if description == 'test' {
		string = (Math.random() * 100000).toFixed()
		return false, true, string
	}

}