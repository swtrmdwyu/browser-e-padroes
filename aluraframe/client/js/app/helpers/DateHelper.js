class DateHelper {

    constructor() {
        throw new Error("Classe não pode ser instanciada.")
    }
    
    static textToDate(texto) {
        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }

    static dateToText(data) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
}