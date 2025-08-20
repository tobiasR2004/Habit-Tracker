/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.habit.Tracker.service;

import com.habit.Tracker.model.Usuario;
import com.habit.Tracker.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

/**
 *
 * @author tobi2
 */
@Service
public class UsuarioService {
    
    private final UsuarioRepository usuarioRep;
    
    public UsuarioService(UsuarioRepository usuarioRep){
        this.usuarioRep = usuarioRep;
    }
    
    public Usuario guardarUsuario(Usuario usuario){
        return usuarioRep.save(usuario);
    }
    
    public Usuario buscarUsNombre(String user){
        return usuarioRep.findByNombreUs(user);
    }
}
