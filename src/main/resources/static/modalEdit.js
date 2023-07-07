function getModalEdit(id) {
    let user = document.getElementById("row" + id).children;

    let enabled = user.namedItem("enabled").innerHTML;
    let valid_enabled;
    if (enabled == 'true') {
        valid_enabled =
            `<option value="false">False</option>
             <option value="true" selected>True</option>`
    } else {
        valid_enabled =
            `<option value="false" selected>False</option>
             <option value="true">True</option>`
    }

    let roles = user.namedItem("roles").innerHTML;
    let valid_roles = "";
    if (roles.includes("ADMIN")) {
        valid_roles += "<option value=\"ROLE_ADMIN\" selected>ADMIN</option>"
    } else {
        valid_roles += "<option value=\"ROLE_ADMIN\">ADMIN</option>"
    }
    if (roles.includes("USER")) {
        valid_roles += "<option value=\"ROLE_USER\" selected>USER</option>"
    }
    {
        valid_roles += "<option value=\"ROLE_USER\">USER</option>"
    }

    let modal = document.getElementById("modalWindow");
    modal.innerHTML =
        `<div class="modal fade" 
              id="modalEdit"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Delete user</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container_fluid">
                            <div class="row justify-content-center">
                                <div class="col col-sm-6 text-center">
                                
                                    <label for="updateUserId" class="font-weight-bold">ID</label>
                                    <input type="text" name="id" value="${user.namedItem("id").innerHTML}" class="form-control" id="updateUserId" disabled>
                                    <br>
                                    
                                    <label for="updateUserEmail" class="font-weight-bold">Email</label>
                                    <input type="text" name="email" value="${user.namedItem("email").innerHTML}" class="form-control" id="updateUserEmail">
                                    <br>
                                    
                                    <label for="updateUserFirstName" class="font-weight-bold">First Name</label>
                                    <input type="text" name="first_name" value="${user.namedItem("first_name").innerHTML}" class="form-control" id="updateUserFirstName">
                                    <br>
                                    
                                    <label for="updateUserLastName" class="font-weight-bold">Last Name</label>
                                    <input type="text" name="last_name" value="${user.namedItem("last_name").innerHTML}" class="form-control" id="updateUserLastName">
                                    <br>
                                                                
                                    <label for="updateUserPassword" class="font-weight-bold">Password</label>
                                    <input type="text" name="password" class="form-control" id="updateUserPassword">
                                    <br>
                                                                        
                                    <label for="updateUserBirthday" class="font-weight-bold">Birthday</label>
                                    <input type="date" name="dob" value="${user.namedItem("dob").innerHTML}" class="form-control" id="updateUserBirthday">
                                    <br>
                                    
                                    <label for="updateUserEnabled" class="font-weight-bold">Enabled</label>
                                    <select class="form-control" name="enabled" id="updateUserEnabled">
                                        ${valid_enabled}
                                    </select>
                                    <br>
                                    <label class="font-weight-bold">Role</label>
                                    <select multiple size="2" aria-multiselectable="true" class="form-control" name="role" id="updateUserRoles">
                                        ${valid_roles}
                                    </select>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-info bg-info text-white" data-dismiss="modal" onclick="editUser(${id})">Update</button>
                    </div>
                </div>
            </div>
        </div>`;
    $("#modalEdit").modal();
}