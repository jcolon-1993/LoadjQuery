// User clicks nav link
$("nav a").on("click", function(e)
{
  // Stop loading new link
  e.preventDefault();

  // Get value of href
  var url = this.href;

  // Clear current indicator
  $("nav a.current").removeClass("current");
  // New current indicator
  $(this).addClass("current");

  // Remove old content
  $("#container").remove();

  // New content
  $("#content").load(url + " #content").hide().fadeIn("slow");
});
