package com.liosha.springangular.controllers;

import com.liosha.springangular.model.User;
import com.liosha.springangular.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "${app.origin}", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api")
public class UsersController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers(@RequestParam(required = false) String title) {
        try {
            List<User> users = new ArrayList<User>();
            users = userRepository.findAll();
            //userRepository.findAll().forEach(users::add);


            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
