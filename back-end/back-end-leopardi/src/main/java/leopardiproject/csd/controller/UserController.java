package leopardiproject.csd.controller;

import leopardiproject.csd.SmtpMailSender;
import leopardiproject.csd.dto.UserDTO;
import leopardiproject.csd.jwt.JwtUserDetailsService;
import leopardiproject.csd.model.DAOUser;
import leopardiproject.csd.model.Role;
import leopardiproject.csd.model.UserRole;
import leopardiproject.csd.repository.UserDao;
import leopardiproject.csd.repository.UserRoleRepository;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private JwtUserDetailsService userRepository;

    @Autowired
    private UserDao rep;

    @Autowired
    private SmtpMailSender smtpMailSender;

    @Autowired
    private UserRoleRepository userRoleRepository;
    
    @Autowired
	private PasswordEncoder bcryptEncoder;

    @PostMapping("/user")
    String addUser(@RequestBody UserDTO user) throws MessagingException {
        smtpMailSender.send(user.getUsername(), "Prova", "Conferma la tua email");
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

    @GetMapping("/vediUtenti")
    public List<DAOUser> vediUtenti(Authentication a) {
        return (List<DAOUser>) userRepository.findAllTheUser();
    }

    @GetMapping("/vediUtenti/{username}")
    public DAOUser vediUtente(Authentication a, @PathVariable String username) {
        return (DAOUser) userRepository.findUserByUsername(username);
    }

    @PutMapping("/cambiaUtente/{usernameid}")
    public DAOUser cambiaUtente(Authentication a, @RequestBody UserDTO username) {
        return (DAOUser) userRepository.save(username);
    }

    @DeleteMapping("/eliminaUtente/{id}")
    public String eliminaUtente(Authentication a, @PathVariable long id){
        DAOUser user = rep.getOne(id);
        rep.delete(user);
        return "Utente eliminato correttamente";
    }

    @PutMapping("/nominaAdmin/{id}")
    public DAOUser nominaAdmin(Authentication a, @RequestBody UserDTO user){
        DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setName(user.getName());
		newUser.setlastname(user.getLastname());
		newUser.setCheckbox1(user.isCheckbox1());
		newUser.setCheckbox2(user.isCheckbox2());
		newUser.setCheckbox3(user.isCheckbox3());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        UserRole newUserRole = new UserRole();
		newUserRole.setRole_id(2);
        newUserRole.setUser_id(newUser.getId());
		userRoleRepository.save(newUserRole);
        return newUser;
    }
}