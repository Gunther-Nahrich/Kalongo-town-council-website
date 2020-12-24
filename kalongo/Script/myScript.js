function addAReview(){
var name= document.getElementById("nameInput").value;
var review = document.getElementById("reviewText").value;
document.getElementById("addedReview").innerHTML= name+": "+review;
}
function day(){
	document.getElementById("time").innerHTML=Date()
	}

function hide(){
		document.getElementById('overflow').style.display='none'
}
	function show(){
	document.getElementById('more').style.display='block'
}
function(){
	document.getElementById('more').style.display='block'
	}