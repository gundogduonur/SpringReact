package com.onurgundogdu.springreacttest.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    private static final Logger log= LoggerFactory.getLogger(UserController.class);


    @PostMapping("/api/v1/users")
    public void createUser(@RequestBody User user)
    {
        userRepository.save(user);
    }
}
