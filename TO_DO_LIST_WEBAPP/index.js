const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if (inputBox.value === '')
    {
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        // add cross icon (\u00d7)
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)

    }
    inputBox.value = "";
    saveData();
}
// checked or unchacked and remove task

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save task in our browser

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML)
}

// always display save data

function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();