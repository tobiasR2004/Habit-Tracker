/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.habit.Tracker.repository;

import com.habit.Tracker.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author tobi2
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
    Usuario findByNombreUs(String nombreUs);
    
}
