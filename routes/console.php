<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Custom commands for 3DMOTOCRAFT
Artisan::command('3dmotocraft:setup', function () {
    $this->info('Setting up 3DMOTOCRAFT application...');
    
    // Create storage directories
    $this->call('storage:link');
    
    // Clear and cache config
    $this->call('config:cache');
    $this->call('route:cache');
    $this->call('view:cache');
    
    $this->info('3DMOTOCRAFT setup completed successfully!');
})->purpose('Setup 3DMOTOCRAFT application');

Artisan::command('3dmotocraft:clear', function () {
    $this->info('Clearing 3DMOTOCRAFT cache...');
    
    $this->call('config:clear');
    $this->call('route:clear');
    $this->call('view:clear');
    $this->call('cache:clear');
    
    $this->info('Cache cleared successfully!');
})->purpose('Clear all 3DMOTOCRAFT cache');