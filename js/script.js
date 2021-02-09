document.getElementById('buttonSubmit').onclick = function(){
    var hora = document.getElementById('hora')
    changeDate(hora.value);
    changeContent();
}


document.body.onload = function(){
    var currentDate = getCurrentDate();
    changeDate(currentDate);
    changeContent();
}

function changeDate(date){
    var msg = window.document.getElementById('msg');
    msg.innerText = `Agora são ${date} horas`;
}


function getCurrentDate(){
    console.log('[getCurrentDate]')
    var currentDate = new Date().getHours();
    return currentDate;
}

function changeContent() {
    console.log('[changeContent]')

    var img = window.document.getElementById('img')
    var sec = window.document.getElementById('sec')
    var hour = window.document.getElementById('hora')
    
    var vlr = parseInt(hour.value) 
    if (vlr >= 5 && vlr < 12) {
    
        //Bom dia
        img.src = `img/manha.png`
        sec.style.backgroundColor = 'white'
        document.body.style.backgroundColor = 'rgb(125, 163, 214)'
    
    }else if (vlr >=13 && vlr < 18){
    
        //Boa tarde
        img.src = `img/tarde.png`
        document.body.style.backgroundColor =  'rgb(214, 161, 14)'
    }else {
    
        //Boa noite
        img.src = `img/noite.png`
        document.body.style.backgroundColor = 'rgb(26, 25, 24)'
    }

}