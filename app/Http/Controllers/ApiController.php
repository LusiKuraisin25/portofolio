<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = Post::latest()->paginate(5);
        return response()->json($post);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Post::create([
            'id_user' => $request->id,
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
        ]);

        return redirect('post');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        Post::where('id', $id)->update([
            'id_user' => $request->id,
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
        ]);

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Post::destroy($id);

        return response()->json(['message' => 'Item deleted successfully.']);
    }
}
