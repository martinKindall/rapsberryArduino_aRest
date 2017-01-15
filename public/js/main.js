$(document).ready(function(){
	var mainUrl = "/serial";
	var textUrl = "/tft?params=";
	var config = "/api/config";

	// init
	$.get(config, function(response){
		var configData = response.data;
		console.log(configData);

		var onOffLedUrl = "/digital/" + configData.LED + "/";
		var pwmLedUrl = "/analog/" + configData.PWM + "/";

		$('#on').click(function(){
			getRequest(mainUrl+onOffLedUrl+'1');
		});

		$('#off').click(function(){
			getRequest(mainUrl+onOffLedUrl+'0');
		});

		$('#slider').click("touchend", function(){
			getRequest(mainUrl+pwmLedUrl+$(this).val());
		});

		//uncomment following for cellphones
		// $('#slider').bind("touchend", function(){
		// 	getRequest(mainUrl+pwmLedUrl+$(this).val());
		// });

		$('#enviar').click(function(){
			getRequest(mainUrl+textUrl+$("#texto").val());
		});
	});
});

function getRequest(url)
{
	$.get(url, function(response){
		console.log(response);
		$("#console").text(response.message);
	});
}