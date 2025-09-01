const Utilitarios = require('../src/utilitarios')

describe('Testes da classe Utilitarios', () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    })

    test('Deve inverter string corretamente', () => {
        expect(utilitarios.inverterString('pao')).toBe('oap');
    });

    test('Deve contar caracteres corretamente', () => {
        expect(utilitarios.contarCaracteres('Brasil')).toBe(6);
    });

    test('Deve alterar para letra maiscula corretamente', () => {
        expect(utilitarios.paraMaiusculas('moeda')).toBe('MOEDA');
    });

    test('Deve alterar para letra minuscula corretamente', () => {
        expect(utilitarios.paraMinusculas('QUEiJo')).toBe('queijo');
    });

    test('Deve alterar primeira letra para maiscula corretamente', () => {
        expect(utilitarios.primeiraLetraMaiuscula('cao')).toBe('Cao');
    });

    test('Deve somar corretamente', () => {
        expect(utilitarios.somar(5, 5)).toBe(10);
    });

    test('Deve subtrair corretamente', () => {
        expect(utilitarios.subtrair(5, 2)).toBe(3);
    });

    test('Deve multiplicar corretamente', () => {
        expect(utilitarios.multiplicar(2, 3)).toBe(6);
    });

    test('Deve dividir corretamente', () => {
        expect(utilitarios.dividir(4, 2)).toBe(2);
    });

    test('Deve validar se número informar é par corretamente', () => {
        expect(utilitarios.ehPar(2)).toBe(true);
    });

    test('Deve retornar primeiro elemento da lista corretamente', () => {
        expect(utilitarios.primeiroElemento([1, 4, 6])).toBe(1);
    });

    test('Deve retornar último elemento da lista corretamente', () => {
        expect(utilitarios.ultimoElemento([1, 4, 6])).toBe(6);
    });

    test('Deve retornar tamanho da lista corretamente', () => {
        expect(utilitarios.tamanhoArray([1, 4, 6])).toBe(3);
    });

    test('Deve ordernar lista de forma crescente corretamente', () => {
        expect(utilitarios.ordenarArray([4, 1, 6])).toBe([1, 4, 6]);
    });

    test('Deve inverter lista de forma corretamente', () => {
        expect(utilitarios.inverterArray([4, 1, 6])).toBe([6, 1, 4]);
    });

    // test('Deve gerar numero aleatorio corretamente', () => {
    //     expect(utilitarios.gerarNumeroAleatorio(6)).toBe([6, 4, 1]);
    // });

    test('Deve verificar se valor informado é número', () => {
        expect(utilitarios.ehNumero('ovo')).toBe(false);
    });

    test('Deve remover espaços de valor informado corretamente', () => {
        expect(utilitarios.removerEspacos('queijo   ')).toBe('queijo');
    });

    test('Deve repetir texto corretamente', () => {
        expect(utilitarios.repetirTexto('uva', 2)).toBe('uvauva');
    });

    test('Deve juntar lista corretamente', () => {
        expect(utilitarios.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
    });

    test('Deve contar palavras corretamente', () => {
        expect(utilitarios.contarPalavras('era uma vez um pao')).toBe(5);
    });

    test('Deve calcular media da lista corretamente', () => {
        expect(utilitarios.mediaArray([1, 5, 3])).toBe(3);
    });

    test('Deve remover itens duplicados da lista corretamente', () => {
        expect(utilitarios.toStrictEqual([1, 5, 3, 3])).toBe([1, 5, 3]);
    });

    // test('Deve verificar se valor é um polindromo corretamente', () => {
    //     expect(utilitarios.ehPalindromo()).toBe();
    // });
});