package ru.web.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.web.model.User;
import ru.web.service.UserServiceImpl;

import java.util.List;

@RestController
@Slf4j
public class RstController {

    private final UserServiceImpl userService;

    public RstController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/getAuthorizedUserInfo", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getUserByEmail(Authentication authentication) {
        return ResponseEntity.ok().body(userService.getUserByEmail(authentication.getName()));
    }

    @GetMapping(value = "/getAllUsersInfo", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok().body(userService.getAllUsers());
    }

    @PostMapping(path = "/addNewUser")
    public ResponseEntity<User> addNewUser(@RequestBody User user) {
        userService.addNewUser(user);
        return ResponseEntity.ok().body(user);
    }

    @PutMapping(path = "/edit")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return ResponseEntity.ok().body(HttpStatus.OK);
    }

    @DeleteMapping(path = "/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().body(HttpStatus.OK);
    }
}
