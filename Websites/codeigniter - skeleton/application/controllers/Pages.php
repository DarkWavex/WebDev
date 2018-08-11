<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller 
{
    public function __construct()
    {
        // Never forget when inheritance plays a role. ;)
        parent::__construct();

        $this->load->model('skeleton/sk_sidebar_model');
    }

    public function index($page = 'home')
    {
        $paths = $this->config->item('CST_PATHS');

        if (empty($paths)) 
        {
            show_error('Array "CST_PATHS" couldn\'t be loaded. Failed to load "constants.php"');
        }

        if (!file_exists(APPPATH.$paths->view.$paths->pages.$page.'.php'))
        {
            show_404();
        }

        // Helper
        $this->load->helper('skeleton/sk_resource_helper');    

        // Setup HTML - Data
        $data['title']      = ucfirst($page);
        $data['resources']  = $this->loadStylesheets();
        $data['content']    = $this->load->view($paths->pages.$page, null, true);
        $data['sidebar']    = array(
            'list' => $this->sk_sidebar_model->get_list()
        );

        // Load Views
        // Gets the view and injects custom data.
        $this->load->view($paths->skeleton.'sk_header',  $data);
        $this->load->view($paths->skeleton.'sk_content', $data);
        $this->load->view($paths->skeleton.'sk_footer',  $data);
    }

    private function loadStylesheets() 
    {
        // Variables.
        $paths = $this->config->item('CST_PATHS');

        // Load helper file.
        $this->load->helper('directory');
        
        // Map folder.
        $dir_map = directory_map(APPPATH.$paths->resources->stylesheets, 1);

        // Ignore when null.
        if (!empty($dir_map))
        {
            return null;
        }
        else 
        {
            // Return array.
            return $dir_map;
        }
    }
}