
console.log('listener999');


        class Listener {
            constructor(data, render){
                this.data = data;
                this.render = render;

                this.button = document.querySelector('.button');
                this.input = document.querySelector('.input');
            }

            initApp() {
                this.button.addEventListener('click', ()=>{
                    this.vereficateMess()
                })
            }

            vereficateMess() {
                let message = this.input.value.trim();

                if (message != '') {
                   this.data.message = message;
                   this.render.renderMessage();
                }
            }
        }


 export default Listener;