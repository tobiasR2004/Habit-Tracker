/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.habit.Tracker.controller;

import com.habit.Tracker.model.Usuario;
import com.habit.Tracker.service.UsuarioService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author tobi2
 */
@RestController
@RequestMapping("/api/usuario")
@CrossOrigin(origins = "http://localhost:5174")
public class UsuarioController {
    private final UsuarioService usService;

    public UsuarioController(UsuarioService usService) {
        this.usService = usService;
    }
    
    @PostMapping
    public Usuario createUs(@RequestBody Usuario us){
        return usService.guardarUsuario(us);
    }
    
}
