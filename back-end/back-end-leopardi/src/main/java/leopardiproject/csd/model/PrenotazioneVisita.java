package leopardiproject.csd.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "prenotazione")
public class PrenotazioneVisita {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column
    private Date data;

    @Column
    private String orario;

    @Column
    private int numcomponenti;

    @Column
    private String info;

    @Column
    private String nome;

    @Column
    private String cognome;

    @Column
    private String cellulare;

    @Column
    private String paese;

    @Column
    private String citta;

    @Column
    private String infoAggiuntiva;

    @Column
    private boolean check1;

    @Column
    private boolean check2;

    @Column
    private boolean check3;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getOrario() {
        return orario;
    }

    public void setOrario(String orario) {
        this.orario = orario;
    }

    public int getNumcomponenti() {
        return numcomponenti;
    }

    public void setNumcomponenti(int numcomponenti) {
        this.numcomponenti = numcomponenti;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
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

    public String getCellulare() {
        return cellulare;
    }

    public void setCellulare(String cellulare) {
        this.cellulare = cellulare;
    }

    public String getPaese() {
        return paese;
    }

    public void setPaese(String paese) {
        this.paese = paese;
    }

    public String getCitta() {
        return citta;
    }

    public void setCitta(String citta) {
        this.citta = citta;
    }

    public String getInfoAggiuntiva() {
        return infoAggiuntiva;
    }

    public void setInfoAggiuntiva(String infoAggiuntiva) {
        this.infoAggiuntiva = infoAggiuntiva;
    }

    public boolean isCheck1() {
        return check1;
    }

    public void setCheck1(boolean check1) {
        this.check1 = check1;
    }

    public boolean isCheck2() {
        return check2;
    }

    public void setCheck2(boolean check2) {
        this.check2 = check2;
    }

    public boolean isCheck3() {
        return check3;
    }

    public void setCheck3(boolean check3) {
        this.check3 = check3;
    }
}