package ru.web.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.web.model.Role;
import ru.web.model.User;
import ru.web.service.RoleService;
import ru.web.service.UserService;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.Month;
import java.util.HashSet;


@Component
public class LoadUser {
    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public LoadUser(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @Transactional
    @PostConstruct
    public void load() {

        roleService.addNewRole(new Role(null, "ROLE_USER"));
        roleService.addNewRole(new Role(null, "ROLE_ADMIN"));

        User admin = new User(null, "lili@email.ru", "lili", "ids", LocalDate.of(2003, Month.JULY, 22), "737", true, new HashSet<>());

        User user = new User(null, "mans@email.ru", "mans", "ids", LocalDate.of(1991, Month.APRIL, 10), "013", true, new HashSet<>());

        userService.addNewUser(admin);
        userService.addNewUser(user);

        userService.addRoleToUser("lili@email.ru", "ROLE_ADMIN");
        userService.addRoleToUser("mans@email.ru", "ROLE_USER");
        userService.addRoleToUser("lili@email.ru", "ROLE_USER");
    }

}
