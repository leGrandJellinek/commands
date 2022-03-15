let array = [];
let sum = '';

for(let i = 1; i < Infinity; i++){
    let add = prompt('Пропишите add если хотите добавить , del чтобы удалить массив и stop чтобы остановить цикл');
    if(add == 'add'){
        let x = prompt('Введите массив чтобы добавить')
        array.push(x)
    }else if (add == 'del'){
        let y = prompt('Введите массив чтобы удалить')
        for(let key in array){
            array[key] == y ? array.splice(key,1) : '';
        }
    }else if( add == 'stop'){
        break
    }
    console.log(array);
}
