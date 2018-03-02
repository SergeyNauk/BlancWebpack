class Listener {
    constructor(data, render) {
        this.data = data;
        this.render = render;

        this.createAlarmClock = document.querySelector('.createAlarmClock');
        this.inputDate = document.querySelector('.inputDate');
        this.inputTime = document.querySelector('.inputTime');

        this.interval = setInterval(()=>{
            this.alarmWatcher();
        },2000);
    }

    alarmWatcher() {
        let dateNow = new Date();

        let allAlarmCounter = document.querySelectorAll('.alarmClock');
        let arrAlarmCounter = [...allAlarmCounter];

        //console.log(arrAlarmCounter);

        if (arrAlarmCounter.length > 0) {
            arrAlarmCounter.forEach((elem)=>{
               let dateAlarm = new Date(elem.getAttribute('data-timeAlarm'));

                if (dateNow > dateAlarm){
                   alert('work Alarm counter');
                   elem.remove();
               }
            })
        }


        //console.log(allAlarmCounter.length);
    }


    initApp() {
        this.createAlarmClock.addEventListener('click', () => {
            this.vereficateMess()
        })
    }

    vereficateMess() {
        let date = this.inputDate.value;
        let time = this.inputTime.value;

        let dateNow = new Date();
        let alarmDate = new Date(date);
        let timeParse = time.split(':');

        alarmDate.setHours(timeParse[0]);
        alarmDate.setMinutes(timeParse[1]);


        if (alarmDate > dateNow) {
            this.data.alarmDate = alarmDate;

            this.render.renderAlarmClock();
            //console.log(this.data.alarmDate);
        }
    }
}

 export default Listener;
