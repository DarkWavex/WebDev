<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/* --------------------------------------------------------- */

if (!defined('skrh_load_type_script'))
{
    define('skrh_load_type_script', 1);
}

if (!defined('skrh_load_type_stylesheet'))
{
    define('skrh_load_type_stylesheet', 2);
}

/* --------------------------------------------------------- */

if (!function_exists('skrh_get_folder_array'))
{
    function skrh_get_folder_array($resource_type)
    {
        if (!empty($resource_type))
        {
            if (is_numeric($resource_type))
            {
                // Directory Helper.
                $ci = get_instance();
                $ci->load->helper('directory');
                $ci->load->helper('url');

                $paths = $ci->config->item('CST_PATHS');

                if ($resource_type === skrh_load_type_script)
                {
                    return directory_map($paths->resources->stylesheets);
                }
                else if ($resource_type === skrh_load_type_stylesheet)
                {
                    return directory_map($paths->resources->stylesheets);
                }
            }
        }
    }
}

if (!function_exists('skrh_get_path'))
{
    function skrh_get_path($resource_name, $resource_type)
    {
        if (!empty($resource_type))
        {
            if (is_numeric($resource_type))
            {
                if ($resource_type === skrh_load_type_script)
                {
                    return skrh_get_script_path($resource_name);
                }
                else if ($resource_type === skrh_load_type_stylesheet)
                {
                    return skrh_get_stylesheet_path($resource_name);
                }
            }
        }
    }
}

if (!function_exists('skrh_get_script_path'))
{
    function skrh_get_script_path($resource_name)
    {
        if (!empty($resource_name))
        {
           // Retrieve current "Controller".
           $ci = get_instance();
           $ci->load->helper('url');
           // Retrieve path to resources.
           $paths = $ci->config->item('CST_PATHS');
           // URL
           return site_url().$paths->resources->scripts.$resource_name;
        }
    }
}

if (!function_exists('skrh_get_stylesheet_path'))
{
    function skrh_get_stylesheet_path($resource_name)
    {
        if (!empty($resource_name))
        {
            // Retrieve current "Controller".
            $ci = get_instance();
            $ci->load->helper('url');
            // Retrieve path to resources.
            $paths = $ci->config->item('CST_PATHS');
            // URL
            return base_url($paths->resources->stylesheets.$resource_name);
        }
    }
}