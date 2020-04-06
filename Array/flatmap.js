const escola = [{
    nome:'Turma1',
    alunos:[{
        aluno:'josé',
        nota: 20
    },
    {
        aluno:'João',
        nota:18
    }]
},
{
    nome:'Turma2',
    alunos:[{
        aluno:'Maria',
        nota: 19
    },
    {
        aluno:'Joana',
        nota:15
    }]
}]

const notas = escola.map(turma => turma.alunos.map(a => a.nota))

console.log(notas)