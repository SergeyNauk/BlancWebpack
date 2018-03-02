class Render {
    constructor(data){
        this.data = data;

        this.renderDiv = document.querySelector('.renderDiv')
    }

    renderAlarmClock() {
        let month = this.data.alarmDate.getMonth() + 1;
        month < 10 ? month = '0' + month : month;

        let day = this.data.alarmDate.getDate();
        day < 10 ? day = '0' + day : day;

        let hours = this.data.alarmDate.getHours();
        hours < 10 ? hours = '0' + hours : hours;

        let minutes = this.data.alarmDate.getMinutes();
        minutes < 10 ? minutes = '0' + minutes : minutes;

        //let data = this.data.alarmDate;

        let template = `<div data-timeAlarm="${this.data.alarmDate}" class='alarmClock'><div class="firstDiv" contenteditable="true">Input some here...</div><button class="showNotes" onclick="this.parentNode.children[0].classList.toggle('inputNotes');">Notes</button><span>дата сигнала ${month} : ${day} время сигнала ${hours} : ${minutes}</span><button onClick="this.parentNode.remove()" class="deleteBtn">Delete</button>`;
        this.renderDiv.insertAdjacentHTML('beforeend', template);
    }
}

export default Render;
