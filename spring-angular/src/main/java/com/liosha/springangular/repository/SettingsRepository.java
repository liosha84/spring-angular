package com.liosha.springangular.repository;

import com.liosha.springangular.model.ERole;
import com.liosha.springangular.model.Role;
import com.liosha.springangular.model.Setting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SettingsRepository  extends JpaRepository<Setting, Long> {

}
