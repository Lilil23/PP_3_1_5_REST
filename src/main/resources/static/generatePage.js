getAuthorizedUserInfo();

function getAuthorizedUserInfo() {
    fetch("http://localhost:8080/getAuthorizedUserInfo").then(response => response.json()).then(user => {
        //Заполнение navbar
        let email = user.email;
        document.getElementById("navUserEmail").innerHTML = email;
        let roles = "";
        user.roles.forEach(role => roles += role.nameRole.substr(5) + ' ');
        document.getElementById("navUserRoles").innerHTML = roles;

        //Генерирование рабочей области
        if (roles.includes("ADMIN")) {
            let generateWorkSpace =
                `<div class="row vh-100">
            <!--    Левое меню-->
                    <div  class="col-2 px-0">
                        <ul id="tab_list" class="nav nav-pills flex-column px-0 py-2">
                            <li class="nav-item">
                                <a id="admin_tab" class="nav-link pl-3 active" data-toggle="tab" href="#admin_panel">Admin</a>
                            </li>
                            <li class="nav-item">
                                <a id="user_tab" class="nav-link pl-3" data-toggle="tab" href="#user_panel">User</a>
                            </li>
                        </ul>
                    </div>
            
            <!--    Правый блок-->
                    <div class="tab-content col-10 bg-light text-left">
            
            <!--        Admin panel-->
                        <div id="admin_panel" class="tab-pane fade show active">
                            <h1 class="m-3">Admin panel</h1>
            <!--            Навигационные кнопки админ панели-->
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a id="tableAllUsersButton" class="nav-link active" data-toggle="tab" href="#tableAllUsers">Users table</a>
                                </li>
                                <li class="nav-item" href="#newUser">
                                    <a class="nav-link" data-toggle="tab" href="#newUser">New User</a>
                                </li>
                            </ul>
            <!--            Блок с содержимым кнопок-->
                            <div class="tab-content border rounded">
            <!--                Блок таблицы всех пользователей-->
                                <div id="tableAllUsers" class="tab-pane fade show active">
                                <div class="border-bottom">
                                    <h3 style="text-align: left; margin: 1%">All users</h3>
                                </div>
                                <div style="margin: 1%">
                                    <table id="tableAllUsers" class="table bg-white table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Email</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Birthday</th>
                                                <th>Enabled</th>
                                                <th>Role</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody id="admin_info"></tbody>
                                    </table>
                                </div>
                            </div>
                            
            <!--                Блок добавления нового пользователя-->
                                <div id="newUser" class="tab-pane fade">
                                    <div class="bg-light border-bottom">
                                        <h3 style="text-align: left; margin: 1%">Add new user</h3>
                                    </div>
                                    <div class="bg-white">
                                        <form id="newUserForm">
                                            <div class="container_fluid">
                                                <div class="row justify-content-center">
                                                    <div class="col col-sm-5 text-center">
            
                                                        <br>
                                                        <label for="email" class="font-weight-bold">Email</label>
                                                        <input type="email" class="form-control" id="email">
                                                        <br>
            
                                                        <label for="first_name" class="font-weight-bold">First name</label>
                                                        <input type="text"
                                                               class="form-control"
                                                               id="first_name">
                                                        <br>
            
                                                        <label for="last_name" class="font-weight-bold">Last name</label>
                                                        <input type="text"
                                                               class="form-control"
                                                               id="last_name">
                                                        <br>
            
                                                        <label for="dob" class="font-weight-bold">Birthday</label>
                                                        <input type="date"
                                                               class="form-control"
                                                               id="dob">
                                                        <br>
            
                                                        <label for="password" class="font-weight-bold">Password</label>
                                                        <input type="text"
                                                               class="form-control"
                                                               id="password">
                                                        <br>
            
                                                        <label for="enabled" class="font-weight-bold">Enabled</label>
                                                        <select class="form-control" id="enabled">
                                                            <option value="false">False</option>
                                                            <option value="true">True</option>
                                                        </select>
                                                        <br>
            
                                                        <label class="font-weight-bold">Role</label>
                                                        <select multiple
                                                                size="2"
                                                                aria-multiselectable="true"
                                                                class="form-control"
                                                                id="role">
                                                            <option value="ROLE_USER" selected>USER</option>
                                                            <option value="ROLE_ADMIN">ADMIN</option>
                                                        </select>
                                                        <br>
            
                                                        <p class="btn btn-outline-success bg-success text-white"
                                                                onclick="addNewUser()">
                                                            Add new user
                                                        </p>
                                                        <br><br>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
            
            <!--        User panel-->
                        <div id="user_panel" class="tab-pane fade">
                            <h1 class="m-3">User information-page</h1>
                            <div class="tab-pane fade show active border rounded">
                                <div class="border-bottom">
                                    <h3 style="text-align: left; margin: 1%">About user</h3>
                                </div>
                                <div style="margin: 1%">
                                    <table class="table bg-white table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Email</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Birthday</th>
                                                <th>Enabled</th>
                                                <th>Role</th>
                                            </tr>
                                        </thead>
                                        <tbody id="user_info"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>`;
            document.getElementById("generateWorkSpace").innerHTML = generateWorkSpace;
        } else {
            let generateWorkSpace =
                `<div class="row vh-100">
            <!--    Левое меню-->
                    <div  class="col-2 px-0">
                        <ul id="tab_list" class="nav nav-pills flex-column px-0 py-2">
                            <li class="nav-item">
                                <a id="user_tab" class="nav-link pl-3 active" data-toggle="tab" href="#user_panel">User</a>
                            </li>
                        </ul>
                    </div>
            
            <!--    Правый блок-->
                    <div class="tab-content col-10 bg-light text-left">
            
            <!--        User panel-->
                        <div id="user_panel" class="tab-pane fade show active">
                            <h1 class="m-3">User information-page</h1>
                            <div class="tab-pane fade show active border rounded">
                                <div class="border-bottom">
                                    <h3 style="text-align: left; margin: 1%">About user</h3>
                                </div>
                                <div style="margin: 1%">
                                    <table class="table bg-white table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Email</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Birthday</th>
                                                <th>Enabled</th>
                                                <th>Role</th>
                                            </tr>
                                        </thead>
                                        <tbody id="user_info"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>`;
            document.getElementById("generateWorkSpace").innerHTML = generateWorkSpace;
        }

        //Заполнение user_info
        let tableBodyUserInfo = document.getElementById("user_info");
        tableBodyUserInfo.innerHTML = "";
        let row = tableBodyUserInfo.insertRow();
        row.setAttribute("id", "rowUserInfo");
        let cell0 = row.insertCell();
        cell0.setAttribute("id", "id");
        cell0.innerHTML = user.id;
        let cell1 = row.insertCell();
        cell1.setAttribute("id", "email");
        cell1.innerHTML = user.email;
        let cell2 = row.insertCell();
        cell2.setAttribute("id", "first_name");
        cell2.innerHTML = user.first_name;
        let cell3 = row.insertCell();
        cell3.setAttribute("id", "last_name");
        cell3.innerHTML = user.last_name;
        let cell4 = row.insertCell();
        cell4.setAttribute("id", "dob");
        cell4.innerHTML = user.dob;
        let cell5 = row.insertCell();
        cell5.setAttribute("id", "enabled");
        cell5.innerHTML = user.enabled;
        let cell6 = row.insertCell();
        cell6.setAttribute("id", "roles");
        cell6.innerHTML = roles;

        //заполнение таблицы для админа
        if (roles.includes("ADMIN")) {
            let tableBodyAdminInfo = document.getElementById("admin_info");
            tableBodyAdminInfo.innerHTML = "";

            fetch("http://localhost:8080/getAllUsersInfo").then(response => response.json()).then(users => users.forEach(user => {
                    let row = tableBodyAdminInfo.insertRow();
                    row.setAttribute("id", "row" + user.id);
                    let cell0 = row.insertCell();
                    cell0.setAttribute("id", "id");
                    cell0.innerHTML = user.id;
                    let cell1 = row.insertCell();
                    cell1.setAttribute("id", "email");
                    cell1.innerHTML = user.email;
                    let cell2 = row.insertCell();
                    cell2.setAttribute("id", "first_name");
                    cell2.innerHTML = user.first_name;
                    let cell3 = row.insertCell();
                    cell3.setAttribute("id", "last_name");
                    cell3.innerHTML = user.last_name;
                    let cell4 = row.insertCell();
                    cell4.setAttribute("id", "dob");
                    cell4.innerHTML = user.dob;
                    let cell5 = row.insertCell();
                    cell5.setAttribute("id", "enabled");
                    cell5.innerHTML = user.enabled;
                    let cell6 = row.insertCell();
                    cell6.setAttribute("id", "roles");
                    let roles = "";
                    user.roles.forEach(role => roles += role.nameRole.substr(5) + ' ');
                    cell6.innerHTML = roles;
                    let cell7 = row.insertCell(7);
                    cell7.innerHTML = `<button type="button" class="btn btn-outline-info bg-info text-white" onclick="getModalEdit(${user.id})">Edit</button>`;
                    let cell8 = row.insertCell(8);
                    cell8.innerHTML = `<button type="button" class="btn btn-outline-danger bg-danger text-white" onclick="getModalDelete(${user.id})">Delete</button>`;
                })
            );
        }
    });
}