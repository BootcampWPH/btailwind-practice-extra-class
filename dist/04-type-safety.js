function calculateTotal(price, quantity) {
    return price * quantity;
}
// masalah
// calculateTotal(10000, "dua")
const unsafeQuantity = "dua";
const unsafeTotal = calculateTotal(10000, unsafeQuantity);
// solusi
const quantity = 2;
const total = calculateTotal(10000, quantity);
console.log("Total aman", total);
export {};
