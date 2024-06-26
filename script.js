  
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal
  document.querySelector('.click-button').addEventListener('click', function() {
      modal.style.display = "block";
  });
  
  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', function() {
      modal.style.display = "none";
  });
  
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });  