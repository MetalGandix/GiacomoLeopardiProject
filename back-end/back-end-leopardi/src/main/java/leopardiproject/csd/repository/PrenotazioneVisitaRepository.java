package leopardiproject.csd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import leopardiproject.csd.model.PrenotazioneVisita;

@Repository
public interface PrenotazioneVisitaRepository extends JpaRepository<PrenotazioneVisita, Integer> {

}