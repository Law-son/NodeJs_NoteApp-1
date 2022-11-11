 // Get the modal
 var qrmodal = document.getElementById("myqrModal");

 // Get the button that opens the modal
 var mbtn = document.getElementById("modal-btn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 
 mbtn.onclick = function() {
    qrmodal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    qrmodal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if(event.target == qrmodal){
      qrmodal.style.display = "none";
    }
  }

  $(document).ready(function(){

    $('form').on('submit', function(){
  
        var title = $('form #title');
        var body = $('form #body');
        var note = {title: title.val(), body: body.val()};
  
        $.ajax({
          type: 'POST',
          url: '/note',
          data: note,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
    // $('.btn2').on('click', function(){
    //     var title = $('.note-title').text();
    //     var body = $('.note-body').text();
    //     $.ajax({
    //       type: 'GET',
    //       url: '/note/?title=' + title + "&body=" + body,
    //       success: function(data){
    //         //do something with the data via front-end framework
    //         location.reload();
    //       },error: function(jqXhr, textStatus, errorMessage ){
    //         console.log("Status: " + textStatus + "Error message: " + errorMessage);
    //       }
    //     });
    // });
  
  });
  