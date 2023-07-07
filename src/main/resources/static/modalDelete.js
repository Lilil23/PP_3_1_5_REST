function getModalDelete(id) {
    let user = document.getElementById("row" + id).children;

    let roles = user.namedItem("roles").innerHTML;
    let valid_roles = "";
    let valid_size = 0;
    if (roles.includes("ADMIN")) {
        valid_roles += "<option>ADMIN</option>";
        valid_size++;
    }
    if (roles.includes("USER")) {
        valid_roles += "<option>USER</option>";
        valid_size++;
    }

    let modal = document.getElementById("modalWindow");
    modal.innerHTML =
        `<div class="modal fade"
              id="modalDelete"
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
                                
                                    <label for="userId" class="font-weight-bold">ID</label>
                                    <input type="text" value="${user.namedItem("id").innerHTML}" class="form-control" id="userId" disabled>
                                    <br>
                                    
                                    <label for="userEmail" class="font-weight-bold">Email</label>
                                    <input type="text" value="${user.namedItem("email").innerHTML}" class="form-control" id="userEmail" disabled>
                                    <br>
                                    
                                    <label for="userFirstName" class="font-weight-bold">First Name</label>
                                    <input type="text" value="${user.namedItem("first_name").innerHTML}" class="form-control" id="userFirstName" disabled>
                                    <br>
                                    
                                    <label for="userLastName" class="font-weight-bold">Last Name</label>
                                    <input type="text" value="${user.namedItem("last_name").innerHTML}" class="form-control" id="userLastName" disabled>
                                    <br>
                                    
                                    <label for="userBirthday" class="font-weight-bold">Birthday</label>
                                    <input type="text" value="${user.namedItem("dob").innerHTML}" class="form-control" id="userBirthday" disabled>
                                    <br>
                                    
                                    <label for="userEnabled" class="font-weight-bold">Enabled</label>
                                    <input type="text" value="${user.namedItem("enabled").innerHTML}" class="form-control" id="userEnabled" disabled>
                                    <br>
                                    
                                    <label for="userRole" class="font-weight-bold">Role</label>
                                    <select class="form-control" multiple size="${valid_size}" id="userRole" disabled>
                                        ${valid_roles}
                                    </select>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-danger bg-danger text-white" data-dismiss="modal" onclick="deleteUser(${id})">Delete</button>
                    </div>
                </div>
            </div>
        </div>`;
    $("#modalDelete").modal();
}