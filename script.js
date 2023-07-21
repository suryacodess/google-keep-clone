console.log("google keep");

const title = document.querySelector("#input-title");
const description = document.querySelector("#input-description");
const descriptionDiv = document.querySelector("#input-description-div");

const addNote = document.querySelector("#add-note");

title.addEventListener("focus", () => {
  descriptionDiv.classList.add("d-block");
});

const notes = document.querySelector(".notes");
addNote.addEventListener("click", (e) => {
  const titleVal = title.value;
  const descVal = description.value;

  if (titleVal.length < 4 || descVal.length < 6) {
    return;
  } else {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    const noteTitle = document.createElement("div");
    noteTitle.setAttribute("id", "title");
    noteTitle.classList.add("title");
    noteTitle.innerHTML = `<p>${title.value}</p>`;

    const noteDescription = document.createElement("div");
    noteDescription.setAttribute("id", "description");
    noteDescription.classList.add("description");
    noteDescription.innerHTML = `<p>${description.value}</p>`;

    const noteOptions = document.createElement("div");
    noteOptions.classList.add("options");
    noteOptions.innerHTML = `<div class="note-bg">
          <button id="note-bg">
          <i class="fa-solid fa-palette"></i>
          </button>
    </div>
    
    <div class="note-delete">
        <button id="note-delete">
        <i class="fa-solid fa-trash"></i>
        </button>
    </div>

    <div class="bg">
        <div class="bg-div"></div>
        <div class="bg-div"></div>
        <div class="bg-div"></div>
        <div class="bg-div"></div>
        <div class="bg-div"></div>
        <div class="bg-div"></div>
        <div class="bg-div"></div>
    </div>

    `;

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteDescription);
    noteDiv.appendChild(noteOptions);

    notes.appendChild(noteDiv);

    title.value = " ";
    description.value = " ";
    descriptionDiv.classList.remove("d-block");

    // deleting note
    const deleteNotes = document.querySelectorAll(".note");
    deleteNotes.forEach((note) => {
      note.addEventListener("click", (e) => {
        if (e.target.classList[1] === "fa-trash") {
          note.remove();
        }
        if (e.target.classList[1] === "fa-palette") {
          console.log("bgcolor");
        }
      });
    });
  }
});

const view = document.querySelector("#view");
view.addEventListener("click", (e) => {
  notes.classList.toggle("medium");
});
