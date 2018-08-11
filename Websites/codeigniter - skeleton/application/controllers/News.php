<?php

class News extends CI_Controller
{
    public $page_index = 0;
    public $page_item_limit = 2;

    public function __construct()
    {
        parent::__construct();
        
        // Init
        $this->load->model('news_model');
        $this->load->helper('url_helper');
    }

    /* Private Methods */
    private function viewNewsModule($data)
    {
        $paths = $this->config->item('CST_PATHS');
        
        $this->load->helper('form');

        $this->load->view($paths->skeleton.'sk_header', null);
        $this->load->view($paths->modules.'mod_news', $data);
        $this->load->view($paths->skeleton.'sk_footer', null);
    }

    private function viewNewsModuleCreate($data)
    {
        $paths = $this->config->item('CST_PATHS');

        $this->load->view($paths->skeleton.'sk_header', null);
        $this->load->view($paths->modules.'mod_news_create', $data);
        $this->load->view($paths->skeleton.'sk_footer', null);
    }

    private function viewHomepage()
    {
        $this->load->helper('url');
        
        redirect('/', 'refresh');
    }

    /* Public Methods */
    public function index()
    {
        $data['news'] = $this->news_model->get_news($this->page_index, $this->page_item_limit);
        $data['page_count'] = $this->news_model->get_news_count() / $this->page_item_limit;
        $data['page_index'] = $this->page_index + 1;

        if ($data['page_count'] < 1) {
            $data['page_count'] = 1;
        }

        if (!empty($data['news']))
        {
            $this->viewNewsModule($data);
        }
        else 
        {
            show_error('News empty!');
        }
    }

    public function view($index)
    {
        if (is_numeric($index) && $index > 0 && $index - 1 < $this->news_model->get_news_count()) 
        {
            $data['news'] = $this->news_model->get_news_by_id($index);

            if (!empty($data['news']))
            {
                $this->viewNewsModule($data);

                return;
            }
        }

        $this->viewHomepage();
    }

    public function create()
    {
        $data = array();

        // Init
        $this->load->helper('security');
        $this->load->helper('form');
        $this->load->library('form_validation');
        
        // Form validation.
        $this->form_validation->set_rules('title', 'Title', 'required|xss_clean');
        $this->form_validation->set_rules('text', 'Text', 'required|xss_clean');
        
        // Check validation.
        if ($this->form_validation->run() === FALSE)
        {
            $this->viewNewsModuleCreate($data);
        }
        else 
        {
            $data = array(
                'title' => trim($this->input->post('title')),
                'text' => trim($this->input->post('text')),
                'published' => trim($this->input->post('published')),
            );

            $this->news_model->set_news($data);
            
            // Redirect
            $this->viewNewsModule();
        }
    }
}