var x = "variable contents";
console.log(x);

// var myFavColour = prompt("What is your favourite colour?");
// alert("your favourite colour is " + myFavColour)

var myArray =  new Array('test', 'test2'); 
console.log(myArray);

loadJSON(function(response) {
	// Parse JSON string into object
	var actual_JSON = JSON.parse(response);
});

function loadJSON(callback) {   

	var xobj = new XMLHttpRequest();
	    xobj.overrideMimeType("application/json");
	xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function () {
	      if (xobj.readyState == 4 && xobj.status == "200") {
	        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
	        callback(xobj.responseText);
	      }
	};
	xobj.send(null);  
}
