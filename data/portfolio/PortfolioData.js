
import portfolioImg from './portfolio.jpg'
import elearning from "./elearning.jpg"
import ecommerceLaravel from "./ecommerce-laravel.jpg"
import taskManagement from "./task-management.jpg"


const PortfolioSectionData = 
    [
    
        {
            slug:'elearning-laravel',
            image: elearning,      
            category:"Elearning Website",
            project_url:"https://edemy-next.herokuapp.com/",
            github_link:"",
            github_frontend:"https://github.com/rifat32/edemy",
            github_backend:"https://github.com/rifat32/edemy-laravel",
            description:'It is an elearning website where any person can become instructor or enroll in courses. Tt is an seo friendly website with server side rendering. It has lots of cool features. It uses laravel at the back-end and next js at the front end. And I will get 30% money for each course at time of purchasing.'
        },
        {
            slug:'ecommerce-laravel',
            image: ecommerceLaravel,      
            category:"Ecommerce Website",
            project_url:"https://typescript-react-ecommerce.netlify.app/",
            github_link:"",
            github_frontend:"https://github.com/rifat32/react-typescript-ecom/",
            github_backend:"https://github.com/rifat32/laravel-ecom",
            description:'This is a simple ecommerce website create using typescript and reactJs at the front-en and laravel at the back-end. And obviously I like to use passport instead of sanctum if you know laravel.'
        },
        {
            slug:'portfolio-website',
            image: portfolioImg,      
            category:"Portfolio Website",
            project_url:"https://rifatalashwad.herokuapp.com/",
            github_link:"https://github.com/rifat32/portfolio-next",
            github_frontend:"",
            github_backend:"",
            description:'This is my portfolio website. I have created this using next js. Actually I have created this website 3 times. 2 times using just reactJs and now finally with nextJs'
        },
        {
            slug:'task-management',
            image: taskManagement,      
            category:"Task Management",
            project_url:"https://task-management-laravel.netlify.app",
            github_link:"https://github.com/rifat32/task-manager-laravel",
            github_frontend:"",
            github_backend:"",
            description:'This is simple task manager website. it uses laravel at the back-end. this is actually just a crude but the laravel code was clean. It uses reactJs at the front-end. But honestly I did not create the front-end myself rather copied from other.'
        },
       
    ]




export default PortfolioSectionData;