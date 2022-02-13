// let list = document.getElementById('list');
//     li = document.createElement('li');
// li.innerHTML = '4';
// list.appendChild(li)

// let list = document.getElementById('list');
// for( a = 1; a <= 100; a++){
//     li = document.createElement('li');
//     li.innerHTML = a;
//     list.appendChild(li)
// }

// let div = document.getElementById('div');
// for( a = 1; a <= 6; a++){
//     div_new = document.createElement('div_new');
//     div_new.innerHTML = a;
//     div.appendChild(div_new);
//     div_new.classList.add(`box_${a}`);
// }\

let w = +prompt('Введите ширину таблицы в блоках (50px X 50px)');
    h = +prompt('Введите высоту таблицы в блоках (50px X 50px)');
alert('Вы сможете рисовать в этой таблице нажимая на ячейки')
let table = document.getElementById('table') 
for (let a = 1; a<=h; a++){
    let tr = document.createElement("tr");
    for (let b = 1; b<=w; b++){
        let td = document.createElement("td");      
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
let tds = document.querySelectorAll('td');
for (let c = 0; c<tds.length; c++) {
    tds[c].addEventListener("click", function Fun(){
        let input = document.createElement('input');
        input.value = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(input);
        input.classList.add('active');
        this.classList.add('yacheyka')
        
        let element = this
        input.addEventListener("blur", function(){
            element.innerHTML = this.value;
            element.addEventListener("click", Fun);
        })
        this.removeEventListener("click", Fun);
    })
}