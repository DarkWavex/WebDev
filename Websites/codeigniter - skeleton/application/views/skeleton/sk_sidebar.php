<div>
    <ul>
        <?php $this->load->helper('url'); ?>
        <?php foreach($sidebar['list'] as $item): ?>
            <li><a href="<?php echo site_url($item['route']); ?>"><?php echo $item['alias']; ?></a></li>
        <?php endforeach;?>
    </ul>
</div>