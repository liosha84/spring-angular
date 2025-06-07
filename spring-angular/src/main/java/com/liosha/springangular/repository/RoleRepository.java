package com.liosha.springangular.repository;

import java.util.Optional;

import com.liosha.springangular.model.ERole;
import com.liosha.springangular.model.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
