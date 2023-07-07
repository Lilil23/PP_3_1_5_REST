package ru.web.service;


import ru.web.model.User;

import java.util.List;


public interface UserService {
    List<User> getAllUsers();

    User getUserById(Long id);

    Object getUserByEmail(String email);

    void deleteUser(Long id);

    void addNewUser(User user);

    void updateUser(User user);

    void addRoleToUser(String email, String nameRole);
}
