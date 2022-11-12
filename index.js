// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

// This function set parameters on our objects

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
newImage('assets/green-character.gif',100,100)

newImage('assets/pine-tree.png',450,200)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)

// let sword = document.createElement("img")
//   sword.src = "assets/sword.png"
//   sword.style.position = "Fixed"
//   sword.style.left = "500px"
//   sword.style.bottom = "405px"
//   document.append(sword)
  
//   sword.addEventListener("click", function() {
//     sword.remove()
//   })

// This function is able to add a click event 
  function newItem (url, left, bottom, ){
     let item = newImage (url, left, bottom, )

     item.addEventListener("dblclick", function(){
        item.remove()
     })

  }
  // Calling the funtion so we can add More img
  newItem("assets/sword.png", 500, 450)
  newItem("assets/sheild.png", 165, 185)
  newItem("assets/staff.png", 600, 100)

  
