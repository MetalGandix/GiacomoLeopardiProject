package leopardiproject.csd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import leopardiproject.csd.model.Poesie;

public interface PoesieRepository extends JpaRepository<Poesie, Long>{
    Poesie findByTitolo(String titolo);
    List<Poesie> findByCapitolo(int capitolo);
}
