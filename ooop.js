// start settent.
document.querySelector(".setting").onclick = function (){
    document.querySelector(".setting-gear").classList.toggle("open")
}







// end setting 
let landingpage = document.querySelector(".landing-page")

let imgarra = ["https://enwpgo.files.wordpress.com/2021/06/d8b32-image-gallery1.jpg?w=1024" ,"https://enwpgo.files.wordpress.com/2019/09/bedfd-sw-714803.jpg?w=1000"]

setInterval(() => {
    let randumimg = Math.floor(Math.random() * imgarra.length) ;
    landingpage.style.backgroundImage = imgarra[randumimg]
},1000)
// end landingpage

// select our skills 
let ourskills = document.querySelector(".skills")
window.onscroll = function (){
    let skillsoffsertop = ourskills.offsetTop ;
    let skillsouterHeight = ourskills.offsetHeight;
    let windowheight = this.innerHeight;
    let windowscrolltop = this.pageYOffset
   
    if (windowscrolltop > (skillsoffsertop + skillsouterHeight - windowheight)){
         let allskills = document.querySelectorAll(".skill-box .skills-progress span");
         allskills.forEach(skill => {
             skill.style.width = skill.dataset.progress;
         })
    }

}
// start gallary 
let ourgalary = document.querySelectorAll(".gallary img")
ourgalary.forEach(img => {
    img.addEventListener('click' , (e) =>{
        
    })
})
