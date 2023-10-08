/*

logica:
s = superior
i = inferior
d = direita
e = esquerda
j = index

s = 0
i = n - 1
d = n - 1
e = 0

Matriz 3x3

Primeiro percorrer a primeira linha e preencher (linha = e) e (coluna j = d) ++

sj sj sj

somar + 1 ao s ficando igual a 1

seguir com d, agora (linha j = s) ++ e coluna = d

sj sj sj
      jd
      jd

subtrair 1 do d ficando igual a 1

seguir com i, agora a linha = i e (coluna j = d) --

sj sj sj
      jd
id id jd

subtrair 1 do i ficando igual a 1

seguir com e, agora (linha j = i) -- e coluna = e (sendo 0)

sj sj sj
je    jd
id id jd

e + 1 ficando igual a 1

volta ao loop de cima onde linha e = 1 e coluna j de d = 1

sj sj sj
je sj jd
id id jd


*/

function criarMatriz(x,y){
    let matriz = new Array(x).fill(0).map(() => new Array(y).fill(0))
    let superior = 0;
    let inferior = x-1;
    let direita = y-1;
    let esquerda = 0;
    valor = 1;
    total = x*y;
    cont = 0
    while (valor <= total){

        //preenche da esquerda para dieria
        for(let i = esquerda; i <= direita; i++){
            matriz[superior][i] = valor++;
        }
        superior++;

        //preenche de cima para baixo
        for(let i = superior; i <= inferior; i++){
            matriz[i][direita] = valor++;
        }
        direita--;

        //preenche da direita para esquerda
        for(let i = direita; i >= esquerda; i--){
            matriz[inferior][i] = valor++;
        }
        inferior--;

        //preenche de baixo para cima
        for(let i = inferior; i >= superior; i--){
            matriz[i][esquerda] = valor++;  
        }
        esquerda++;
    }
    console.log('matriz: ' + cont)
    return matriz;
}

let matriz = criarMatriz(4,4);
for (const i of matriz){
    console.log(i);
}
