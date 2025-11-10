<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


// RUTA ADICIONAL: permitir acceder directamente a /crear_cuenta
Route::get('/crear_cuenta', function () {
    return Inertia::render('crear_cuenta', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('crear_cuenta');


Route::get('/iniciar_sesion', function () {
    return Inertia::render('iniciar_sesion');
})->name('iniciar_sesion');

