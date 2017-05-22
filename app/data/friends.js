  // allows you to edit select-picker (not in use)
  $(document).ready(function(){

  // create an object with the data submited
  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newFriend = {
      name: $("#name").val().trim(),
      photoLink: $("#photoLink").val().trim(),
      q1: $("#q1").val().trim(),
      q2: $("#q2").val().trim(),
      q3: $("#q3").val().trim(),
      q4: $("#q4").val().trim(),
      q5: $("#q5").val().trim(),
      q6: $("#q6").val().trim(),
      q7: $("#q7").val().trim(),
      q8: $("#q8").val().trim(),
      q9: $("#q9").val().trim(),
      q10: $("#q10").val().trim(),
    };

    // Send data to the server
    $.post("/api/survey", newFriend)
    .done(function(data) {
      console.log(data);
      alert("We are calculating your perfect friend match...");
    });
    $("#myForm").reset();


  });
  $.get("/api", function(data) {
        for (var i = 0; i < data.length; i++) {
        var wellSection = $("<div>");
        wellSection.addClass("well");
        wellSection.attr("id", "character-well-" + i);
        $("#well-section").append(wellSection);

        $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
        $("#character-well-" + i).append("<img>: " + data[i].photoLink);
        // $("#character-well-" + i).append("<h3>Age: " + data[i].age + "</h4>");
        // $("#character-well-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
      }
    });

  
});  
