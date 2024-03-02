import { ref } from "vue";

export const projects = [
    {
        id: ref(1),
        title: 'Mon CV',
        imgSrc: ref('/assets/CV.png'),
        techno: ref('HTML / CSS'),
        currentImage: ref("/assets/CV.png"),
        project_link: ref("https://github.com/Frostbowl/CV_masclet.git"),
        logo_link: ref("/assets/githublogo.png"),
        createdAt: ref( 'Crée le 08/02/2024'),
        picture: ref(['/assets/cutCv1.png', '/assets/cutCv2.pgn' , '/assets/cutCv3.png'])
    },{
        id: ref(2),
        title: 'Desert du monde',
        imgSrc: ref('/assets/Dsert.png'),
        techno: ref('HTML / CSS'),
        currentImage: ref("/assets/Dsert.png"),
        project_link: ref("https://github.com/Frostbowl/D-serts-du-monde"),
        logo_link: ref("/assets/githublogo.png"),
        createdAt: ref( 'Crée le 13/02/2024'),
        picture: ref(['/assets/cutDsert1.png', '/assets/cutDsert2.pgn' , '/assets/cutDsert3.png', '/assets/cutDsert4.png']) 
    },{
        id: ref(3),
        title: 'myHOMEspace',
        imgSrc: ref('/assets/homespace.png'),
        techno: ref('HTML / CSS'),
        currentImage: ref("/assets/homespace.png"),
        project_link: ref("https://github.com/Frostbowl/MyHomeSpace"),
        logo_link: ref("/assets/githublogo.png"),
        createdAt: ref( 'Crée le 11/02/2024'),
        picture: ref(['/assets/mhs1.png', '/assets/mhs2.pgn' , '/assets/mhs3.png']) 
    },{
        id: ref(4),
        title: 'spacecom',
        imgSrc: ref('/assets/spacecom.png'),
        techno: ref('HTML / CSS / JavaScript'),
        currentImage: ref("/assets/spacecom.png"),
        project_link: ref("https://github.com/Frostbowl/Dynamiser-un-commentaire"),
        logo_link: ref("/assets/githublogo.png"),
        createdAt: ref( 'Crée le 19/02/2024'),
        picture: ref(['/assets/com1.png', '/assets/com2.pgn' , '/assets/com3.png']) 
    }

]
