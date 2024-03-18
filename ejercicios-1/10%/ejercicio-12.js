// Ejercicio 12: Estudiar el Comportamiento del Alcance o Contexto Funcional
function fuc(){
    var a = 2;

    function fuc3(){
        var b = 5;

        function fuc5(){
            console.log(a,b);
        }
    }
}

function fuc1(){
    var a = 7; 

    function fuc4(){}

}

fuc();
fuc1();