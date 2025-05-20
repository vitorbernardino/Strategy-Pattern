# 🚚 Sistema de Cálculo de Frete com Design Pattern Strategy

## 📌 Descrição

Este projeto é uma demonstração prática da aplicação do **Design Pattern Strategy** em um sistema simples de cálculo de frete. A ideia central é mostrar como diferentes algoritmos de cálculo (ex: Sedex, PAC, Transportadora) podem ser encapsulados e utilizados de forma flexível e intercambiável.

---

## 🎯 Objetivo

O objetivo do projeto é ilustrar como o padrão **Strategy** pode ser utilizado para:

- Substituir estruturas condicionais (como `if/else` ou `switch`) por estratégias mais elegantes.
- Tornar o sistema aberto para extensão, mas fechado para modificação (Princípio Open/Closed).
- Facilitar a manutenção e evolução do código.

---

## 🏗️ Estrutura do Projeto

### Interface da Estratégia

Define um contrato comum para todas as estratégias de cálculo:

```typescript
export interface ShippingStrategy {
  calculate(weight: number, distance: number): number;
}
```
Estratégias Concretas
Cada tipo de frete implementa sua própria lógica de cálculo:

SedexStrategy: Mais rápido e mais caro.

PacStrategy: Econômico.

TransportadoraStrategy: Opção intermediária.

Serviço de Cálculo
Classe responsável por delegar o cálculo para a estratégia selecionada:
```typescript
export class FreightCalculatorService {
  private shippingType: ShippingStrategy;

  public setShippingType(shippingType: ShippingStrategy): void {
    this.shippingType = shippingType;
  }

  public calculate(weight: number, distance: number): number {
    return this.shippingType.calculate(weight, distance);
  }
}
```
🚀 Como Executar
Escolha a estratégia de frete desejada (SEDEX, PAC, TRANSPORTADORA).

Defina o peso e a distância.

O sistema aplicará a lógica de cálculo correspondente e retornará o valor do frete.

✅ Exemplo de Uso

POST /freight-calculator

{
  "shippimentType": "SEDEX",
  "weight": 5,
  "distance": 200
}
Resposta esperada:


{
  "total": 100.00
}
🔍 Aprendizados
Separação clara de responsabilidades.

Facilidade para adicionar novos tipos de cálculo de frete.

Aplicação prática de princípios SOLID.

🛠️ Tecnologias
Node.js / NestJS

TypeScript

Design Pattern Strategy

📚 Referências
Padrões de Projeto - Strategy









