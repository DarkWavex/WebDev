<!-- See "header.php" -->

<?php 
    $paths = $this->config->item('CST_PATHS');

    if (!empty($sidebar)) 
    {
        $this->load->view($paths->skeleton.'sk_sidebar', $sidebar);
    }
?>

<!-- Seperator -->

<?php echo $content; ?>

<!-- See "footer.php" -->