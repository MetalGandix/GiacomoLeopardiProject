package leopardiproject.csd.controller;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import leopardiproject.csd.SmtpMailSender;
import leopardiproject.csd.model.PrenotazioneVisita;
import leopardiproject.csd.repository.PrenotazioneVisitaRepository;

@RestController
@CrossOrigin
public class PrenotazioneVisitaController {

    @Autowired
    private PrenotazioneVisitaRepository visitaRep;
    
    private OTPSystemController otpController;

    @Autowired
	private SmtpMailSender smtpMailSender;

    // Metodo per inviare al DB la visita con le info
    // giacomoleopardi13@gmail.com
    @PostMapping("/visita")
    String addVisit(@RequestBody PrenotazioneVisita visita) throws MessagingException{
        smtpMailSender.send("leonardo.mogianesi@studenti.unicam.it", "Visita prenotata da " + visita.getCognome(), "La visita è stata prenotata da " + visita.getNome() + " \ned il numero di componenti è di: " + visita.getNumcomponenti() + " \nper il giorno: " + visita.getData() + " alle ore: " + visita.getOrario() + "." + "\nIl numero di cellulare del visitatore è: " + visita.getCellulare());
        smtpMailSender.send("corrado.pallucchini@studenti.unicam.it", "Visita prenotata da " + visita.getCognome(), "La visita è stata prenotata da " + visita.getNome() + " \ned il numero di componenti è di: " + visita.getNumcomponenti() + " \nper il giorno: " + visita.getData() + " alle ore: " + visita.getOrario() + "." + "\nIl numero di cellulare del visitatore è: " + visita.getCellulare());
        smtpMailSender.send("riccardo.petracci@studenti.unicam.it", "Visita prenotata da " + visita.getCognome(), "La visita è stata prenotata da " + visita.getNome() + " \ned il numero di componenti è di: " + visita.getNumcomponenti() + " \nper il giorno: " + visita.getData() + " alle ore: " + visita.getOrario() + "." + "\nIl numero di cellulare del visitatore è: " + visita.getCellulare());
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