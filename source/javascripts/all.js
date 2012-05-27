//= require jquery
//= require bootstrap
//= require fittext
//= require_tree .

$(".big-title").fitText(.9, { minFontSize: '53px', maxFontSize: '128px' });
$(".sub-title").fitText(2.7, { minFontSize: '20px', maxFontSize: '43px' });
$(".jf-title").fitText(2.7, { minFontSize: '30px', maxFontSize: '43px' });

$(".equal-heights").equalHeights();
$(".equal-heights2").equalHeights();

$(window).resize(function(){
  $(".equal-heights").css("min-height","0").equalHeights();
  $(".equal-heights2").css("min-height","0").equalHeights();
});
