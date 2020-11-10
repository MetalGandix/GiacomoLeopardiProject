package leopardiproject.csd.model;

@Entity
@Table(name = "prenotazione")
public class PrenotazioneVisita {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column
    private Date data;

    @Column
    private Date orario;

    @Column
    private int numcomponenti;

    @Column
    private String info;

    @Column
    private String nome;

    @Column
    private String cognome;

    @Column
    private int cellulare;

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
}