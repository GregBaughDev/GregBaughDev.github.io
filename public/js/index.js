let projectSelect = location.href.split("?")[1]

let projects = [
    {
        name: "Task Manage",
        projectLink: "https://taskmanage2.herokuapp.com/",
        codeLink: "https://github.com/GregBaughDev/Task-Manage-v2",
        description: "Task Manage....",
        images: [],
    },
    {
        name: "Australian Record Stores"
    },
    {
        name: "E-Trading Post"
    },
    {
        name: "Mr. Coffee"
    },
    {
        name: "Assorted Graphic Design Work"
    },
    {
        name: "Lucy Wilkins Fashion"
    },
    {
        name: "bridgr"
    }
]

document.querySelector("#title").textContent = projects[parseInt(projectSelect)].name
