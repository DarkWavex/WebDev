<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class SK_Sidebar_Model extends CI_Model
{
    public $table_name = 'skeleton_sidebar';

    public function __construct()
    {
        parent::__construct();

        $this->load->database();
    }
    
    public function get_list()
    {
        $query = $this->db->get_where('skeleton_sidebar', null);

        if ($query->num_rows() > 0) 
        {
            return $query->result_array();
        }

        return null;
    }
}