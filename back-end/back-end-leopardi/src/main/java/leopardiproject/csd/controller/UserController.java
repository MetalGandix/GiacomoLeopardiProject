package leopardiproject.csd.controller;

import leopardiproject.csd.SmtpMailSender;
import leopardiproject.csd.dto.UserDTO;
import leopardiproject.csd.jwt.JwtUserDetailsService;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private JwtUserDetailsService userRepository;

    @Autowired
    private SmtpMailSender smtpMailSender;

    @PostMapping("/user")
    String addUser(@RequestBody UserDTO user) throws MessagingException {
        smtpMailSender.send(user.getUsername(), "Prova",
                "Conferma la tua email");
        userRepository.save(user);
        return "ciao";
    }

    @GetMapping("/existUser/{username}")
    public boolean existUser(@PathVariable String username) {
        if (userRepository.findUserByUsername(username) == null) {
            return false;
        } else {
            return true;
        }
    }
}