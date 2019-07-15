var string, result;
			window.onload = function ()
			{
				string = document.getElementById('string');
				result = document.getElementById('result');
				string.value     = "";
				result.innerHTML = "";

			};
	
			function Encode ()
			{
				result.innerHTML = '<h2>Result:</h2> String: ' + string.value + '<br><br>' + 'Encoded: <input type="text" name="encode" id="encode" value="' + window.btoa(string.value) + '"><hr>';
				string.value = "";
				string.focus();
			}
			function Decode ()
			{
				result.innerHTML = '<h2>Result:</h2> Encoded: ' + string.value + '<br><br>' + 'String: <input type="text" name="decode" id="decode" value="' + window.atob(string.value) + '"><hr>';
				 string.value = "";
				string.focus();
			}
