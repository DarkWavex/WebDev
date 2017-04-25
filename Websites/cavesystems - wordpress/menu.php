<div class="centered" >
    <?php
        if (!empty($SITE_NAME)) {
            $logo_svg = sprintf('<img class="logo_margin" src="svg\logo\%s_logo.svg"/><br>', $SITE_NAME);
            echo $logo_svg;
        }
    ?>

    <div class="menu_container">
        <img class="horz_line" src="svg\horizontal_lines\logo_br.svg"><br>

        <ul class="navigation_menu navigation_menu_horz">
            <li><a href="index.php"><img src="svg\buttons\home_button.svg"/></a>
                <ul class="navigation_menu navigation_menu_vert">
                    <li><a href="news.php"><img src="svg\buttons\news_button.svg"/></a></li>
                    <li>Test II</li>
                </ul>
            </li>
            <li><a href="wordpress.php"><img src="svg\buttons\wordpress_button.svg"></a></li>
            <li><a href="author.php"><img src="svg\buttons\author_button.svg"/></a ></li>
            <li><a href="blog.php"><img src="svg\buttons\blog_button.svg"/></a ></li>
        </ul>
    </div>
</div >
