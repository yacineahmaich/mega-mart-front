<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\MainCategoryCollection;
use App\Http\Resources\MainCategoryResource;
use App\Http\Resources\ProductCollection;
use App\Models\MainCategory;
use App\Models\Product;

class MainCategoryController extends Controller
{
    public function index()
    {
        return new MainCategoryCollection(MainCategory::all());
    }

    public function show(MainCategory $mainCategory)
    {
        return new MainCategoryResource($mainCategory);
    }

    public function feed(MainCategory $mainCategory)
    {
        $feed = [];
        $categories = $mainCategory->categories;

        foreach ($categories as $category) {
            $products = Product::withCount('reviews')
                ->where('category_id', $category->id)
                ->orderBy('reviews_count', 'desc')
                ->take(12)
                ->get();
            $feed[] = [
                'category' => new CategoryResource($category),
                'products' => new ProductCollection($products)
            ];
        }

        return response()->json($feed);
    }
}
