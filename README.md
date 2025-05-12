🚀 Calculadora de Frete com Design Pattern Strategy
📝 Descrição
Este projeto implementa uma calculadora de frete utilizando o Design Pattern Strategy em uma aplicação NestJS. O padrão Strategy permite encapsular diferentes algoritmos de cálculo de frete e torná-los intercambiáveis.

🎯 Objetivo do Pattern Strategy
O padrão Strategy é utilizado quando:

Precisamos usar diferentes variantes de um algoritmo
Queremos isolar a lógica do algoritmo dos detalhes de implementação
Temos um conjunto de algoritmos similares que precisam ser alternados
🏗️ Estrutura do Projeto
Interface Strategy
typescript

interface ShippingStrategy {    calculate(weight: number, distance:     number): number;}
Implementações Concretas
Temos três estratégias de cálculo de frete:

SedexStrategy: Opção premium

Taxa base: R$20
Taxa por kg: R$3
Taxa por km: R$0.8
PacStrategy: Opção econômica

Taxa base: R$15
Taxa por kg: R$1
Taxa por km: R$0.3
TransportadoraStrategy: Opção intermediária

Taxa base: R$10
Taxa por kg: R$2
Taxa por km: R$0.5
Controller
O controller recebe as requisições e seleciona a estratégia apropriada:

typescript

@Post()calculateFreight(@Body() request: RequestType): number {    const { ShippimentType, weight,     distance } = request;    switch (ShippimentType) {        case 'SEDEX':            this.            calculateFreightService.            SetShippingType(new             SedexStrategy);            break;        case 'PAC':            this.            calculateFreightService.            SetShippingType(new             PacStrategy);            break;        case 'Transportadora':            this.            calculateFreightService.            SetShippingType(new             TransportadoraStrategy);            break;        default:            throw new             BadRequestException            ('Invalid ShippimentType');    }    return this.calculateFreightService.    calculate(weight, distance);}
🚀 Como Usar
Para calcular o frete, faça uma requisição POST para /freight-calculator com o seguinte corpo:

json

{    "ShippimentType": "SEDEX",    "weight": 10,    "distance": 100}
💡 Benefícios da Implementação
Flexibilidade: Fácil adicionar novos tipos de cálculo de frete
Manutenibilidade: Cada estratégia é isolada em sua própria classe
Princípio Open/Closed: Podemos adicionar novos tipos de frete sem modificar o código existente
Princípio Single Responsibility: Cada classe tem uma única responsabilidade
🔄 Fluxo de Execução
Cliente faz requisição POST com tipo de frete, peso e distância
Controller recebe a requisição e identifica a estratégia apropriada
Service é configurado com a estratégia escolhida
Cálculo é executado usando a estratégia selecionada
Resultado é retornado ao cliente
🛠️ Tecnologias Utilizadas
NestJS
TypeScript
Design Pattern Strategy
🚀 Como Executar o Projeto
bash
Run
# Instalar dependências$ yarn install# Executar em desenvolvimento$ yarn run start:dev# Executar em produção$ yarn run start:prod
📚 Princípios SOLID Aplicados
Single Responsibility: Cada estratégia tem uma única responsabilidade
Open/Closed: Extensível para novos tipos de frete sem modificar código existente
Liskov Substitution: Todas as estratégias podem ser usadas de forma intercambiável
Interface Segregation: Interface enxuta e específica para o cálculo
Dependency Inversion: Dependência de abstrações, não implementações concretas
