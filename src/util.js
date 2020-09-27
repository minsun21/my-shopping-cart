export default function fromatCurrency(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}