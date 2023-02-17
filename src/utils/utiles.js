export const currencyFormatter = ({ currency, value }) => {
   const formatter = new Intl.NumberFormat('es-PE', {
      style: 'currency',
      minimumFractionDigits: 2,
      currency
   })
   return formatter.format(value)
}

export const capitalizarPrimeraLetra = (cadena) => {
   const palabras = cadena.split(" ");
   const palabrasCapitalizadas = palabras.map(palabra =>
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
   );
   const cadenaCapitalizada = palabrasCapitalizadas.join(" ");
   return cadenaCapitalizada;
}

// const value = 123456