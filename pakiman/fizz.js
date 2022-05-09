let numeros = 100;
let divisible = false;

for(let i = 1; i <=100; i++)
{
    if(esDivisible ( i, 3))
    {
        document.write("fizz");
    }

    if(esDivisible(i,5))
    {
        document.write("buzz");
    }

    if(i%3 != 0 && i % 5 != 0)
    {
        document.write(i);
    }
    document.write("<br />");
}

function esDivisible(num, divisor)
{
    if(num % divisor == 0)

{
    return true;
}
else
{
    return false;
}
}