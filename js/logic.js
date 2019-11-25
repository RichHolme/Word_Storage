$( document ).ready(function() {

	// Your web app's Firebase configuration
	var firebaseConfig = {
	
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	let db = firebase.database();

	$(".btn").on("click", function(){
		let val = $("#textarea1").val();

		db.ref().push({
			text: val
		})
		// console.log(val);
	})


})