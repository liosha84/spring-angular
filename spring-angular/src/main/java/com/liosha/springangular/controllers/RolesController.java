package com.liosha.springangular.controllers;

import com.liosha.springangular.model.Role;
import com.liosha.springangular.model.User;
import com.liosha.springangular.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "${app.origin}", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api")
public class RolesController {
    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/roles")
    public ResponseEntity<List<Role>> getRoles(@RequestParam(required = false) String title) {
        try {
            List<Role> role = new ArrayList<Role>();
            role = roleRepository.findAll();
            //userRepository.findAll().forEach(users::add);


            if (role.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(role, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
