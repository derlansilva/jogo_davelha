class Player {
    constructor(text , player01 , player02 , name){

        this.text = document.querySelector(text)
        this.player01 = document.querySelector(player01)
        this.player02 =  document.querySelector(player02)
        this.nameP = document.querySelector(name)
       
        this.initBtn()
    }

    getPlayer(){
    

            let btn = []
            for(let x = 0 ;x <=8 ; x++){
                btn.push(document.querySelector(`#btn${x}`).value)

            }

            for(let i = 0 ;i <=3 ; i++){
                
                if(btn[0] == 1  && btn[1] == 1 && btn[2]== 1){
                    this.text.innerHTML = `Jogador ${this.player01.value} venceu`
                    document.querySelector('#btn0').style.background = 'red'
                    document.querySelector('#btn1').style.background = 'red'
                    document.querySelector('#btn2').style.background = 'red'
                }

                if(btn[0] == 1  && btn[3] == 1 && btn[6]== 1){
                    
                    this.text.innerHTML = `Jogador ${this.player01.value} venceu`
                    document.querySelector('#btn0').style.background = 'red'
                    document.querySelector('#btn3').style.background = 'red'
                    document.querySelector('#btn6').style.background = 'red'
                }

                if(btn[0] == 1  && btn[4] == 1 && btn[8]== 1){
                    
                    this.text.innerHTML = `Jogador ${this.player01.value} venceu`
                    document.querySelector('#btn0').style.background = 'red'
                    document.querySelector('#btn4').style.background = 'red'
                    document.querySelector('#btn8').style.background = 'red'
                }
                if(btn[1] == 1  && btn[4] == 1 && btn[7]== 1){

                    
                    this.text.innerHTML = `Jogador ${this.player01.value} venceu`
                    document.querySelector('#btn1').style.background = 'red'
                    document.querySelector('#btn4').style.background = 'red'
                    document.querySelector('#btn7').style.background = 'red'

                }
                if(btn[2] == 1  && btn[5] == 1 && btn[8]== 1){
                    
                    this.text.innerHTML = `Jogador ${this.player01.value} venceu`
                    document.querySelector('#btn2').style.background = 'red'
                    document.querySelector('#btn5').style.background = 'red'
                    document.querySelector('#btn8').style.background = 'red'
                    
                }
                if(btn[3] == 1  && btn[4] == 1 && btn[5]== 1){
                    
                    this.text.innerHTML = `Jogador ${this.player01.value} venceu`
                    document.querySelector('#btn3').style.background = 'red'
                    document.querySelector('#btn4').style.background = 'red'
                    document.querySelector('#btn5').style.background = 'red'

                }

                if(btn[6] == 1  && btn[7] == 1 && btn[8]== 1){
                    
                    this.text.innerHTML = `Jogador ${this.player01.value} venceu`
                    document.querySelector('#btn6').style.background = 'red'
                    document.querySelector('#btn7').style.background = 'red'
                    document.querySelector('#btn8').style.background = 'red'

                }

                if(btn[6] == 1  && btn[4] == 1 && btn[2]== 1){
                    this.text.innerHTML = `Jogador ${this.player01.value} venceu`
                    document.querySelector('#btn6').style.background = 'red'
                    document.querySelector('#btn4').style.background = 'red'
                    document.querySelector('#btn2').style.background = 'red'
                }

            }

            console.log(btn)

    }

    getPlayer2(){
    

        let btn = []
        for(let x = 0 ;x <=8 ; x++){
            btn.push(document.querySelector(`#btn${x}`).value)

        }

        for(let i = 0 ;i <=3 ; i++){
            
            if(btn[0] == 2  && btn[1] == 2 && btn[2]== 2){
                this.text.innerHTML = `Jogador ${this.player02.value} venceu`
                document.querySelector('#btn0').style.background = 'red'
                document.querySelector('#btn1').style.background = 'red'
                document.querySelector('#btn2').style.background = 'red'
            }

            if(btn[0] == 2  && btn[3] == 2 && btn[6]== 2){
                
                this.text.innerHTML = `Jogador ${this.player02.value} venceu`
                document.querySelector('#btn0').style.background = 'red'
                document.querySelector('#btn3').style.background = 'red'
                document.querySelector('#btn6').style.background = 'red'
            }

            if(btn[0] == 2  && btn[4] == 2 && btn[8]== 2){
                
                this.text.innerHTML = `Jogador ${this.player02.value} venceu`
                document.querySelector('#btn0').style.background = 'red'
                document.querySelector('#btn4').style.background = 'red'
                document.querySelector('#btn8').style.background = 'red'
            }
            if(btn[1] == 2  && btn[4] == 2 && btn[7]== 2){

                this.text.innerHTML = `Jogador ${this.player02.value} venceu`
                document.querySelector('#btn1').style.background = 'red'
                document.querySelector('#btn4').style.background = 'red'
                document.querySelector('#btn7').style.background = 'red'

            }
            if(btn[2] == 2  && btn[5] == 2 && btn[8]== 2){

                this.text.innerHTML = `Jogador ${this.player02.value} venceu`
                document.querySelector('#btn2').style.background = 'red'
                document.querySelector('#btn5').style.background = 'red'
                document.querySelector('#btn8').style.background = 'red'
                
            }
            if(btn[3] == 2  && btn[4] == 2 && btn[5]== 2){
                
                this.text.innerHTML = `Jogador ${this.player02.value} venceu`
                document.querySelector('#btn3').style.background = 'red'
                document.querySelector('#btn4').style.background = 'red'
                document.querySelector('#btn5').style.background = 'red'

            }

            if(btn[6] == 2  && btn[7] == 2 && btn[8]== 2){
                
                this.text.innerHTML = `Jogador ${this.player02.value} venceu`
                document.querySelector('#btn6').style.background = 'red'
                document.querySelector('#btn7').style.background = 'red'
                document.querySelector('#btn8').style.background = 'red'

            }

            if(btn[6] == 2  && btn[4] == 2 && btn[2]== 2){
                
                this.text.innerHTML = `Jogador ${this.player02.value} venceu`
                document.querySelector('#btn6').style.background = 'red'
                document.querySelector('#btn4').style.background = 'red'
                document.querySelector('#btn2').style.background = 'red'
            }

        }

}


    initBtn(){
        let i = 0;

        let jogadorInit = Math.round(Math.random() * 10);

        let btnInit = document.querySelector('.btnInit')
        btnInit.addEventListener('click' , e => {

            if(!this.player01.value || !this.player02.value){
                alert("precisa por os nomes dos jogadores")
            }else{

            
                this.nameP.innerHTML = `${this.player01.value} `;

                [...document.querySelectorAll('.btn')].forEach((btn , index) => {
    
                    btn.addEventListener('click' , event => {
   
                            if(btn.value == 1 || btn.value == 2){
                                alert('campo ja selecionado')
                            }else{
            
                                if(jogadorInit%2 == 0){
        
                                    if(i%2 ==0 ){
            
                                       let imgx = document.createElement('div')
                                        imgx.innerHTML =  `<img src="./iconX.png" class="img" alt="">`
                                        btn.appendChild(imgx)
                                        btn.value = 1
                                        i ++
                
                                        if(i >2 ){
                
                                            this.getPlayer()
                
                                        }
                
                                    }else{
                
                                        let img = document.createElement('div')
                                        img.innerHTML = `<img src="./circulo.png" class="img" alt="">`
                                        btn.appendChild(img)
                                        btn.value = 2
                                        i++
                
                                        if(i >2 ){
                
                                            this.getPlayer2()
                
                                        }
                
                                    }
                                
                                }else{
        
                                    if(i%2 ==0 ){
        
                                        let img = document.createElement('div')
                                        img.innerHTML = `<img src="./circulo.png" class="img" alt="">`
                                        btn.appendChild(img)
                                        btn.value = 2
                                        i++
                
                                        if(i >2 ){
                
                                            this.getPlayer2()
                
                                        }
            
                    
                                    }else{
      
                                        let imgx = document.createElement('div')
                                        imgx.innerHTML =  `<img src="./iconX.png" class="img" alt="">`
                                        btn.appendChild(imgx)
                                        btn.value = 1
                                        i ++
                
                                        if(i >2 ){
                
                                            this.getPlayer()
                
                                        }
                
                                    }
        
                                    
        
                                }
            
                            }
            
                        if(i > 9){
                            alert('deu velha , ninguem ganhou')
        
                            if(confirm("Deseja iniciar uma nova partida?")){
                                window.location.reload()
                            }
                
                        }
                    })
                })

            }
            
        });
        
    }
}