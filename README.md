# 🚚 Sistema de Cálculo de Frete com Design Pattern Strategy

## 📌 Descrição

Este projeto implementa um sistema de cálculo de frete utilizando o padrão de projeto Strategy, com o objetivo de facilitar a adição de novos tipos de transportadoras e manter o código limpo, flexível e escalável.

---

## 🧠 O que é o Strategy Pattern?
O Strategy Pattern é um padrão de design comportamental que permite definir múltiplos algoritmos intercambiáveis, encapsulados em classes distintas, que seguem uma mesma interface. Isso permite que a lógica de um algoritmo (neste caso, o cálculo de frete) possa ser alterada em tempo de execução sem mudar o funcionamento do sistema..

---

## 🏗️ Estrutura do Projeto

### Interface da Estratégia
Define o contrato comum que todas as transportadoras devem seguir:

```typescript
export interface ShippingStrategy {
  calculate(weight: number, distance: number): number;
}
```
### Estratégias Concretas
Cada tipo de frete implementa sua própria lógica de cálculo:
```typescript
export class SedexStrategy implements ShippingStrategy {
  calculate(weight: number, distance: number): number {
    const baseFee = 20;
    const weightFee = weight * 3;
    const distanceFee = distance * 0.8;
    return baseFee + weightFee + distanceFee;
  }
}
```

### Serviço de Cálculo
Esta classe é responsável por usar a estratégia selecionada para calcular o valor do frete:
```typescript
export class FreightCalculatorService {
  private shippingType: ShippingStrategy;

  public SetShippingType(shippingType: ShippingStrategy): void {
    this.shippingType = shippingType;
  }

  public calculate(weight: number, distance: number): number {
    return this.shippingType.calculate(weight, distance);
  }
}
```
Ela não sabe qual transportadora está sendo usada, apenas delega o cálculo à estratégia injetada.
<br>
### Controller
A controller recebe o tipo de envio via requisição e seleciona dinamicamente a estratégia correta:
```typescript
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

```

## ✅ Vantagens dessa abordagem

Flexível: novas transportadoras podem ser adicionadas sem alterar a lógica existente.
<br>
Desacoplado: separa regras de negócio da lógica de cálculo.
<br>
Testável: cada estratégia pode ser testada isoladamente.
<br>
Extensível: aberto para novas funcionalidades sem alterar código já funcional (princípio aberto/fechado).









