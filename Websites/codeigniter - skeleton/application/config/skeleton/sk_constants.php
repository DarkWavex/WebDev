<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// Defines
$config['CST_PATHS']    = new Paths();
$config['CST_CONTROL']  = new Control();

/* --------------------------------------------------------- */
class Paths
{
    public $view      = 'views/';
    public $pages     = 'pages/';
    public $templates = 'templates/';
    public $skeleton  = 'skeleton/';
    public $modules   = 'modules/';
    
    // Inner Classes
    public $resources;

    public function __construct()
    {
        $this->resources = new Paths_Resources();   
    }
}

class Paths_Resources
{
    private static $resources  = 'resources/';
    public $stylesheets;
    public $scripts;

    public function __construct()
    {
        $this->stylesheets = Paths_Resources::$resources.'stylesheets/';
        $this->scripts = Paths_Resources::$resources.'scripts/';
    }
}

/* --------------------------------------------------------- */

class Control
{
    //public $
}

/* --------------------------------------------------------- */