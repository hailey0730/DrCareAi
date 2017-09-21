// $(document).ready(function(){
//   var originalwidth = $('.right').width();
//   var originalHeight = $('.right').height();


// // IIFE to ensure safe use of $
// (function( $ ) {

//   // Create plugin
//   $.fn.tooltips = function(el) {

//     var $tooltip,
//     $body = $('body'),
//     $el;

//     // Ensure chaining works
//     return this.each(function(i, el) {

//       $el = $(el).attr("data-tooltip", i);  //area

//       // Make DIV and append to page 
//       var $tooltip = $('<div class="tooltip" data-tooltip="' + i + '">' + $el.attr('title') + '<div class="arrow"></div></div>').appendTo("#mapster_wrap_0");

//       // Position right away, so first appearance is smooth
//       // var linkPosition = $el.position();
//       var coordPosition = $el.attr("alt");
      

//       var positionArray = coordPosition.split(',');
//       console.log(positionArray[1]);
//       // var linkPosition = Math.max.apply(Math,positionArray);

//       var imgPos = $('.right').offset();
//       var imgWidth = $('.right').width();
//       var imgHeight = $('.right').height();
//       $tooltip.css({
//         left:  positionArray[0], 
//         top:  positionArray[1]
//       });

//       $el
//       // Get rid of yellow box popup
//       .removeAttr("title")

//       // always show

//       console.log("tooltip active");
//       $el = $(this);

//       $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']');

//         // Reposition tooltip, in case of page movement e.g. screen resize                        
//         var linkPosition = $el.position();

//         $tooltip.css({
//           'position':'absolute',
//           'left': positionArray[0], 
//           'top': positionArray[1]
//         });

//         // Adding class handles animation through CSS
//         $tooltip.addClass("active");

//       });


//   }

// })(jQuery);
// var cssList = [];

// // $(window).on( 'resize', function () {
// //   console.log("tooltip resize");
// //   var imgPos = $('.right').offset();
// //   var imgWidth = $('.right').width();
// //   var imgHeight = $('.right').height();
// //   if($(window).width() > 1208){
// //     console.log("remove tooltip");
// //     $('.right').attr("src", "images/map-hongkong.png");
// //     $('.tooltip').removeClass("active");
// //   }else{
// //     $('area').each(function(i,obj){
// //       var coordPosition = $(this).attr("coords");

// //       var positionArray = coordPosition.split(',').map(function(item){
// //         return parseInt(item);
// //       })
// //       var css = {
// //         top: positionArray[1] +imgHeight,
// //         left: positionArray[0] + imgWidth 
// //       };
// //       cssList+=css;

// //       console.log(css);
// //     });

// //     $('.tooltip').each(function(i,obj){
// //       $(this).css(cssList[i]);
// //     })
// //   }


// // }).resize();
// });