
		function action(param){
			text = document.getElementById('texto');
		
			if(checkString(text) == true){
				var result;
				switch (param){
					case "encrypt":
						result = do_encrypt(text.value);
						returnVal(result, "respuesta");
						break;
					case "decrypt":
						
						result = do_decrypt(text.value);
						
						returnVal(result, "respuesta");
						break;
					case "copy":
						 
						copy("respuesta");
						break;
					default:
						break;
				}
			}
		}

		
		function checkString(text){
			if( /[^a-z\d]/.test(text.value)){
			 	alert("El texto no debe poseer caracteres especiales y debe contener solo minisculas.");
			 	text.focus();
			 	return false;
			 }else{
			 	return true;
			 }
		}

		
		function returnVal(text, id) {
			id = document.getElementById(id);
			id.value = text;
		}

		
		function do_encrypt(text){			
			var newString = "";
			
			for (i=0; i<text.length; i++)
			{
				
				switch (text[i]) {
					case 'a':
						newString = newString + "ai";
						break;
					case 'e':
						newString = newString + "enter";
						break;
					case 'i':
						newString = newString + "imes";
						break;
					case 'o':
						newString = newString + "ober";
						break;
					case 'u':
						newString = newString + "ufat";
						break;
					default:
						newString = newString + text[i]; 				
						break;
				}
			}

			
			return newString;
		}
		
		
		function do_decrypt(text) {
		
			var newString = "";			
			newString = text.replace(/ai/g,"a");
			newString = newString.replace(/enter/g,"e");
			newString = newString.replace(/imes/g,"i");
			newString = newString.replace(/ober/g,"o");
			newString = newString.replace(/ufat/g,"u");

			return newString;
		}

		
		function copy(input) {
  		 
		  var copyText = document.getElementById(input);		  
		  copyText.select();
		  copyText.setSelectionRange(0, 99999); 

		   
		  navigator.clipboard.writeText(copyText.value);

		  
		  alert("Texto copiado correctamente: " + copyText.value);
		}		
