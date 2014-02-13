module.exports = function chargerFactory(description, amount, chargeMethod){
	if chargeMethod.type == 'Dwolla' {
		//pass info on to the  Dwolla function
	} else if chargeMethod.type == 'Stripe'{
		//pass info on to the Stripe function
	} else if chargeMethod.type == 'test' {
		//pass info on to the mock charge function
	} else {
		return false
	}
}

var payment-method-test = function(){

}