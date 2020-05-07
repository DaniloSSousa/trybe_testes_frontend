1 - A função sum(a, b) retorna a soma do parâmetro a com o b.

1. Teste se o retorno de sum(4, 5) é 9
2. Teste se o retorno de sum(0, 0) é 0
3. Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
4. Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")

2 - A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr.

1. Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
2. Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado

3 - A função mySum(arr) recebe um array arr e retorna a soma de seus elementos.

1. Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
2. Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado

4 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array.

1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3. Verifique se o array passado por parâmetro não sofreu alterações
4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

5 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array.

1. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
2. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3. Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
4. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

6 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divísivel por 3 ou 5 e retorna false caso num não seja um número.

1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

7 - Teste se uma variável foi definida.

8 - Teste se uma função foi definida.

9 - Utilize assert.ok() para testar uma condição.

10 - Compare dois objetos (JSON) para verificar se são idênticos ou não.

11 - Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
