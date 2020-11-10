package leopardiproject.csd.controller;

import leopardiproject.csd.dto.UserDTO;
import leopardiproject.csd.jwt.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    
    @Autowired
    private JwtUserDetailsService userRepository;

    @PostMapping("/user")
    String addUser(@RequestBody UserDTO user) {
        userRepository.save(user);
        return "ciao";
    }

   @GetMapping("/existUser/{username}")
    public boolean existUser(@PathVariable String username){
        if(userRepository.findUserByUsername(username)==null){
            return false;
        }else{
            return true;
        }
    }
}