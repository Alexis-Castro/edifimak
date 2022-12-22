export const currencyFormatter = ({ currency, value }) => {
   const formatter = new Intl.NumberFormat('es-PE', {
      style: 'currency',
      minimumFractionDigits: 2,
      currency
   })
   return formatter.format(value)
}

// const value = 123456