
const api = "https://www.breakingbadapi.com/api/characters";
async function get(){


try{
    const response = await fetch(api)
 const data  = await response.json()
 printData(data)
}
catch(e){
   console.log("error:" , e.massage)  
}



}
function printData(data){
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")
  
header.innerHTML += `<select class="form-control" onchange= "getch(this.value)" >

<option> please select</option>
${data.map(character => `<option>${character.name}</Option>`)} 
</select> `
    console.log(header)


}

async  function getch(e){
   if( e !== 'please select'){
    const response = await fetch(`${api}?name=${e}`)
    const data = await response.json()
    content.innerHTML = `<h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].portrayed}</h4>
    <img src="${data[0].img}" width="250px">
    `
     }
   
    }
get()