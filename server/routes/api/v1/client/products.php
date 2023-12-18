<?php

use App\Http\Controllers\Api\ProductController;
use Illuminate\Support\Facades\Route;




Route::get(
  '/categories/{category:slug}/hot-products',
  [ProductController::class, 'categoryHotProducts']
);

Route::get(
  '/search',
  [ProductController::class, 'search']
);
