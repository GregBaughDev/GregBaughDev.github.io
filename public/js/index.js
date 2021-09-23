let projectSelect = location.href.split("?")[1]

let projects = [
    {
        name: "Task Manage",
        projectLink: "https://taskmanage2.herokuapp.com/",
        codeLink: "https://github.com/GregBaughDev/Task-Manage-v2",
        description: "Task Manage is a kanban board style task management app. The app allows users to create, update and delete task cards to keep track of their projects. It has four columns indicating each stage of the current task and users can easily move cards between the columns.",
        images: [],
        technologies: ['HTML', 'CSS', 'React', 'JavaScript', 'MongoDB', 'Styled Components', 'Figma']
    },
    {
        name: "Australian Record Stores",
        projectLink: "https://ozrecordstore.herokuapp.com/",
        codeLink: "https://github.com/GregBaughDev/Record_Store",
        description: "Australian Record Stores...",
        images: [],
        technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Express', 'EJS', 'MongoDB']
    },
    {
        name: "E-Trading Post",
        projectLink: "https://github.com/GregBaughDev/E-Trading_Post",
        codeLink: "https://github.com/GregBaughDev/E-Trading_Post",
        description: "E-Trading Post...",
        images: [],
        technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'Figma']
    },
    {
        name: "Mr. Coffee",
        projectLink: "https://github.com/GregBaughDev/INCO-Academy-INCODE-Project-3",
        codeLink: "https://github.com/GregBaughDev/INCO-Academy-INCODE-Project-3",
        description: "Mr. Coffee...",
        images: [],
        technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Express', 'EJS', 'Postgres']
    },
    {
        name: "Assorted Graphic Design Work"
    },
    {
        name: "Lucy Wilkins Fashion",
        projectLink: "https://www.lucywilkinsfashion.com/shop",
        description: "Lucy Wilkins Fashion...",
        images: [],
        technologies: ['Figma']
    },
    {
        name: "bridgr",
        projectLink: "https://github.com/GregBaughDev/bridgr",
        codeLink: "https://github.com/GregBaughDev/bridgr",
        description: "bridgr...",
        images: [],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Google Chrome']
    }
]

document.querySelector("#title").textContent = `Project: ${projects[parseInt(projectSelect)].name}`
document.querySelector("#project").innerHTML = `<a target='_blank' href='${projects[parseInt(projectSelect)].projectLink}'>Demo</a>`
document.querySelector("#code").innerHTML = `<a target='_blank' href='${projects[parseInt(projectSelect)].codeLink}'>Code</a>`
document.querySelector("#description").textContent = projects[parseInt(projectSelect)].description

const techlist = document.createElement("ul")

for(let tech in projects[parseInt(projectSelect)].technologies){
    let li = document.createElement("li")
    li.textContent = projects[parseInt(projectSelect)].technologies[tech]
    techlist.append(li)
}

document.querySelector(".project-body").prepend(techlist)