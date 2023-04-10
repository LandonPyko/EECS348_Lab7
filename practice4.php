
<html>
<?php
    $k = $_POST['tableSize'];
    echo "<table border='1'>";

    echo "<tr>";
    echo "<td></td>";
    
    for ($n=1;$n<=$k;$n++){
    	echo "<td>" .$n. "</td>";
    }
    
    echo "</tr>";
    
    
    for ($n=1;$n<=$k;$n++){
    	echo "<tr>";
        echo "<td>" .$n. "</td>";
        for ($j=1;$j<=$k;$j++){
            $product = $n*$j;
            echo "<td>" .$product. "</td>";
        }
        echo "</tr>";

    }
?>
</html>