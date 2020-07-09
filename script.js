/*const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

const generateNumbers = (amount, from, to) => {
    let str = '';
    for (let i = 0; i < amount; i++) {
        str += (!str ? '' : ',') + random(from, to);
    };
    
    return str;
}
  
const listOfNumbers = generateNumbers(10, 50, 100);
console.log(listOfNumbers);


const ourCar = {
    type: 'Nissan',
    color: 'Silver',
    class: 'D',
    year: 2002,
    fuel: 'petrol',
}

console.log(ourCar);
*/

let globalId = 1;

const createMonster = (id, name, superpower, area) => ({
        id: globalId++,
        userId: id,
        name,
        superpower,
        area,
});

/*const elder = createMonster(5, 'Elder', 'Intellegence', 'Cave');
const youger = createMonster(3, 'Young', 'Smart', 'City');

console.log(elder.name);

for (const key in elder) {
    if (elder.hasOwnProperty(key)) {
        const value = elder[key];
        console.log(value, key);
        
    }
}

const ktulhu = elder;
ktulhu.ability = 'Kill';
delete ktulhu.ability; 
console.log(ktulhu, elder);
*/
