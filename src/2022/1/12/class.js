function App (name){
    this.name = name;
    this.list = [1, 2, 3, 4];
}


const a1 = new App("11111111");
const a2 = new App("2222");
a1.list = [4,5,6];
console.log(a1.list);
console.log(a2.list);
