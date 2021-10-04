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
        projectLink: "https://e-trading-post.herokuapp.com/",
        codeLink: "https://github.com/GregBaughDev/E-Trading_Post",
        description: "E-Trading Post is a product listing site which allows users to add products for sale. Products can either be listed as either auction or 'buy it now'.",
        description2: "This web application was built as part of my Diploma course in ICT (Back end web development). Currently, the application allows any user to add or edit products on the site. The project required me to design the UI and develop the CRUD functionality for the application. On future developments I would add user sign up and login to allow only registered users to add products and product owners to edit their own listings.",
        images: ["https://res.cloudinary.com/dbdcclhzw/image/upload/v1632888011/Projects/E-Trading/ET2_avovew.png",
            "https://res.cloudinary.com/dbdcclhzw/image/upload/v1632888011/Projects/E-Trading/ET1_rjulwj.png",
            "https://res.cloudinary.com/dbdcclhzw/image/upload/v1632888010/Projects/E-Trading/ET3_ddq3jn.png"],
        technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'Figma']
    },
    {
        name: "Mr. Coffee",
        projectLink: "https://mr-coffee-scheduling.herokuapp.com/",
        codeLink: "https://github.com/GregBaughDev/INCO-Academy-INCODE-Project-3/tree/3c",
        description: "This project is a web application I built as part of my full stack web development bootcamp. The application allows staff at a fictional business to view their work schedules. Users can input new schedules and create new user records.",
        description2: "As per the project requirements, the application is built using NodeJS and Express on the backend and HTML and CSS on the front end. The project suggested to use EJS for the templating engine but as I already had experience using this I used the Handlebars templating engine. We were also required to use Postgres as the database for this project. I had used NoSQL databases before with Express so this project was a good opportunity to use SQL in an Express application. As I am familiar with connecting to a SQL database in PHP, this wasn't too difficult to do in Express/NodeJS.",
        images: ["https://res.cloudinary.com/dbdcclhzw/image/upload/v1633071002/Projects/Coffee/coffee1_nxez1w.png",
            "https://res.cloudinary.com/dbdcclhzw/image/upload/v1633070999/Projects/Coffee/coffee3_g1pf78.png",
            "https://res.cloudinary.com/dbdcclhzw/image/upload/v1633070999/Projects/Coffee/coffee2_frbbba.png"],
        technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Express', 'Handlebars', 'Postgres']
    },
    {
        name: "Assorted Graphic Design Work"
    },
    {
        name: "Lucy Wilkins Fashion",
        projectLink: "https://www.lucywilkinsfashion.com/shop",
        description: "Coming Soon",
        images: [],
        technologies: ['Figma']
    },
    {
        name: "bridgr",
        projectLink: "https://bridgr-extension.herokuapp.com/",
        codeLink: "https://github.com/GregBaughDev/bridgr",
        description: "Coming Soon",
        images: [],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Google Chrome']
    }
]

document.querySelector("#title").textContent = `${projects[parseInt(projectSelect)].name}`
document.querySelector("#project").innerHTML = `<a target='_blank' href='${projects[parseInt(projectSelect)].projectLink}'>Demo</a>`
document.querySelector("#code").innerHTML = `<a target='_blank' href='${projects[parseInt(projectSelect)].codeLink}'>Code</a>`
document.querySelector("#description").textContent = projects[parseInt(projectSelect)].description
document.querySelector("#description2").textContent = projects[parseInt(projectSelect)].description2
document.querySelector("title").textContent = `Greg Baugh || ${projects[parseInt(projectSelect)].name}`

const techlist = document.createElement("ul")

for(let tech in projects[parseInt(projectSelect)].technologies){
    let li = document.createElement("li")
    li.textContent = projects[parseInt(projectSelect)].technologies[tech]
    techlist.append(li)
}

document.querySelector(".project-body").prepend(techlist)

if(projects[parseInt(projectSelect)].images.length > 0){
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
} else {
    document.querySelector(".proj-image-holder").setAttribute("style", "display: none")
}
