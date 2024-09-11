//section01

//section3

$('.sec3_card').mouseenter(
  function () {
    $(this).css('background-image', function (_, current) {
      return current.replace('.jpg', '.gif');
    });
  });
$('.sec3_card').mouseleave(
  function () {
    $(this).css('background-image', function (_, current) {
      return current.replace('.gif', '.jpg');
    });
  }
);

//section3 fin