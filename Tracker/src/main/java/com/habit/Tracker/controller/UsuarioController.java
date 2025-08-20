/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.habit.Tracker.controller;

import com.habit.Tracker.model.Usuario;
import com.habit.Tracker.service.UsuarioService;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {

    private final UsuarioService usService;

    @Autowired
    private PasswordEncoder passEncoder;

    public UsuarioController(UsuarioService usService) {
        this.usService = usService;
    }

    @PostMapping("/register")
    public Usuario createUs(@RequestBody Usuario us) {
        //Encriptamos la contraseña
        String password = passEncoder.encode(us.getContraseña());
        us.setContraseña(password);
        return usService.guardarUsuario(us);
    }

    @PostMapping("/login")
    public ResponseEntity<?> LoginUs(@RequestBody Usuario us) {
        Usuario user = usService.buscarUsNombre(us.getNombreUs());
        if (user != null && passEncoder.matches(us.getContraseña(), user.getContraseña())) {
            //login exitoso
            return ResponseEntity.ok(Map.of("mensaje","Login Exitoso"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("mensaje", "Usuario o contraseña incorrectos"));
        }
    }
}
