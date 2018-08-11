<b>Create a new "News" item:</b>
<?php echo validation_errors(); ?>
<?php echo form_open('news/create'); ?>
    <label for="title">Title</label>
    <input type="input" name="title"><br>
    <label for="text">Text</label>
    <input type="textarea" name="text"><br>
    <label for="published">Published</label>
    <input type="checkbox" name="published" id="published"><br>
    <input type="submit" value="Create">
    <input type="reset" value="Reset">
</form>