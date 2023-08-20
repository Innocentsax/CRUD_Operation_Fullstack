package dev.InnocentUdo.Fullstackbackend.Repository;

import dev.InnocentUdo.Fullstackbackend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
