<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Config;

class HomeController extends Controller
{
    /**
     * Display the main single page application
     */
    public function index()
    {
        $companyInfo = Config::get('app.company');
        $availableLocales = Config::get('app.available_locales');
        $currentLocale = app()->getLocale();
        
        return view('home', compact('companyInfo', 'availableLocales', 'currentLocale'));
    }
    
    /**
     * Handle contact form submission
     */
    public function contact(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
        ]);
        
        $data = $request->only(['name', 'email', 'subject', 'message']);
        
        // Send email notification
        try {
            Mail::send('emails.contact', $data, function ($message) use ($data) {
                $message->to(Config::get('app.company.email'))
                        ->subject('[3DMOTOCRAFT] ' . $data['subject'])
                        ->from($data['email'], $data['name']);
            });
            
            return response()->json([
                'success' => true,
                'message' => __('messages.contact_success')
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => __('messages.contact_error')
            ], 500);
        }
    }
    
    /**
     * Get company information for API
     */
    public function getCompanyInfo()
    {
        return response()->json(Config::get('app.company'));
    }
    
    /**
     * Get YouTube channel information
     */
    public function getYouTubeInfo()
    {
        return response()->json([
            'channel_url' => Config::get('app.company.youtube_channel'),
            'embed_url' => $this->getYouTubeEmbedUrl(Config::get('app.company.youtube_channel'))
        ]);
    }
    
    /**
     * Convert YouTube channel URL to embed URL
     */
    private function getYouTubeEmbedUrl($channelUrl)
    {
        $channelId = str_replace('https://www.youtube.com/@', '', $channelUrl);
        return "https://www.youtube.com/embed?listType=user_uploads&list={$channelId}";
    }
}