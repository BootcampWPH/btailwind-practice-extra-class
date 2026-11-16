function printId(id) {
    if (typeof id === 'string') {
        console.log('ID teks:', id.toUpperCase());
    }
    else {
        console.log('ID angka:', id.toFixed(0));
    }
}
printId("user-01");
printId(42);
export {};
