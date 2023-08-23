let array = ["Daniel", "jho", "Manuela","Juan"];
function saludar(d, f, h, j){
    console.log(`Hola ${d}`);
    console.log(`Hola ${f}`);
    console.log(`Hola ${h}`);
    console.log(`Hola ${j}`);
}
saludar(...array)