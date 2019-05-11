 
$(function() {
    $(".change-devoured").on("click", function(event) {
      console.log("change-devour-on-click");
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");
  
      var newDevouredState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
           
          location.reload();
        }
      );
    });
  
    $("#submit").on("submit", function(event) {
      
      event.preventDefault();
      console.log("change-form-on-submit");
      var newBurger = {
        name: $("#bu").val().trim(),
        devoured: 0 
      };
   
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
           
          location.reload();
        }
      );
    });
  
     
  });
  