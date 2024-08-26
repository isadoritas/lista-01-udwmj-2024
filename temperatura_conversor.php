<?php

function getUserInput($prompt) {
    echo $prompt;
    return trim(fgets(STDIN));
}

$celsius = getUserInput("Digite a temperatura em graus Celsius: ");

$fahrenheit = ($celsius * 9/5) + 32;

echo "A temperatura em Fahrenheit é: " . $fahrenheit . "°F" . PHP_EOL;

?>
