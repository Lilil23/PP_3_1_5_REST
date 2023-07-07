package ru.web.service;

import ru.web.model.Role;

public interface RoleService {
    void addNewRole(Role nameRole);

    Role findByNameRole(String nameRole);
}

