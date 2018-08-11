<?php foreach($news as $news_item): ?>
    <?php if ($news_item["published"]==1): ?>
    <h2>#<?php echo $news_item['id']; ?> <?php echo $news_item['title']; ?></h2>
    <p><?php echo $news_item['text']; ?></p>
    <?php endif; ?>
<?php endforeach; ?>
<?php if (!empty($page_index) && !empty($page_count)): ?>
    <b>Page: <?php echo $page_index; ?> / <?php echo $page_count; ?></b>
    <?php echo validation_errors(); ?>
    <?php echo form_open(''); ?>
        <input type="submit" value="Previous">
        <input type="submit" value="Next">
    </form>
<?php endif; ?>