package com.onurgundogdu.springreacttest.user;


import com.onurgundogdu.springreacttest.GenericResponse;
import com.onurgundogdu.springreacttest.error.ApiError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/api/v1/users")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> createUser(@RequestBody User user)
    {
        ApiError apiError=new ApiError(400,"Validation error","/api/v1/users");
        Map<String,String> validationErrors=new HashMap<>();
        String username=user.getUsername();
        if(username == null || username.isEmpty())
        {
            validationErrors.put("username","Username cannot null");
            apiError.setValidationError(validationErrors);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(apiError);
        }
        userService.save(user);
        return ResponseEntity.ok(new GenericResponse("User created"));
    }
}
