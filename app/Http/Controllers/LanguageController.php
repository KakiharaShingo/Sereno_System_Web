<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Config;

class LanguageController extends Controller
{
    /**
     * Switch application language
     */
    public function switch($locale, Request $request)
    {
        $availableLocales = array_keys(Config::get('app.available_locales', []));
        
        if (in_array($locale, $availableLocales)) {
            Session::put('locale', $locale);
            app()->setLocale($locale);
        }
        
        return redirect()->back();
    }
}