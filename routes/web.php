<?php
use App\Http\Controllers\ContactController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/projects', function () {
    return Inertia::render('Projects');
});

Route::post('/contact', [ContactController::class, 'store'])
    ->name('contact.store');