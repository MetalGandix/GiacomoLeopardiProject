package leopardiproject.csd.model;

import java.util.Date;

import javax.persistence.*;

@Entity
public class Eventi {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private String nomeEvento;

    private Date dataEvento;

    private String tipoEvento;

    private String descrizione;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNomeEvento() {
        return nomeEvento;
    }

    public void setNomeEvento(String nomeEvento) {
        this.nomeEvento = nomeEvento;
    }

    public Date getDataEvento() {
        return dataEvento;
    }

    public void setDataEvento(Date dataEvento) {
        this.dataEvento = dataEvento;
    }

    public String getTipoEvento() {
        return tipoEvento;
    }

    public void setTipoEvento(String tipoEvento) {
        this.tipoEvento = tipoEvento;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }
}
