<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    /**
     * Redirect the user to the Facebook authentication page.
     */
    public function redirectToProvider()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Obtain the user information from Facebook.
     */
    public function handleProviderCallback()
    {
        // Try to get the user from the provider
        try {
            $facebookUser = Socialite::driver('facebook')->stateless()->user();
        } catch (\Exception $e) {
            // On failure, redirect back to the front (you can adjust)
            return redirect()->route('crear_cuenta');
        }

        // Find existing user by email
        $user = null;
        if ($facebookUser->getEmail()) {
            $user = User::where('email', $facebookUser->getEmail())->first();
        }

        // If no user, create one
        if (! $user) {
            $user = User::create([
                'name' => $facebookUser->getName() ?? $facebookUser->getNickname() ?? 'Usuario Facebook',
                'email' => $facebookUser->getEmail() ?? Str::lower(Str::slug($facebookUser->getId()).'@facebook.local'),
                // Create a random password (hashed automatically by the model cast if configured)
                'password' => Str::random(24),
            ]);
            // Optionally mark email as verified
            $user->email_verified_at = now();
            $user->save();
        }

        // Log the user in
        Auth::login($user, true);

        // Redirect to app home (adjust to your front-end route)
        return redirect('/');
    }
}
