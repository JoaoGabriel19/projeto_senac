# Projeto Senac
Neste repositório estão as telas desenvolvidas a pedido do Senac

## Requisitos

-  [Node.js](https://nodejs.org/)
-  [npm](https://www.npmjs.com/)

## Como Rodar o Projeto
No terminal:

   ```bash
   git clone https://github.com/seu-usuario/projeto_senac
   cd projeto_senac
   npm install
   npm run dev
```

Exemplo de arquivo CSV para ser utilizado como teste 
   Crie um arquivo .csv com está formatação
   ```makefile
   Nome,Telefone,Email,DtVencimento,Curso,Parcelas,Contato
   João da Silva,11 98765-4321,joao.silva@example.com,2023-08-10,Matemática,5,Sim
   Maria Santos,21 99876-5432,maria.santos@example.com,2023-09-15,História,3,Não
   Pedro Souza,31 98765-4321,pedro.souza@example.com,2023-07-20,Geografia,2,Sim
   Carla Oliveira,41 99876-5432,carla.oliveira@example.com,2023-08-25,Inglês,4,Sim
   ```
Altere esta parte no arquivo aVencer.tsx para as colunas desejadas
```TypeScript
type RowData = {
  Nome: string; //NOME
  Email: string; //TELEFONE
  ContratoMatricula: string; // EMAIL
  Valor: string; //DATA DE VENCIMENTO
  DTINICIO: string; //CURSO
  Titulo: string; //NUMERO DE PARCELAS
  DATA_CONTATO: string; //ULTIMO CONTATO REALIZADO
};
