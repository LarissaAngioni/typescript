const frutas: Set<string> = new Set<string>();

frutas.add("Maçã");
frutas.add("Banana");
frutas.add("Abacate");
frutas.add("Banana");

console.table(frutas);

console.log(`A fruta Banana existe? ${frutas.has("Banana")}`);

frutas.delete("Banana");

console.table(frutas);
