let meine_map = new Map(); 

meine_map.set("Test", "Wert zur Eigenschaft Test")
meine_map.set(13, "Wert zur Eigenschaft 13")
meine_map.set([], "Wert zur Eigenschaft []")
meine_map.set(function() {}, "Wert zur Eigenschaft Funktion")
meine_map.set({}, "Wert zur Eigenschaft {}")


let mein_set = new Set(); 

mein_set.add("Test")
mein_set.add(13)
mein_set.add(function() {})
mein_set.add([])          
mein_set.add({})        
mein_set.add({})        
mein_set.add("Test")

// console.log(meine_map.entries()); 
// console.log(meine_map.values()); 
// console.log(meine_map.keys()); 

for (let [eigenschaft, wert] of meine_map.entries()) {
    console.log(eigenschaft)
    console.log(wert)
}

for(let eigenschaft of meine_map.keys()) {
    console.log(eigenschaft)
}


for (let wert of meine_map.values()) {
    console.log(wert)
}

for(let wert of mein_set.values()) {
    console.log(wert)
}
