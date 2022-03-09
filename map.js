// usando o map para imprimir um objeto novo com somente a marca é o processador de cada maquina
const computers=[
    {computerName:'Workstation01', brand:'dell',cpu:'core i7 ',ram:'16gb',ssd:270},
    {computerName:'Workstation02', brand:'dell',cpu:'intel xeon gold 6248R ',ram:'128gb',ssd:1100},
    {computerName:'station03', brand:'dell',cpu:'core i3 ',ram:'4gb',ssd:120},
    {computerName:'station04', brand:'accer',cpu:'core i3 ',ram:'4gb',ssd:150},
    {computerName:'workStation03', brand:'hp',cpu:'intel xeon e5-2620 ',ram:'32gb',ssd:500},
    {computerName:'workStation04', brand:'dell',cpu:'intel xeon e5-2620 ',ram:'32gb',ssd:500},
]
// o map aplica sobre os elementos de um array uma função  e retorna um array novo, sem modificar o original
/* const result = computers.map(computer => {
    const pcObj={
        marca:computer.brand,
        processador:computer.cpu
    }
    return pcObj
}) */
// refatorando
const result = computers.map(computer => ` marca:${computer.brand}, processador: ${computer.cpu}`)
console.log(result)