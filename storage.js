// Define the database as an object
const HomeInventoryDatabase = {
furniture: [],
crafts: [],
electronics: []
}
 
 // Craft data items
 const wrench = {
    name: "wrench",
    location: "basement",
    description: "use to tighten things."
 }
 
 const iron = {
    name: "Iron",
    location: "basement",
    description:"used to iron shirts"
 }
 
 const hammer = {
    name: "Hammer",
    location: "basement",
    description: "used to hammer things."
 }
 
 const saw = {
    name: "saw",
    location: "basement",
    description: "used to cut things"
 }
 
 // Furniture data items
 const chair = {
    name: "Chair",
    location: "Living room",
    description: "I sit in it"
 }
 
 const tvStand = {
    name: "TVStand",
    location: "Living room",
    description: "set TV on it"
  }
 
 const table = {
    name: "table",
    location: "Living room",
    description: "We eat food at the table"
  }
 
 
 // Electronics data items
 
 const tv = {
    name: "TV",
    location: "bedroom",
    description: "used to watch netflix"
  }
 
 const computer = {
    name: "Computer",
    location: "bedroom",
    description: "used to surf internet"
  }
 
 const blender = {
    name: "blender",
    location: "Kitchen",
    description: "I make smoothies sometimes"
  }
 

 // Adding each function to database
 
 HomeInventoryDatabase.crafts.push(wrench, iron, hammer, saw)
 HomeInventoryDatabase.furniture.push(chair, tvStand, table)
 HomeInventoryDatabase.electronics.push(tv, computer, blender)

 const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
saveDatabase(HomeInventoryDatabase, "HomeInventory");

const inventoryEl = document.querySelector("#my-inventory");

for(let type in HomeInventoryDatabase){
    const currentTypeArray = HomeInventoryDatabase[type];
    currentTypeArray.forEach(itemInArray => {
        const itemSection = document.createElement("section");
        
        for(let prop in itemInArray){
            const pComponent = document.createElement("p")
            pComponent.textContent = itemInArray[prop]
            itemSection.appendChild(pComponent)
            inventoryEl.appendChild(itemSection)
        }
    });
}


