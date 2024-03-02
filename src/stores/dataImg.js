import { ref } from "vue"

    export const projects = [
    {
        id: ref(1),
        title:'Mon CV',
        imgSrc: './assets/img/CV.png',
        techno: 'HTML / CSS',
        currentImage: './assets/img/CV.png',
        project_link: "https://github.com/Frostbowl/CV_masclet.git",
        logo_link: "/assets/githublogo.png",
        createdAt:  'Crée le 08/02/2024',
        picture: ['/assets/img/cv-header.png', '/assets/img/cv-left.png', '/assets/img/cv-right.png']
    },{
        id: ref(2),
        title: 'Desert du monde',
        imgSrc: ref('/assets/img/desert-du-monde.png'),
        techno: ref('HTML / CSS'),
        currentImage: ref("/assets/img/desert-du-monde.png"),
        project_link: ref("https://github.com/Frostbowl/D-serts-du-monde"),
        logo_link: ref("/assets/githublogo.png"),
        createdAt: ref( 'Crée le 13/02/2024'),
        picture: ref(['/assets/img/desert-footer.png', '/assets/img/desert-header.png' , '/assets/img/desert-left.png', '/assets/img/desert-right.png']) 
    },{
        id: ref(3),
        title: 'my HOME space',
        imgSrc: ref('/assets/img/homespace.png'),
        techno: ref('HTML / CSS'),
        currentImage: ref("/assets/homespace.png"),
        project_link: ref("https://github.com/Frostbowl/MyHomeSpace"),
        logo_link: ref("/assets/githublogo.png"),
        createdAt: ref( 'Crée le 11/02/2024'),
        picture: ref(['/assets/img/homespace-footer.png', '/assets/img/homespace-header.png' , '/assets/img/homespace-main.png']) 
    },{
        id: ref(4),
        title: 'Projet Espace commentaire ',
        imgSrc: ref('/assets/img/projet-js-commentary-space.png'),
        techno: ref('HTML / CSS / JavaScript'),
        currentImage: ref("/assets/spacecom.png"),
        project_link: ref("https://github.com/Frostbowl/Dynamiser-un-commentaire"),
        logo_link: ref("/assets/githublogo.png"),
        createdAt: ref( 'Crée le 19/02/2024'),
        picture: ref(['/assets/img/projet-js-comments-1.png', '/assets/img/projet-js-comments-2.png' , '/assets/img/projet-js-form.png']) 
    }

]
