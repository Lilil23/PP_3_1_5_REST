function editUser(id) {
    let roles = window.updateUserRoles;
    let arrayRoles = [];
    let j = 0;
    for (let i = 0; i < roles.length; i++) {
        if (roles.options[i].selected == true) {
            let ob = {nameRole: roles.options[i].value};
            arrayRoles[j++] = ob;
        }
    }

    fetch("http://localhost:8080/edit", {
        method: "PUT",
        body: JSON.stringify({
            id: window.updateUserId.value,
            email: window.updateUserEmail.value,
            first_name: window.updateUserFirstName.value,
            last_name: window.updateUserLastName.value,
            dob: window.updateUserBirthday.value,
            password: window.updateUserPassword.value,
            enabled: window.updateUserEnabled.value,
            roles: arrayRoles
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json()).then(status => {
        if (status == 'OK') {
            let valid_roles = "";
            arrayRoles.forEach(role => valid_roles += role.nameRole.substr(5) + ' ');

            //Изменение информации в таблице всех юзеров
            $('#row' + id).replaceWith(`<tr id= ${"row" + id} >
                <td id="id">${id}</td>
                <td id="email">${window.updateUserEmail.value}</td>
                <td id="first_name">${window.updateUserFirstName.value}</td>
                <td id="last_name">${window.updateUserLastName.value}</td>
                <td id="dob">${window.updateUserBirthday.value}</td>
                <td id="enabled">${window.updateUserEnabled.value}</td>
                <td id="roles">${valid_roles}</td>
                <td><button type="button" class="btn btn-outline-info bg-info text-white" onclick="getModalEdit(${id})">Edit</button></td>
                <td><button type="button" class="btn btn-outline-danger bg-danger text-white" onclick="getModalDelete(${id})">Delete</button></td>
                </tr>`);

            //Изменение информации в  таблице юзера
            if (document.getElementById("rowUserInfo").children.namedItem("id").innerHTML == id) {
                if (!valid_roles.includes("ADMIN")) {
                    window.location.reload();
                } else {
                    $('#rowUserInfo').replaceWith(`<tr id= "rowUserInfo" >
                    <td id="id"> ${id} </td>
                    <td id="email">${window.updateUserEmail.value}</td>
                    <td id="first_name">${window.updateUserFirstName.value}</td>
                    <td id="last_name">${window.updateUserLastName.value}</td>
                    <td id="dob">${window.updateUserBirthday.value}</td>
                    <td id="enabled">${window.updateUserEnabled.value}</td>
                    <td id="roles">${valid_roles}</td>
                    </tr>`);
                    document.getElementById("navUserEmail").innerHTML = window.updateUserEmail.value;
                    document.getElementById("navUserRoles").innerHTML = valid_roles;
                }
            }
        }

    });
}