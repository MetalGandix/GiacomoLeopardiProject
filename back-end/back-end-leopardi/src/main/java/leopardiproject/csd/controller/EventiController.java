package leopardiproject.csd.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import leopardiproject.csd.model.Eventi;
import leopardiproject.csd.repository.EventiRepository;

@RestController
@CrossOrigin
public class EventiController {

    @Autowired
    private EventiRepository rep;

    @GetMapping("/vediEventi")
    public List<Eventi> getVisite() {
        return (List<Eventi>) rep.findAll();
    }

    @PostMapping("/inserisciEventi")
    String addEvent(Authentication a, @RequestBody Eventi event) {
        rep.save(event);
        return "Evento inserito correttamente";
    }

}