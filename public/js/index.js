let projectSelect = location.href.split("?")[1]

let projects = [
    {
        name: "Task Manage",
        projectLink: "https://taskmanage2.herokuapp.com/",
        codeLink: "https://github.com/GregBaughDev/Task-Manage-v2",
        description: "Task Manage is a kanban board style task management app. The app allows users to create, update and delete task cards to keep track of their projects. It has four columns indicating each stage of the current task and users can easily move cards between the columns.",
        description2: "I built this project using ReactJS for the frontend and NodeJS/Express on the backend. Express handles the calls to the MongoDB NoSQL database. MongoDB was selected for the database due to its flexibility and ease of scaling if extra features are added in the future.",
        images: ["https://res.cloudinary.com/dbdcclhzw/image/upload/v1632802545/Projects/Task/TM1_gbybew.png", 
            "https://res.cloudinary.com/dbdcclhzw/image/upload/v1632802545/Projects/Task/TM2_bfjzae.png", 
            "https://res.cloudinary.com/dbdcclhzw/image/upload/v1632802545/Projects/Task/TM3_rgwfzx.png"],
        technologies: ['HTML', 'CSS', 'React', 'JavaScript', 'MongoDB', 'Styled Components', 'Figma']
    },
    {
        name: "Australian Record Stores",
        projectLink: "https://ozrecordstore.herokuapp.com/",
        codeLink: "https://github.com/GregBaughDev/Record_Store",
        description: "Australian Record Stores is a listing site which allows users to upload records on record stores based around Australia. Registered users can create a new record store and add images. Only authors of stores can edit them. Any registered users can leave reviews along with editing and deleting their own reviews.",
        description2: "I built this project using the EJS template engine and NodeJS/Express to dynamically update and retrieve information from the database. MongoDB is the database used on this application. Bootstrap has been used as the CSS framework on this application.",
        images: ["https://res.cloudinary.com/dbdcclhzw/image/upload/v1632803961/Projects/Record/RS1_qoxrom.png",
            "https://res.cloudinary.com/dbdcclhzw/image/upload/v1632803963/Projects/Record/RS2_n5tsbd.png",
            "https://res.cloudinary.com/dbdcclhzw/image/upload/v1632803967/Projects/Record/RS3_jfeqpa.png"],
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

document.querySelector("#title").textContent = `${projects[parseInt(projectSelect)].name}`
document.querySelector("#project").innerHTML = `<a target='_blank' href='${projects[parseInt(projectSelect)].projectLink}'>Demo</a>`
document.querySelector("#code").innerHTML = `<a target='_blank' href='${projects[parseInt(projectSelect)].codeLink}'>Code</a>`
document.querySelector("#description").textContent = projects[parseInt(projectSelect)].description
document.querySelector("#description2").textContent = projects[parseInt(projectSelect)].description2

const techlist = document.createElement("ul")

for(let tech in projects[parseInt(projectSelect)].technologies){
    let li = document.createElement("li")
    li.textContent = projects[parseInt(projectSelect)].technologies[tech]
    techlist.append(li)
}

document.querySelector(".project-body").prepend(techlist)

let imageCount = 1
document.querySelector("#proj-image").setAttribute("src", projects[parseInt(projectSelect)].images[imageCount])
setInterval(() => {
    if(imageCount == projects[parseInt(projectSelect)].images.length - 1){
        imageCount = 0
    } else {
        imageCount++;
    }
    document.querySelector("#proj-image").setAttribute("src", projects[parseInt(projectSelect)].images[imageCount])
    console.log(imageCount)
}, 3000)
