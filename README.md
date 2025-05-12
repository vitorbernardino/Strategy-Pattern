<h1>🚀 Calculadora de Frete com Design Pattern Strategy</h1>

<h2>📝 Descrição</h2>
<p>Este projeto implementa uma calculadora de frete utilizando o Design Pattern Strategy em uma aplicação NestJS. O padrão Strategy permite encapsular diferentes algoritmos de cálculo de frete e torná-los intercambiáveis.</p>

<h2>🎯 Objetivo do Pattern Strategy</h2>
<ul>
  <li>Precisamos usar diferentes variantes de um algoritmo</li>
  <li>Queremos isolar a lógica do algoritmo dos detalhes de implementação</li>
  <li>Temos um conjunto de algoritmos similares que precisam ser alternados</li>
</ul>

<h2>🏗️ Estrutura do Projeto</h2>

<h3>Interface Strategy</h3>
<pre><code class="language-typescript">
interface ShippingStrategy {
  calculate(weight: number, distance: number): number;
}
</code></pre>

<h3>Implementações Concretas</h3>
<p>Temos três estratégias de cálculo de frete:</p>

<h4>SedexStrategy: Opção premium</h4>
<ul>
  <li>Taxa base: R$20</li>
  <li>Taxa por kg: R$3</li>
  <li>Taxa por km: R$0.8</li>
</ul>

<h4>PacStrategy: Opção econômica</h4>
<ul>
  <li>Taxa base: R$15</li>
  <li>Taxa por kg: R$1</li>
  <li>Taxa por km: R$0.3</li>
</ul>

<h4>TransportadoraStrategy: Opção intermediária</h4>
<ul>
  <li>Taxa base: R$10</li>
  <li>Taxa por kg: R$2</li>
  <li>Taxa por km: R$0.5</li>
</ul>

<h3>Controller</h3>
<p>O controller recebe as requisições e seleciona a estratégia apropriada:</p>
<pre><code class="language-typescript">
@Post()
calculateFreight(@Body() request: RequestType): number {
  const { ShippimentType, weight, distance } = request;

  switch (ShippimentType) {
    case 'SEDEX':
      this.calculateFreightService.SetShippingType(new SedexStrategy());
      break;
    case 'PAC':
      this.calculateFreightService.SetShippingType(new PacStrategy());
      break;
    case 'Transportadora':
      this.calculateFreightService.SetShippingType(new TransportadoraStrategy());
      break;
    default:
      throw new BadRequestException('Invalid ShippimentType');
  }

  return this.calculateFreightService.calculate(weight, distance);
}
</code></pre>

<h2>🚀 Como Usar</h2>
<p>Para calcular o frete, faça uma requisição <code>POST</code> para <code>/freight-calculator</code> com o seguinte corpo:</p>
<pre><code class="language-json">
{
  "ShippimentType": "SEDEX",
  "weight": 10,
  "distance": 100
}
</code></pre>

<h2>💡 Benefícios da Implementação</h2>
<ul>
  <li><strong>Flexibilidade:</strong> Fácil adicionar novos tipos de cálculo de frete</li>
  <li><strong>Manutenibilidade:</strong> Cada estratégia é isolada em sua própria classe</li>
  <li><strong>Princípio Open/Closed:</strong> Podemos adicionar novos tipos de frete sem modificar o código existente</li>
  <li><strong>Princípio Single Responsibility:</strong> Cada classe tem uma única responsabilidade</li>
</ul>

<h2>🔄 Fluxo de Execução</h2>
<ol>
  <li>Cliente faz requisição POST com tipo de frete, peso e distância</li>
  <li>Controller recebe a requisição e identifica a estratégia apropriada</li>
  <li>Service é configurado com a estratégia escolhida</li>
  <li>Cálculo é executado usando a estratégia selecionada</li>
  <li>Resultado é retornado ao cliente</li>
</ol>

<h2>🛠️ Tecnologias Utilizadas</h2>
<ul>
  <li>NestJS</li>
  <li>TypeScript</li>
  <li>Design Pattern Strategy</li>
</ul>

<h2>🚀 Como Executar o Projeto</h2>
<pre><code class="language-bash">
# Instalar dependências
$ yarn install

# Executar em desenvolvimento
$ yarn run start:dev

# Executar em produção
$ yarn run start:prod
</code></pre>

<h2>📚 Princípios SOLID Aplicados</h2>
<ul>
  <li><strong>Single Responsibility:</strong> Cada estratégia tem uma única responsabilidade</li>
  <li><strong>Open/Closed:</strong> Extensível para novos tipos de frete sem modificar código existente</li>
  <li><strong>Liskov Substitution:</strong> Todas as estratégias podem ser usadas de forma intercambiável</li>
  <li><strong>Interface Segregation:</strong> Interface enxuta e específica para o cálculo</li>
  <li><strong>Dependency Inversion:</strong> Dependência de abstrações, não implementações concretas</li>
</ul>
