<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\HomeFeedController;
use App\Http\Controllers\Api\MainCategoryController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Support\Facades\Route;


Route::prefix("v1")->group(function () {
    // auth routes
    Route::middleware(['auth:sanctum'])
        ->group(function () {
            Route::post('/signup', [AuthController::class, 'signup'])
                ->withoutMiddleware('auth:sanctum');
            Route::post('/login', [AuthController::class, 'login'])
                ->withoutMiddleware('auth:sanctum');
            Route::get('/me', [AuthController::class, 'me']);
            Route::post('/logout', [AuthController::class, 'logout']);
        });


    // HOME
    Route::get('/home-feed', HomeFeedController::class);

    Route::get('/main-categories/{mainCategory:slug}', [MainCategoryController::class, 'show']);

    Route::get('/main-categories/{mainCategory:slug}/feed', [MainCategoryController::class, 'feed']);

    Route::get(
        '/categories/{category:slug}/products',
        [ProductController::class, 'categoryProducts']
    );

    // PRODUCT
    Route::get('/products', [ProductController::class, 'byIds']);

    Route::get('/products/{product:slug}', [ProductController::class, 'show']);

    Route::get('/products/{id}/reviews', [ProductController::class, 'getReviews']);

    Route::post('/products/{id}/reviews', [ProductController::class, 'storeReview'])
        ->middleware('auth:sanctum');

    require __DIR__ . '/api/v1/client/feed.php';
    require __DIR__ . '/api/v1/client/main-categories.php';
    require __DIR__ . '/api/v1/client/profile.php';
    require __DIR__ . '/api/v1/client/products.php';
    require __DIR__ . '/api/v1/client/categories.php';
    require __DIR__ . '/api/v1/client/checkout.php';
    require __DIR__ . '/api/v1/client/orders.php';
});
