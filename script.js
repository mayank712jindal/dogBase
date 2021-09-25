var breeds;

$("#breed_search").on("input", function (e) {
    var search_str = $(this).val();
    searchBreeds(search_str);
});

function searchBreeds(search_str) {
    var string_length = search_str.length;
    search_str = search_str.toLowerCase();
    for (var i = 0; i < breeds.length; i++) {
        var breed_name_snippet = breeds[i].name
            .substr(0, string_length)
            .toLowerCase();
        if (breed_name_snippet == search_str) {
            getDogByBreed(breeds[i].id);
            return;
        }
    }
}

// Setup the Controls
var $breed_select = $("select.breed_select");
$breed_select.change(function () {
    var id = $(this).children(":selected").attr("id");
    getDogByBreed(id);
});

// Load all the Breeds
function getBreeds() {
    ajax_get("https://api.thedogapi.com/v1/breeds", function (data) {
        populateBreedsSelect(data);
        breeds = data;
    });
}
// Put the breeds in the Select control
function populateBreedsSelect(breeds) {
    $breed_select.empty().append(function () {
        var output = "";
        $.each(breeds, function (key, value) {
            output += '<option id="' + value.id + '">' + value.name + "</option>";
        });
        return output;
    });
}
// triggered when the breed select control changes
function getDogByBreed(breed_id) {
    ajax_get(
        "https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=" +
        breed_id,
        function (data) {
            if (data.length == 0) {
                // if there are no images returned
                clearBreed();
                $("#breed_data_table").append(
                    "<tr><td>Sorry, no Image for that breed yet</td></tr>"
                );
            } else {
                displayBreed(data[0]);
            }
        }
    );
}
// clear the image and table
function clearBreed() {
    $("#breed_image").attr("src", "");
    $("#breed_data_table tr").remove();
}
// display the breed image and data
function displayBreed(image) {
    $("#breed_image").attr("src", image.url);
    $("#breed_data_table tr").remove();

    var breed_data = image.breeds[0];
    $.each(breed_data, function (key, value) {
        if (key == "weight" || key == "height") value = value.metric;
        $("#breed_data_table").append(
            "<tr><td>" + key + "</td><td>" + value + "</td></tr>"
        );
    });
}

function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log("responseText:" + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
getBreeds();
