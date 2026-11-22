<?php header('Cache-Control: no-store'); header('Content-Type: text/plain');
echo 'HTTPS=' . ($_SERVER['HTTPS'] ?? '-') . ' XFP=' . ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '-') . ' PORT=' . ($_SERVER['SERVER_PORT'] ?? '-') . ' SCHEME=' . ($_SERVER['REQUEST_SCHEME'] ?? '-') . ' XFS=' . ($_SERVER['HTTP_X_FORWARDED_SSL'] ?? '-');
