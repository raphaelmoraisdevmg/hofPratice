const computers=[
    {computerName:'Workstation01', brand:'dell',cpu:'core i7 ',ram:'16gb',ssd:270},
    {computerName:'Workstation02', brand:'dell',cpu:'intel xeon gold 6248R ',ram:'128gb',ssd:1100},
    {computerName:'station03', brand:'dell',cpu:'core i3 ',ram:'4gb',ssd:120},
    {computerName:'station04', brand:'accer',cpu:'core i3 ',ram:'4gb',ssd:150},
    {computerName:'workStation03', brand:'hp',cpu:'intel xeon e5-2620 ',ram:'32gb',ssd:500},
    {computerName:'workStation04', brand:'dell',cpu:'intel xeon e5-2620 ',ram:'32gb',ssd:500},
]
// usando o some para encontrar um computador da marca hp no array
const result = computers.some((computer)=>computer.brand === 'generic'); //false
// o some  verifica se existe um elemento no array que bate com a callback caso exista ele retorna true
console.log(result);