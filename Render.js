
console.log('render333');


        class Render {
            constructor(data){
                this.data = data;

                this.paragraph = document.querySelector('.renderMess')
            }

            renderMessage() {
                this.paragraph.innerText = this.data.message;
                //console.log(this.paragraph);
            }
        }


export default Render;