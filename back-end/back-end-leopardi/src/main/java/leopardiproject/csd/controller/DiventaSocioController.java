package leopardiproject.csd.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import leopardiproject.csd.model.DiventaSocio;
import leopardiproject.csd.repository.DiventaSocioRepository;

@RestController
@CrossOrigin
public class DiventaSocioController {

    @Autowired
    private DiventaSocioRepository rep;

    @GetMapping("/vediModuli")
    public List<DiventaSocio> getVisite() {
        return (List<DiventaSocio>) rep.findAll();
    }

    @PostMapping("/inserisciModulo")
    String addEvent(@RequestBody DiventaSocio modulo) {
        rep.save(modulo);
        return "Modulo correttamente compilato";
    }
}
