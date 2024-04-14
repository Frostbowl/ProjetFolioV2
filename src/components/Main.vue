<template>
        <section id="presentation" >
            <h1>Qui suis-je ?</h1><br>
                <p>Passionné depuis toujours par l'informatique en général, j'ai développé au fil du temps une appétence non négligeable pour le code 
                c'est pourquoi, lorsque j'ai envisagé une reconversion professionnelle, le métier de développeur Web était pour moi une évidence.
                Fort d'une motivation sans pareil, je vous invite à découvrir mes créations par le biais de ce PortFolio entièrement développé par mes
                soins.
                </p><br>
            <h1>Mes compétences:</h1>
                <div class="skill">
                    <div class="skillName">
                        <span>HTML 5</span>
                        <span>CSS 3</span>
                        <span>JavaScript</span>
                    </div>
                    <div class="barContainer">
                        <div class="barHtml"><p>50%</p></div>
                        <div class="barCss"><p>30%</p></div>
                        <div class="barJs"><p>10%</p></div>
                    </div>
                </div>
        </section>
</template>

<style scoped>

*{
    font-weight: bold;
}

section{
    scroll-margin-top: 170px;
}

.skill{
    display: flex;
}
.skill .skillName{
    display: flex;
    flex-direction: column;
    padding: 10px 15px;

}

.skill .skillName span{
    margin: 5px 0px;
    background: linear-gradient(145deg, #575757, #737373);
    border-radius: 35%;
    box-shadow: inset 25.23px 25.23px 17px #5C5C5C, inset -25.23px -25.23px 17px #6E6E6E;
    padding: 10px 15px;
    text-align: center;
    border: 5px solid grey;
}

.barHtml p{
    width: 250px;
    height: 30px;
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(255,255,255,1) 49%, rgba(115,115,115,1) 51%);
    color: black;
    font-weight: bold;
    font-size: 1.4em;
}
.barCss{
    width: 250px;
    height: 30px;
    background: linear-gradient(90deg, rgba(255,255,255,1) 29%, rgba(115,115,115,1) 31%);
    border-radius: 20px;
    color: black;
    font-weight: bold;
    font-size: 1.4em;
}
.barJs{
    width: 250px;
    height: 30px;
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(255,255,255,1) 9%, rgba(115,115,115,1) 11%);
    color: black;
    font-weight: bold;
    font-size: 1.4em;
}
.barContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

#presentation{
    border: 3px solid white;
    border-radius: 15px;
    box-shadow: 0 0 30px whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 50px;
    background-color: black;
}

p{
    text-align: center;
    padding: 0px 80px;
}
</style>