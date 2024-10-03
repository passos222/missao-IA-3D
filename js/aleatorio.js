const nomes = ["Pedro", "Felipe", "Laura", "Joaquim", "Leticia", "Bruna"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
