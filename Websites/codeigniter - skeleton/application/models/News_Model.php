<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class News_Model extends CI_Model
{
    public $table_name = 'module_news';

    public function __construct()
    {
        parent::__construct();

        $this->load->database();
    }

    public function get_news($page, $limit)
    {
        $query = $this->db->limit($limit, $page * $limit)->get_where($this->table_name, null);

        if ($query->num_rows() > 0)
        {
            return $query->result_array();
        }
        
        return null;
    }

    public function get_news_count()
    {
        return $this->db->count_all($this->table_name);
    }

    public function get_news_by_id($id)
    {
        $query = $this->db->get_where($this->table_name, array('id' => $id));

        if ($query->num_rows() > 0)
        {
            return $query->result_array();
        }
        
        return null;
    }

    public function set_news($data)
    {
        if (!empty($data))
        {
            /* in_array (Sucht in den Werten des Arrays) /
               array_key_exists (Prüft ob Schlüssel vorhanden.) */
            if (array_key_exists('title', $data) && array_key_exists('text', $data))
            {
                if (!array_key_exists('published', $data))
                {
                    $data['published'] = '0';
                }

                $this->db->insert($this->table_name, $data);
            }
        }
    }
}