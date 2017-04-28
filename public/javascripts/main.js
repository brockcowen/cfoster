// Get the modal

			var modal = document.getElementById('myModal');
			// Get the button that opens the modal
			var btn = document.getElementById("myBtn");
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
			var submitBtn = document.getElementById("subBtn")
			var close = document.getElementsByClassName("closebtn");
			// When the user clicks on the button, open the modal
			var frmStatusDiv = document.getElementById('statusDiv');
			var nameInput = document.getElementById('name')
			var newsletterForm= document.getElementById('newsletterForm')
			var emailInput = document.getElementById('email')
			btn.onclick = function() {
			modal.style.display = "block";
			}

			submitBtn.onclick = function(){
				
				var name = nameInput.value;
				var email= emailInput.value;
				//check and send status
				if (name && email){
					console.log(name+' '+email)
					frmStatusDiv.innerHTML= "<div class='alert success'>"+
  					"<span class='closebtn'>&times;</span>"+  
  					"<strong>Success!</strong> Indicates a successful or positive action."+
					"</div>";
					var close = document.getElementsByClassName("closebtn");
					var i;

					for (i = 0; i < close.length; i++) {
    					close[i].onclick = function(){
       					var div = this.parentElement;
        					div.style.opacity = "0";
        					setTimeout(function(){ div.style.display = "none"; }, 600);
    				}
				}
					nameInput.value="";
					emailInput.value="";
				}else if (name && !email) {
					console.log(name + "  /error no email")
					frmStatusDiv.innerHTML= "<div class='alert warning'>"+
  					"<span class='closebtn'>&times;</span>"+  
  					"<strong>Warning!</strong> Please enter email address"+
					"</div>";
					var close = document.getElementsByClassName("closebtn");
					var i;

					for (i = 0; i < close.length; i++) {
    					close[i].onclick = function(){
       					var div = this.parentElement;
        					div.style.opacity = "0";
        					setTimeout(function(){ div.style.display = "none"; }, 600);
    				}
				}
				}else if (!name && email){
					console.log('/no name  '+ email)
					frmStatusDiv.innerHTML= "<div class='alert warning'>"+
  					"<span class='closebtn'>&times;</span>"+  
  					"<strong>Warning!</strong> Please enter name"+
					"</div>";
					var close = document.getElementsByClassName("closebtn");
					var i;

					for (i = 0; i < close.length; i++) {
    					close[i].onclick = function(){
       					var div = this.parentElement;
        					div.style.opacity = "0";
        					setTimeout(function(){ div.style.display = "none"; }, 600);
    				}
				}
				}
				else {
					console.log("please enter data")
					frmStatusDiv.innerHTML= "<div class='alert'>"+
  					"<span class='closebtn'>&times;</span>"+  
  					"<strong>Failure</strong> Please fill out this form"+
					"</div>";
					var close = document.getElementsByClassName("closebtn");
					var i;

					for (i = 0; i < close.length; i++) {
    					close[i].onclick = function(){
       					var div = this.parentElement;
        					div.style.opacity = "0";
        					setTimeout(function(){ div.style.display = "none"; }, 600);
    				}
				}
				}
			}
			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			modal.style.display = "none";
			}
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			if (event.target == modal) {
			modal.style.display = "none";
			}
			}
				var database = firebase.database().ref('messages');
  res.render('modal');
  var messagesRef = database;
  messagesRef.on('value', function(snapshot){
  	console.log(snapshot.val());
  })
        // Get the parent of <span class="closebtn"> (<div class="alert">)
       

			
			