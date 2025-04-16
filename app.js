// Part 1.1

$(function () {
    console.log("Let's get ready to party with jQuery!");

    // Part 1.2

    $("article img").addClass("image-center");
    
    // Part 1.3

    $("article p").last().remove();

    // Part 1.4

    $("h1").css("font-size", Math.floor(Math.random() * 100) + "px");

    // Part 1.5

    $("ol").append("<li>That's a cute puppy</li>");

    // Part 1.6

    $("aside").empty().append("<p>Sorry, we have removed the list.</p>");

    // Part 1.7

    $(".form-control").on("keyup blur change", function () {
        let red = $(".form-control").eq(0).val();
        let blue = $(".form-control").eq(1).val();
        let green = $(".form-control").eq(2).val();
        $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
    });

    // Part 1.8

    $("img").on("click", function () {
        $(this).remove();
    });

});