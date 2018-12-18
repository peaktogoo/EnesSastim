$("#form").on("submit", function(e) {
  e.preventDefault();
});

function process() {
	init($('#form').serializeArray());

    // Check if empty of not
    if (amount  == '') {
        code = ">> All values are required to generate Paypal link.";
    }
    else {
		code = code.replace('{{paypal_code}}', 'https://www.paypal.com/cgi-bin/webscr?business=' + 'sastimenes2@gmail.com' + '&cmd=_xclick&currency_code=' + currency + '&amount=' + amount + '&item_name=' + description);
	}
	$('#result').val(code);
}

function init(data) {
	for (var i = 0; i < data.length; i++) {
		window[data[i].name] = data[i].value;
	}
}
