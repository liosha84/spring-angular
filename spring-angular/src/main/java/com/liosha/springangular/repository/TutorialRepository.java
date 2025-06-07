package com.liosha.springangular.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.liosha.springangular.model.Tutorial;
import org.springframework.stereotype.Repository;


@Repository
public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
  List<Tutorial> findByPublished(boolean published);
  List<Tutorial> findByTitleContaining(String title);
}