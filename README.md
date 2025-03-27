# Dashboard de Processos de Saúde - Prefeitura de Itajaí

Um dashboard interativo para visualização e análise de processos de saúde em trâmite na procuradoria judicial do Município de Itajaí.

![Dashboard Preview](./src/assets/health.jpg)

## Sobre o Projeto

Este aplicativo foi desenvolvido para auxiliar a Procuradoria Judicial do Município de Itajaí na visualização, análise e gestão dos processos judiciais relacionados à saúde. A ferramenta permite filtrar e visualizar dados sobre processos por ano, tribunal, tipo de solicitação, procurador responsável, CID e outros parâmetros relevantes.

### Principais Funcionalidades

- **Visualização de dados estatísticos** através de diversos gráficos interativos
- **Filtragem múltipla** por ano, tribunal, tipo de solicitação e procurador
- **Análise detalhada** de processos por CID, tipo de solicitação e valores
- **Modo claro/escuro** para melhor experiência visual
- **Suporte a múltiplos idiomas** (português e inglês)
- **Visualização de tabelas detalhadas** com informações processuais
- **Dashboard responsivo** adaptável a diferentes dispositivos

## Tecnologias Utilizadas

- React.js
- MongoDB Charts para visualização de dados
- React Router para navegação
- React Select para componentes de seleção avançados
- React Icons para iconografia
- React Intl para internacionalização
- MongoDB Realm para autenticação e backend

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 12 ou superior)
- Yarn ou npm
- Acesso ao MongoDB Atlas (para dados e gráficos)

### Configuração

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/dashboard-saude-itajai.git
   cd dashboard-saude-itajai
   ```

2. Instale as dependências:
   ```
   yarn install
   ```

3. Configure as variáveis de ambiente (crie um arquivo .env na raiz do projeto):
   ```
   REACT_APP_MONGODB_CHARTS_URL=sua_url_do_mongodb_charts
   REACT_APP_REALM_APP_ID=seu_realm_app_id
   ```

### Execução

```
yarn start
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

### Build para Produção

```
yarn build
```

Os arquivos otimizados para produção serão gerados na pasta `build`.

## Estrutura do Projeto

- `/src/components` - Componentes reutilizáveis
- `/src/pages` - Páginas principais da aplicação
- `/src/services` - Serviços para API e autenticação
- `/src/assets` - Recursos estáticos (imagens, ícones)
- `/src/styles` - Arquivos de estilo

## Autores

- Ricardo Pereira - Desenvolvimento e implementação

## Licença

Este projeto é propriedade da Prefeitura Municipal de Itajaí.
