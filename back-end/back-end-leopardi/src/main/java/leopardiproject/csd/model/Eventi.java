package leopardiproject.csd.model;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
public class Eventi {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private String nomeEvento;

    private LocalDate dataEvento;

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

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public LocalDate getDataEvento() {
        return dataEvento;
    }

    public void setDataEvento(LocalDate dataEvento) {
        this.dataEvento = dataEvento;
    }
}
