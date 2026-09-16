<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('matcha');
});

Route::get('/details', function () {
    return view('details');
});