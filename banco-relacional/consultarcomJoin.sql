select e.nome, c.nome, regiao from estados e, cidades c
where e.id = c.estado_id

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Regiao
from estados e
inner join cidades c on e.id = c.estado_id

--INNER JOIN TRÁS TUDO QUE ESTÁ RELACIONADO.
--LEFT JOIN TRÁS TUDO QUE ESTÁ RELACIONADO MAIS O QUE ESTA AO LADO ESQUERDO DA RELAÇÃO .
--RIGHT JOIN TRÁS TUDO QUE ESTÁ RELACIONADO MAIS O QUE ESTAO NO LADO DIREITO DA RELAÇÃO.
--FULL JOIN TRÁS TUDO DAS DUAS TABELAS.