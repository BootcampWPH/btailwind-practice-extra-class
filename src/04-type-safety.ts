
function calculateTotal(price:number, quantity:number):number{
  return price * quantity
}

// masalah
// calculateTotal(10000, "dua")
const unsafeQuantity:any = "dua"
const unsafeTotal = calculateTotal(10000, unsafeQuantity)

// solusi
const quantity: number = 2
const total = calculateTotal(10000, quantity);

console.log("Total aman", total)

export {};
