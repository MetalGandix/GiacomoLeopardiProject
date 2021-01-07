package leopardiproject.csd.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import leopardiproject.csd.model.Poesie;
import leopardiproject.csd.repository.PoesieRepository;

@RestController
@CrossOrigin
public class PoesieController {
    
@Autowired
PoesieRepository rep;

@GetMapping("/getPoesie")
public List<Poesie> getPoesie(){
    return (List<Poesie>) rep.findAll();
}

@GetMapping("/getPoesia/{titolo}")
public Poesie getPoesia(@RequestParam String titolo){
    return rep.findByTitolo(titolo);
}

@PostMapping("/inserisciPoesia")
String addPoesia(Authentication a, @RequestBody Poesie poesia){
    rep.save(poesia);
    return "Poesia aggiunta correttamente";
}

}
