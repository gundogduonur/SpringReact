package com.onurgundogdu.springreacttest.user;


import com.onurgundogdu.springreacttest.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/api/v1/users")
    @ResponseStatus(HttpStatus.CREATED)
    public GenericResponse createUser(@RequestBody User user)
    {
        userService.save(user);
        return new GenericResponse("User created");
    }
}
