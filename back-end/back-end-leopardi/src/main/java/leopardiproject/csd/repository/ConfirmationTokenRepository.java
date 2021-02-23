package leopardiproject.csd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import leopardiproject.csd.model.ConfirmationToken;
import leopardiproject.csd.model.DAOUser;

public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, Long>{
    ConfirmationToken findByConfirmationToken(String confirmationToken);
    ConfirmationToken findByUser(DAOUser id);
}
