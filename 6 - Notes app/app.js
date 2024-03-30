const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let allNotes = document.querySelectorAll(".notes");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notesList");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notesList", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () =>{
    const div = document.createElement("div");
    div.classList.add("notes");
    div.innerHTML = `
        <p contenteditable="true" class="inputbox"></p>
        <i class="fa-solid fa-trash"></i>
    `;
    notesContainer.appendChild(div);
    updateStorage();
});

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "I"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P"){
        allNotes = document.querySelectorAll(".notes");
        allNotes.forEach(nt => {
            nt.querySelector(".inputbox").onkeyup = function(){
                updateStorage();
            }
        })
    }
        
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


