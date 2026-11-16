function printId(id: string | number): void {
  if (typeof id === 'number') {
    console.log('ID teks:', id.toString);
  } else {
    console.log('ID angka:', id.toUpperCase());
  }
}

printId('user-01');
printId(42);
