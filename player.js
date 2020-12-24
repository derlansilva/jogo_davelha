class Player {
    constructor(text , player01 , player02 , name){

        this.text = document.querySelector(text)
        this.player01 = document.querySelector(player01)
        this.player02 =  document.querySelector(player02)
        this.nameP = document.querySelector(name)
        this.btnInit = document.querySelector('.btnInit')
        this.content = document.querySelector('.content')
       
        this.initBtn()
        
    }

    displayPlayer(player){
        this.text.innerHTML = `Jogador ${player} venceu`
    }

    getPlayer(valor , player){
    
            let btn = []
            for(let x = 0 ;x <=8 ; x++){
                btn.push(document.querySelector(`#btn${x}`).value)

            }

            for(let i = 0 ;i <=3 ; i++){
                
                if(btn[0] == valor  && btn[1] == valor && btn[2]== valor){
                    this.displayPlayer(player)
                    document.querySelector('#btn0').style.background = 'red'
                    document.querySelector('#btn1').style.background = 'red'
                    document.querySelector('#btn2').style.background = 'red'
                }

                if(btn[0] == valor  && btn[3] == valor && btn[6]== valor){
                    
                    this.displayPlayer(player)
                    document.querySelector('#btn0').style.background = 'red'
                    document.querySelector('#btn3').style.background = 'red'
                    document.querySelector('#btn6').style.background = 'red'
                }

                if(btn[0] == valor  && btn[4] == valor && btn[8]== valor){
                    
                    this.text.innerHTML = `Jogador ${player} venceu`
                    document.querySelector('#btn0').style.background = 'red'
                    document.querySelector('#btn4').style.background = 'red'
                    document.querySelector('#btn8').style.background = 'red'
                }
                if(btn[1] == valor  && btn[4] == valor && btn[7]== valor){

                    
                    this.displayPlayer(player)
                    document.querySelector('#btn1').style.background = 'red'
                    document.querySelector('#btn4').style.background = 'red'
                    document.querySelector('#btn7').style.background = 'red'

                }
                if(btn[2] == valor  && btn[5] == valor && btn[8]== valor){
                    
                    this.displayPlayer(player)
                    document.querySelector('#btn2').style.background = 'red'
                    document.querySelector('#btn5').style.background = 'red'
                    document.querySelector('#btn8').style.background = 'red'
                    
                }
                if(btn[3] == valor  && btn[4] == valor && btn[5]== valor){
                    
                    this.displayPlayer(player)
                    document.querySelector('#btn3').style.background = 'red'
                    document.querySelector('#btn4').style.background = 'red'
                    document.querySelector('#btn5').style.background = 'red'

                }

                if(btn[6] == valor  && btn[7] == valor && btn[8]== valor){
                    
                    this.displayPlayer(player)
                    document.querySelector('#btn6').style.background = 'red'
                    document.querySelector('#btn7').style.background = 'red'
                    document.querySelector('#btn8').style.background = 'red'

                }

                if(btn[6] == valor  && btn[4] == valor && btn[2]== valor){

                    this.displayPlayer(player)
                    document.querySelector('#btn6').style.background = 'red'
                    document.querySelector('#btn4').style.background = 'red'
                    document.querySelector('#btn2').style.background = 'red'
                }

            }

    }

    initBtn(){
        let i = 0;

        let jogadorInit = Math.round(Math.random() * 10);

        if(jogadorInit%2 != 0){
            i = 1
        }

        this.btnInit.addEventListener('click' , e => {

            if(!this.player01.value || !this.player02.value){
                alert("precisa por os nomes dos jogadores")
            }else{

                this.disabledDisplay()
            
                this.nameP.innerHTML = `${this.player01.value} `;

                [...document.querySelectorAll('.btn')].forEach((btn , index) => {
    
                    btn.addEventListener('click' , event => {
   
                            if(btn.value == 1 || btn.value == 2){

                                alert('campo ja selecionado')

                            }else{
        
        
                                    if(i%2 ==0 ){
                                       
                                        let imgx = document.createElement('div')

                                        imgx.innerHTML =  `<img src="./iconX.png" class="img" alt="">`

                                        btn.appendChild(imgx)

                                        btn.value = 1

                                        i ++

                                        if(i >2 ){

                                            let player = this.player01.value

                                            this.getPlayer( btn.value , player)

                                        }
                                                    
                                    }else{
                                        
                
                                        let img = document.createElement('div')

                                        img.innerHTML = `<img src="./circulo.png" class="img" alt="">`

                                        btn.appendChild(img)

                                        btn.value = 2

                                        i++
                
                                        if(i >2 ){

                                            let player = this.player02.value
                
                                            this.getPlayer( btn.value , player)

                
                                        }
                
                                    }
                                
            
                            }
            
                        if(i > 9){

                            alert('deu velha , ninguem ganhou')
          
                        }
                    })
                })

            }
            
        });
        
    }

    disabledDisplay(){

        this.content.style.display = 'grid'
        this.btnInit.style.display = 'none'
        this.player01.style.display = 'none'
        this.player02.style.display = 'none'


    }
}