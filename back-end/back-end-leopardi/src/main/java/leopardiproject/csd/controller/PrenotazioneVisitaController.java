package leopardiproject.csd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import leopardiproject.csd.model.PrenotazioneVisita;
import leopardiproject.csd.repository.PrenotazioneVisitaRepository;

@RestController
@CrossOrigin
public class PrenotazioneVisitaController {

    @Autowired
    private PrenotazioneVisitaRepository visitaRep;
    
    private OTPSystemController otpController;

    // Metodo per inviare al DB la visita con le info
    @PostMapping("/visita")
    String addUser(@RequestBody PrenotazioneVisita visita) {
        visitaRep.save(visita);
        otpController.sendOTP(visita.getCellulare());
        return "Visita correttamente inviata";
    }

    // Metodo per vedere TUTTE le visite (Deve essere accessibile solo all'admin)
    @GetMapping("/vediVisite")
    public List<PrenotazioneVisita> getVisite() {
        return (List<PrenotazioneVisita>) visitaRep.findAll();
    }

    // Metodo per vedere una singola visita dell'utente
    @GetMapping("/vediVisita{visitaid}")
    public PrenotazioneVisita vediVisitaSingola(@RequestBody PrenotazioneVisita visita) {
        visitaRep.save(visita);
        return visita;
    }

}