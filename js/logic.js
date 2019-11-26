$( document ).ready(function() {

	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyB_Ehzjw5lNNM36hJIwUWHowE2vxK-v7FA",
		authDomain: "word-storage-3fdee.firebaseapp.com",
		databaseURL: "https://word-storage-3fdee.firebaseio.com",
		projectId: "word-storage-3fdee",
		storageBucket: "word-storage-3fdee.appspot.com",
		messagingSenderId: "558481923751",
		appId: "1:558481923751:web:70cbec4544bd844b0cc582"
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