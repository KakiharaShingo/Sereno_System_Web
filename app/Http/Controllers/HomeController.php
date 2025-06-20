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
        $currentLocale = session('locale', config('app.locale', 'ja'));
        $availableLocales = config('app.available_locales', [
            'ja' => '日本語',
            'en' => 'English',
            'zh' => '中文',
            'ko' => '한국어'
        ]);
        $companyInfo = config('app.company');
        
        return view('home', compact('currentLocale', 'availableLocales', 'companyInfo'));
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
            Mail::html(view('emails.contact', $data)->render(), function ($message) use ($data) {
                $message->to(Config::get('app.company.email'))
                        ->subject('[3DMOTOCRAFT] ' . $data['subject'])
                        ->replyTo($data['email'], $data['name']);
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
     * Get company location information for maps
     */
    public function getLocationInfo()
    {
        $company = Config::get('app.company');
        return response()->json([
            'display_address' => $company['address'],
            'map_address' => $company['address_for_map'],
            'name' => $company['name'],
            'phone' => $company['phone'],
            'email' => $company['email']
        ]);
    }
    
    /**
     * Get YouTube channel information
     */
    public function getYouTubeInfo()
    {
        $previewVideoUrl = Config::get('app.company.youtube_preview_video');
        return response()->json([
            'channel_url' => Config::get('app.company.youtube_channel'),
            'preview_video_url' => $previewVideoUrl,
            'preview_embed_url' => $this->getYouTubeEmbedUrl($previewVideoUrl),
            'preview_video_id' => $this->extractVideoId($previewVideoUrl)
        ]);
    }
    
    /**
     * Convert YouTube URL to embed URL
     */
    private function getYouTubeEmbedUrl($url)
    {
        if (strpos($url, 'youtu.be/') !== false) {
            $videoId = $this->extractVideoId($url);
            return "https://www.youtube.com/embed/{$videoId}";
        } elseif (strpos($url, '@') !== false) {
            $channelId = str_replace('https://www.youtube.com/@', '', $url);
            return "https://www.youtube.com/embed?listType=user_uploads&list={$channelId}";
        }
        return $url;
    }
    
    /**
     * Extract video ID from YouTube URL
     */
    private function extractVideoId($url)
    {
        if (preg_match('/youtu\.be\/([a-zA-Z0-9_-]+)/', $url, $matches)) {
            return $matches[1];
        } elseif (preg_match('/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/', $url, $matches)) {
            return $matches[1];
        }
        return null;
    }
    
    /**
     * Test contact form submission (for debugging)
     */
    public function contactTest(Request $request)
    {
        $data = [
            'name' => $request->input('name', 'テストユーザー'),
            'email' => $request->input('email', 'test@example.com'),
            'subject' => $request->input('subject', 'メール送信テスト'),
            'message' => $request->input('message', 'これはメール送信機能のテストです。'),
        ];
        
        // Send email notification
        try {
            Mail::html(view('emails.contact', $data)->render(), function ($message) use ($data) {
                $message->to(Config::get('app.company.email'))
                        ->subject('[3DMOTOCRAFT] ' . $data['subject'])
                        ->replyTo($data['email'], $data['name']);
            });
            
            return response()->json([
                'success' => true,
                'message' => 'メールが正常に送信されました。',
                'mailpit_url' => 'http://localhost:8025',
                'data' => $data
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'メール送信に失敗しました: ' . $e->getMessage(),
                'error' => $e->getMessage()
            ], 500);
        }
    }
}