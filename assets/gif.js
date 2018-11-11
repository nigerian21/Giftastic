$(document).ready(function () {
    (function () {
        $("#button").on("click", function () {
            console.log("test")
            var rapper = $(this).data('name');
            //This gets the images from giphy
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + rapper + "&api_key=706366aca6d647718a5c439725cd93a8&limit=10";
            $.ajax({
                url: queryURL,
                method: "GET"
            })
        })
    })
                //animates giphys and freezes them
                (function (response) {
                    console.log(response)
                    var results = response.data;
                    for (var i = 0; i < results.length; i++) {
                        var rapdiv = $("<div/>");
                        var p = $("<p/>");
                        p.text(results[i].rating);
                        var rapperimg = $("<img/>");
                        rapperimg.addClass("anImg");
                        rapperimg.attr('src', results[i].images.fixed_height.url);
                        rapperimg.attr(data-still, results[i].images.fixed_height_still.url);
                        rapperimg.attr(data-animate, results[i].images.fixed_height.url);
                        attr(data-state, still)
                        rapdiv.append(p);
                        rapdiv.append(rapperimg);
                        rapdiv.prependTo($("#gifs"));
                    }}
                )
                })
