document.querySelector(".list").addEventListener("click", (e)=>{
    if(e.target.className == "a2"){
        e.target.parentNode.remove()
        if(document.querySelector(".list").children.length === 0){
            let empty = document.createElement("h2")
            empty.innerText = "your list is empty"
            empty.style.color = "black"
            empty.id = "po"
            document.querySelector(".list").appendChild(empty)
    }}
})

document.querySelector("button").addEventListener("click", ()=>{
    let x = document.querySelector("input")
    if(x.value.trim() === ""){
        return ;
    }
    if(document.querySelector("#po")){
        document.querySelector("#po").remove()
    }
    let newh2 = document.createElement("h2")
    newh2.innerText = x.value
    newh2.className = "title"
    
    let isdup = Array.from(document.querySelectorAll(".title")).some(e=>e.innerText == x.value.trim())
    if(isdup) return ;

    let newspan = document.createElement("span")
    newspan.className = "a1"

    let newbtn = document.createElement("button")
    newbtn.innerText = "delete"
    newbtn.className = "a2"


    newspan.appendChild(newh2)
    newspan.appendChild(newbtn)

    document.querySelector(".list").appendChild(newspan)
    x.value = ""
})

let search = document.querySelector("#o1")

search.addEventListener("input", ()=>{
    const query = search.value.trim().toLowerCase()

    document.querySelectorAll(".list .a1").forEach(item=>{
        var title = item.querySelector(".title").innerText.toLowerCase()

        if(title.includes(query)){
            item.style.display = "flex"
        }else{
            item.style.display = "none"
        }
    })
})




