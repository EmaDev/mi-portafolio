export function hexToRgba(hex: string, alpha: number) {
    // Elimina el signo '#' si está presente
    hex = hex.replace('#', '');

    // Verifica si el valor hexadecimal tiene 3 o 6 caracteres
    if (hex.length === 3) {
        hex = hex.split('').map(function (char) {
            return char + char;
        }).join('');
    }

    // Convierte los valores hexadecimales a decimales
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    // Asegúrate de que alpha esté en el rango [0, 1]
    alpha = Math.min(Math.max(0, alpha), 1);

    // Crea la cadena rgba
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}

export function aclararColorRGBA(color:string, factor:number):string {
    // Divide los componentes del color RGBA
    const [r, g, b, a] = color.split(",").map((ele) => parseInt(ele.replace(/\D/g, ''), 10) );
  
    // Calcula los nuevos valores para R, G y B para aclarar el color
    const nuevoR = Math.min(255, r + factor);
    const nuevoG = Math.min(255, g + factor);
    const nuevoB = Math.min(255, b + factor);
  
    // Crea el nuevo color RGBA con los valores aclarados
    const nuevoColor = `rgba(${nuevoR}, ${nuevoG}, ${nuevoB}, ${a})`;
  
    return nuevoColor;
}