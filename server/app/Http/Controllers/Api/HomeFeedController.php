<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MainCategoryResource;
use App\Http\Resources\ProductCollection;
use App\Models\MainCategory;
use App\Models\Product;
use Illuminate\Http\Request;

class HomeFeedController extends Controller
{

    public function __invoke()
    {
        $main_categories = MainCategory::all();

        $feed = [];
        foreach ($main_categories as $mc) {
            $categories = $mc->categories->pluck('id')->toArray();
            $products = Product::withCount('reviews')
                ->whereIn('category_id', $categories)
                ->orderBy('reviews_count', 'desc')
                ->take(12)
                ->get();

            $feed[] = [
                'mainCategory' => new MainCategoryResource($mc),
                'products' => new ProductCollection($products)
            ];
        }

        return response()->json($feed);
    }
}
