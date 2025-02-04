function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
let n=prompt("Enter a number ");
n=Number(n);
console.log(Number(reverse_a_number(n)));
