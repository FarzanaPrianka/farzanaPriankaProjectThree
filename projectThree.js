/**
 >For slideshow section:
    >>each time the page refreshes, (initial HTML)
        >>> set value of slideIndex to 1:  slideIndex = 1;
        >>>call function for parameter 1 : slideShow(1);
        >>>display of all div of class slides become none;
        >>>display of div 1 become block
    >> For pressing previous button 
        >>>slideIndex become: slideIndex = slideIndex - 1;
        >>>call slideShow function for new parameter;

    >> For pressing next button
        >>>slideIndex become: slideIndex = slideIndex + 1;
        >>call slideShow function for new parameter;
 *  >>For pressing the thumbnail images
        >>>slideIndex become: slideIndex = currentIndex;
        >>call slideShow function for new parameter;
 */

$(document).ready(function() {
  //initial landing page

  $(".beginArrow").on("click", function() {
    //$("header").fadeOut("slow", "swing");
    //$(".introduction").fadeIn("slow", "swing");

    $(".begin").text("Take me there");

    //$(".begin").text("Take me there");

    console.log("clicked");
  });

  //Introduction Page----------------------------------------------

  //when mouseover the icon

  let whyChooseUsIcon = $("a.whyChooseUsIcon");
  let destination = ["USA", "Canada", "Thailand", "Nepal"];

  whyChooseUsIcon.each(function(index) {
    $(this).on("mouseover", function() {
      $("p.reasonHeading").text(destination[index]);
    });
    $(this).on("mouseout", function() {
      $("p.reasonHeading").text("");
    });
  });

  //takeMeThere

  $("a.takeMeThere").on("click", function() {
    $("section.introduction").fadeOut("slow", "swing");
    console.log("clicked");
  });

  //display relevant text

  //.......................

  let usa = $("li.usa");
  usa.on("click", function() {
    console.log("clicked usa");
  });

  //Our recent work section-----------------------------------

  let slideIndex = 1;
  let captionText = [
    "Lorem Museum",
    "Apple Inc",
    "Mansion @ Davisville",
    "Chandler's Living Room",
    "Monicas House"
  ];
  slideShow(slideIndex);

  //for changing the slides

  //when the user click previous icon

  $("a.previous").on("click", function() {
    slideIndex = slideIndex - 1;
    slideShow(slideIndex);
  });

  //when the user click next icon

  $("a.next").on("click", function() {
    slideIndex = slideIndex + 1;
    slideShow(slideIndex);
  });

  //when the user click thumbnailImage

  $(".thumbnailImage.one").on("click", function() {
    slideIndex = 1;
    slideShow(slideIndex);
  });

  $(".thumbnailImage.two").on("click", function() {
    slideIndex = 2;
    slideShow(slideIndex);
    console.log("clicked");
  });

  $(".thumbnailImage.three").on("click", function() {
    slideIndex = 3;
    slideShow(slideIndex);
    console.log("clicked");
  });

  $(".thumbnailImage.four").on("click", function() {
    slideIndex = 4;
    slideShow(slideIndex);
    console.log("clicked");
  });

  $(".thumbnailImage.five").on("click", function() {
    slideIndex = 5;
    slideShow(slideIndex);
    console.log("clicked");
  });

  function slideShow(num) {
    //select all "div element" of class "slides" and store it to a variable named "slides"

    let slides = $(".slides");

    //select all "thumbnail image" of class "thumbnailImage" and store it to a variable named "thumbnailImage"

    let thumbnailImage = $(".thumbnailImage");

    //select "caption paragraph" of class "imageCaption" and store it to a variable named "caption"

    let caption = $(".imageCaption");

    //when using previous icon, in case, slideIndex is less than 1, it goes to the last element

    if (num < 1) {
      slideIndex = slides.length;
    }

    //in case, slideIndex is larger than the dom element length, it starts from 0

    if (num > slides.length) {
      slideIndex = 1;
    }

    //loop through the slides element to set the display none for initial page

    slides.each(function() {
      $(this).css("display", "none");
    });

    //display of selected image to block

    slides.each(function(index) {
      if (index == slideIndex - 1) {
        $(this).css("display", "block");
      }
    });

    //thumbnail image style control

    thumbnailImage.each(function() {
      $(this).removeClass("hoverMe");
    });

    thumbnailImage.each(function(index) {
      if (index == slideIndex - 1) {
        $(this).addClass("hoverMe");
      }
    });

    caption.html(captionText[slideIndex - 1]);
  }

  //contact us section....

  $("form").on("submit", function(event) {
    event.preventDefault();

    //store the input in variables
    let userName = $("input.yourName:text").val();
    let userEmail = $("input[name='mail']").val();

    //if there is text
    if (userName !== "" && userEmail !== "") {
      //form disappears
      $(this).css("display", "none");
      //display message pop up
      $(".displayText").text(
        "Thank you " +
          userName +
          " for the subscription.Our brochure is on its way to your email address " +
          userEmail
      );
    } else if (userName == "" || userEmail == "") {
      console.log("please enter required fields");
      $(".requiredFields").text("please enter required fields");
    }
  });

  //clear the feilds
  $("input.yourName:text").val("");
  $("input[name='mail']").val("");
});
