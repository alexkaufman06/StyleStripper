var removeStyles = function(html) {
  var originalHtml = html;
  var styleText = 'style="';
  var styleCount = (originalHtml.match(/style="/g) || []).length;
  var location = originalHtml.indexOf(styleText);
  var answer = originalHtml.replace(styleText, '');
  console.log(styleCount);
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
