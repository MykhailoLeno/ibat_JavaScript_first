
$(document).ready(function () {
    // Ajax get
    $("#btnGetData").on("click", function () {
        // create a request to receive data from the server through AJAX jQuery
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: "GET",
            success: getData,
            error: errorData
        });

        // a function that is called to enter the data received from the server in the paragraph with the id "result"
        function getData(data) {
            $("#result").html(
                `<h3>${data.title}</h3>
                <p>${data.body}</p>`
            );
        }

        // function that is called when an error occurs
        function errorData(error) {
            console.error("Error:", error);
        }
    });

    // Ajax post
    $("#form").submit(function (event) {
        event.preventDefault();

        // create a variable and write in it the data from the form
        const data = {
            title: $("#formTitle").val(),
            body: $("#formBody").val()
        };

        // create a request to send data to the server via AJAX jQuery
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: "POST",
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8',
            success: postData,
            error: errorPostData
        });

        // a function that records the data received from the server in a paragraph with the id="resultPost"
        function postData(data) {
            $("#resultPost").html(
                `<h2>Post created</h2>
                <p>Post ID: ${data.id}</p>
                <p>Title: ${data.title}</p>
                <p>Text: ${data.body}</p>`
            );
        }

        // function that is called when an error occurs
        function errorPostData(error) {
            console.error("Error: ", error);
        }
    });

    // Ajax JSON. Execution of a get request for automatically waiting for data in the JSON format
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
