var quote="";
var author="";
var colorPlette=
[
'#FFAAAA',
'#550000',
'#9974AA',
'#280339',
'#FFDEAA',
'#553400',
'#827FB2',
'#0B083B',
'#9ED78F',
'#0F4800',
 '#748BA7',
 '#FFAEAC',
 '#4D0200',
 '#FF4900',
 '#040100',
 '#0E54B4',
 '#B6D4FE',
 '#E5004D',
 '#FFAFCA',
 '#CCF8E6',
 '#004E2F',
 '#FFCCB6',
 '#531E07',
 '#D7A9B4',
 '#42111D'
];
var updateColors=function()
{
  var randomColorIndex=Math.floor(Math.random() * 12);
  var randomColorPair=[colorPlette[2*randomColorIndex],colorPlette[2*randomColorIndex+1]];
  $("#random-quote").css("color",randomColorPair[1]);
  $("#random-quote").css("background-color",randomColorPair[0]).css("border-color",randomColorPair[1]);
};
var updateQuotes=function()
{
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a)
 {
    quote=a[0].content;
    quote=quote.slice(3);
    quote=" "+quote;
    quote = quote.substring(0, quote.length - 5);
    author=a[0].title;
  $("#random-quote").html(
'<p><i class="fa fa-quote-left"></i><strong>'+quote + '</strong><i class="fa fa-quote-right" aria-hidden="true"></i></p><p>&mdash; ' + author + '</p>');
});
};
$('document').ready(function(){
 
  $.ajaxSetup({ cache: false });   
  updateQuotes();
  updateColors();
  $('#new-quote').click(function(){
  updateQuotes();
  updateColors();
  });
  $('#share').click(function(e){
    e.preventDefault();
   window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"'+quote + '", ' + author,"_blank");
  });
});
