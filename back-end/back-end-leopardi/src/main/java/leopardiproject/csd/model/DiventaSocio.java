package leopardiproject.csd.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DiventaSocio {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String nome;

    @Column
    private String cognome;

    @Column
    private String luogoDiNascita;

    @Column
    private Date giornoDiNascita;

    @Column
    private String citta;

    @Column
    private String cap;

    @Column
    private String via;

    @Column
    private String email;

    @Column
    private String numeroTelefono;

    @Column
    private String professione;

    @Column
    private String codiceFiscale;

    @Column
    private int quotaAnnuale;

    @Column
    private Date dataCompilazione;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getLuogoDiNascita() {
        return luogoDiNascita;
    }

    public void setLuogoDiNascita(String luogoDiNascita) {
        this.luogoDiNascita = luogoDiNascita;
    }

    public Date getGiornoDiNascita() {
        return giornoDiNascita;
    }

    public void setGiornoDiNascita(Date giornoDiNascita) {
        this.giornoDiNascita = giornoDiNascita;
    }

    public String getCitta() {
        return citta;
    }

    public void setCitta(String citta) {
        this.citta = citta;
    }

    public String getCap() {
        return cap;
    }

    public void setCap(String cap) {
        this.cap = cap;
    }

    public String getVia() {
        return via;
    }

    public void setVia(String via) {
        this.via = via;
    }

    public String getNumeroTelefono() {
        return numeroTelefono;
    }

    public void setNumeroTelefono(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }

    public String getProfessione() {
        return professione;
    }

    public void setProfessione(String professione) {
        this.professione = professione;
    }

    public String getCodiceFiscale() {
        return codiceFiscale;
    }

    public void setCodiceFiscale(String codiceFiscale) {
        this.codiceFiscale = codiceFiscale;
    }

    public int getQuotaAnnuale() {
        return quotaAnnuale;
    }

    public void setQuotaAnnuale(int quotaAnnuale) {
        this.quotaAnnuale = quotaAnnuale;
    }

    public Date getDataCompilazione() {
        return dataCompilazione;
    }

    public void setDataCompilazione(Date dataCompilazione) {
        this.dataCompilazione = dataCompilazione;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
