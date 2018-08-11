<html>

<head>
	<title><?php echo $title; ?></title>
	<?php if (function_exists('skrh_get_folder_array')): ?>
		<?php foreach(skrh_get_folder_array(skrh_load_type_stylesheet) as $css): ?>
			<link rel="stylesheet" type="text/css" href="<?php echo skrh_get_stylesheet_path($css); ?>">
		<?php endforeach; ?>
	<?php endif; ?>
</head>

<body>

<!-- See "content.php" -->