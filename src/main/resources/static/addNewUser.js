function addNewUser() {

    let roles = window.newUserForm.role;

    let arrayRoles = [];
    let j = 0;
    for (let i = 0; i < roles.length; i++) {
        if (roles.options[i].selected == true) {
            let ob = {nameRole: roles.options[i].value};
            arrayRoles[j++] = ob;
        }
    }

    fetch("http://localhost:8080/addNewUser", {
        method: "POST",
        body: JSON.stringify({
            email: window.newUserForm.email.value,
            first_name: window.newUserForm.first_name.value,
            last_name: window.newUserForm.last_name.value,
            dob: window.newUserForm.dob.value,
            password: window.newUserForm.password.value,
            enabled: window.newUserForm.enabled.value,
            roles: arrayRoles
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(user => {
            let roles = "";
            user.roles.forEach(role => roles += role.nameRole.substr(5) + ' ')
            $('#tableAllUsers tr:last').after(`<tr id = ${"row" + user.id} >
                        <td id="id">${user.id}</td>
                        <td id="email">${user.email}</td>
                        <td id="first_name">${user.first_name}</td>
                        <td id="last_name">${user.last_name}</td>
                        <td id="dob">${user.dob}</td>
                        <td id="enabled">${user.enabled}</td>
                        <td id="roles">${roles}</td>
                        <td><button type="button" class="btn btn-outline-info bg-info text-white" onclick="getModalEdit(${user.id})">Edit</button></td>
                        <td><button type="button" class="btn btn-outline-danger bg-danger text-white" onclick="getModalDelete(${user.id})">Delete</button></td>
                        </tr>`);

            window.newUserForm.email.value = "";
            window.newUserForm.first_name.value = "";
            window.newUserForm.last_name.value = "";
            window.newUserForm.dob.value = "";
            window.newUserForm.password.value = "";
            window.newUserForm.enabled.value = "";
            document.getElementById("tableAllUsersButton").click();
        }).catch(function (err) {
        alert("Email занят");
    })


}