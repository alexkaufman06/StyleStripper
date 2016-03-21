var removeStyles = function(html) {
  var originalHtml = html;
  var answer ="test";

  return answer;
};

$(document).ready(function() {
  $("form#html-stripper").submit(function(event) {
    var html = $("textarea#html").val();
    var answer = removeStyles(html);

    $(".answer").text(answer);
    $(".input").text(html);
    $("#result").show();

    event.preventDefault();
  });
});
