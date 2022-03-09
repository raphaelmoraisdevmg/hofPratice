const computers=[
    {computerName:'Workstation01', brand:'dell',cpu:'core i7 ',ram:'16gb',ssd:270},
    {computerName:'Workstation02', brand:'dell',cpu:'intel xeon gold 6248R ',ram:'128gb',ssd:1100},
    {computerName:'station03', brand:'dell',cpu:'core i3 ',ram:'4gb',ssd:120},
    {computerName:'station04', brand:'accer',cpu:'core i3 ',ram:'4gb',ssd:150},
    {computerName:'workStation03', brand:'hp',cpu:'intel xeon e5-2620 ',ram:'32gb',ssd:500},
    {computerName:'workStation04', brand:'dell',cpu:'intel xeon e5-2620 ',ram:'32gb',ssd:500},
]
// filter usado para obter todos os computadores da marca dell no array.
// o filter aplica a callback em cada elemento do array onde o retorno for true ele insere o elemento no novo array
const result = computers.filter(computer => computer.brand ==='dell');
console.log(result);