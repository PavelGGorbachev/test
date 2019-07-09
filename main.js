$(function() {
    $( "#slider-range-max" ).slider({
      // range: "max",
      min: 1,
      max: 3,
      value: 2,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  });
