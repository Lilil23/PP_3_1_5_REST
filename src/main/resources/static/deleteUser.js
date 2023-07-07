function deleteUser(id) {
    fetch("http://localhost:8080/deleteUser/" + id, {
        method: "DELETE",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json()).then(status => {
        if (status == 'OK') {
            if (document.getElementById("rowUserInfo").children.namedItem("id").innerHTML == id) {
                document.getElementById("logout").click();
            }

            $('#row' + id).remove();
        }
    });
}