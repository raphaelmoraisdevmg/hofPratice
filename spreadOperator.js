// usando o spread operator para juntar as informações nos dois arrays

const paisesAs =['brasil','chile','equador']
const paisesAn=['honduras','mexico','e.u.a']


const americas=[...paisesAn,...paisesAs];
console.log(americas)