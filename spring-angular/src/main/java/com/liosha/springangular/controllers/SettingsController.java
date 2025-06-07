package com.liosha.springangular.controllers;

import com.liosha.springangular.model.Setting;
import com.liosha.springangular.model.User;
import com.liosha.springangular.repository.SettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SettingsController {
    @Autowired
    private SettingsRepository settingsRepository;

    @GetMapping("/settings")
    public ResponseEntity<List<Setting>> getSettings(@RequestParam(required = false) String title) {
        try {
            List<Setting> settings =  settingsRepository.findAll();
            //userRepository.findAll().forEach(users::add);


            if (settings.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(settings, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
