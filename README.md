# time-limit
Limite o tempo em que um usuário pode ficar online no fórum, até redirecionar ele para a página de registro.

## Instruções
Adicionando o seguinte código já é o suficiente para iniciar o plugin:
```javascript
$.timeLimit();
```

## Customização
Você pode customizar alguns elementos do plugin da seguinte forma:
```javascript
$.timeLimit({
    propriedade: 'valor'
});
```

**Você pode usar as seguintes propriedades para customizar o plugin**

`timeout` Tempo entre cada vez que a mensagem será mostrada

`default: 60000`


---


`title` Título de mensagem

`default: 'Atenção!!'`


---


`message` A mensagem que aparece para o usuário

`default: 'Por favor, para continuar navegando efetue o <a href="/register">registro</a> em nosso fórum.'`


---


`closeMessage` Texto do botão fechar

`default: 'Fechar'`


---


`redirect` URL para onde o usuário será redirecionado

`default: '/register'`


---


`theme` Tema da mensagem,

`default: 'alizarin'`

**Temas disponíveis**
* river
* turquoise
* emerald
* amethyst
* asphalt
* summer
* carrot
* alizarin
* concrete


---


`display`: Número de vezes que a mensagem aparece antes do usuário ser redirecionado

`default: 60000`


