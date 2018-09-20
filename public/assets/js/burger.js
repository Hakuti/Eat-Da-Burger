$(document).ready(function() {
  $(document).on("click", ".buttons", function() {
    console.log($(this).attr("data"));
    var id = $(this).attr("data");

    var data = {
      devoured: true
    };

    // $.post("/devouredBurger", data, function(data) {
    //   console.log(data);

    // });

    $.ajax("/devouredBurger/" + id, {
      type: "PUT",
      data: data
    }).then(function() {
      //   console.log("changed sleep to", newSleep);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
