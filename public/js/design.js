const buttons = document.querySelectorAll(".img-control")
let imgCount = 0

const images = [
    {
        image: "https://res.cloudinary.com/dbdcclhzw/image/upload/v1633413476/Projects/Design/RACSBook_redkhy.jpg",
        tagline: "Client Work - Logo design for RACS Book Club events. The logo was incorporated on mail outs and social media."
    },
    {
        image: "https://res.cloudinary.com/dbdcclhzw/image/upload/v1633413478/Projects/Design/ASRC_sgbsqe.jpg",
        tagline: "Client Work - Social media assets designed for ASRC Catering.",
    },
    {
        image: "https://res.cloudinary.com/dbdcclhzw/image/upload/v1633413473/Projects/Design/SCLAN_owhs8i.jpg",
        tagline: "Client Work - Logo design for the SCLAN network at RACS. The logo was used on websites and reports."
    },
    {
        image: "https://res.cloudinary.com/dbdcclhzw/image/upload/v1633413577/Projects/Design/81690_umpkin.jpg",
        tagline: "Student Work - As part of my design studies I redesigned the branding for Adelaide Metro. This is a mockup of the branding used in a train station."
    },
    {
        image: "https://res.cloudinary.com/dbdcclhzw/image/upload/v1633413668/Projects/Design/Jar_front_k0fgdw.jpg",
        tagline: "Student Work - Branding work for a gender neutral beauty brand called Alle."
    },
    {
        image: "https://res.cloudinary.com/dbdcclhzw/image/upload/v1633413741/Projects/Design/12-Card_mock-up_oq1cof.jpg",
        tagline: "Student Work - Mockups of travel passes designed as part of my Adelaide Metro redesign."
    },
    {
        image: "https://res.cloudinary.com/dbdcclhzw/image/upload/v1633413774/Projects/Design/Underwear_svb1bw.jpg",
        tagline: "Student Work - Packaging mockups."
    }
]

document.querySelector("#design-image").setAttribute("src", images[imgCount].image)
document.querySelector("#design-tag").textContent = images[imgCount].tagline

for(let button of buttons){
    button.addEventListener("click", (e) => {
        let control = e.target.innerText
        if(control === ">" && imgCount < images.length - 1){
            imgCount++
        } else if (control === ">" && imgCount === images.length - 1){
            imgCount = 0
        } else if (control === "<" && imgCount > 0){
            imgCount--
        } else if (control === "<" && imgCount === 0){
            imgCount = images.length - 1
        }
        document.querySelector("#design-image").setAttribute("src", images[imgCount].image)
        document.querySelector("#design-tag").textContent = images[imgCount].tagline
    })
}

