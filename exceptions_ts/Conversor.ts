
try {
    const resultado = converte("abc");
    console.log(resultado);

} catch (error: any) {
    if (error instanceof TypeError)
        console.error("Você digitou um número. Digite um texto e tente novamente!");
    else
        console.error("Erro inesperado! Contate o adm do sistema.");
} finally {
    console.log("Fim do código!");
    
}

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}
