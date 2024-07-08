
$(document).ready(function () {
    // Ajax get
    $("#btnGetData").on("click", function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: "GET",
            success: getData,
            error: errorData
        });

        function getData(data) {
            $("#result").html(
                `<h3>${data.title}</h3>
                <p>${data.body}</p>`
            );
        }

        function errorData(error) {
            console.error("Error:", error);
        }
    });

    // Ajax post
    $("#form").submit(function (event) {
        event.preventDefault();

        const data = {
            title: $("#formTitle").val(),
            body: $("#formBody").val()
        };

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: "POST",
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8',
            success: postData,
            error: errorPostData
        });

        console.log(data);

        function postData(data) {
            $("#resultPost").html(
                `<h2>Post created</h2>
                <p>Post ID: ${data.id}</p>
                <p>Title: ${data.title}</p>
                <p>Text: ${data.body}</p>`
            );
        }

        function errorPostData(error) {
            console.error("Error: ", error);
        }
    });

    // Ajax JSON  
    $("#getJSONBtn").on("click", function () {
        $.getJSON("https://jsonplaceholder.typicode.com/users/1", function (data) {
            $("#resultJSON").html(
                `<h3>${data.name}</h3>
                <p>Email: ${data.email}</p>
                <p>Phone number: ${data.phone}</p>
                <p>Website: ${data.website}</p>`
            );
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Error", textStatus, errorThrown);
        });
    });
});
