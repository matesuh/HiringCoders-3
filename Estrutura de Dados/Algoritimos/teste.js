var list = [1, 3, 2, 4, 5, 6, 7, 8, 9]

function order(num) {
   let begin = 0
   let end = 9
   let tmp

   for (i = 0; i < 9; i++) {
      for (pos = begin; pos < end - 1 - i; pos++) {
         if (list[pos] > list[pos] + 1) {
            tmp = list[pos]
            list[pos] = list[pos + 1]
            list[pos + 1] = tmp
         }
      }
   }
}

order()
console.log('ordening list...')
console.log(list)
console.log(i)
