//usando o find para achar os computadores com mais de 250gb de ssd
const computers=[
    {computerName:'Workstation01', brand:'dell',cpu:'core i7 ',ram:'16gb',ssd:270},
    {computerName:'Workstation02', brand:'dell',cpu:'intel xeon gold 6248R ',ram:'128gb',ssd:1100},
    {computerName:'station03', brand:'dell',cpu:'core i3 ',ram:'4gb',ssd:120}
]
// o find retorna o primeiro elemento que bate com a expressão lógica

let result = computers.find((computer) => computer.ssd > 250)
console.log(result);