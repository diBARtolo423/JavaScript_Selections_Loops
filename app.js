console.log("Hello World!\n==========\n");

// Exercise 1 Section
// for statement
// for (let number = 1; number <= 100; number++) 
// {
//     if (number % 2 != 0) 
//     {
//         console.log({number});
//     } else
//     {
//         continue
//     }
// }

// while statement
// let number = 1;
// while (number <= 100)
// {
//     if (number % 2 != 0) 
//     {
//         console.log({number});
//     } 
//     number++;
// }

// do/while statement
// let number = 1;
// do
// {
//     if (number % 2 != 0) 
//     {
//         console.log({number});
//     } 
//     number++;
// }
// while (number <= 100)

// Exercise 2 Section
// for (let number = 1; number <= 100; number++)
// {
//     if (number % 3 == 0)
//     {
//         console.log(`${number} - FIZZ`);
//     }
//     if (number % 5 == 0)
//     {
//         console.log(`${number} - BUZZ`);
//     }
//     if (number % 3 == 0 && number % 5 == 0)
//     {
//         console.log(`${number} - FIZZBUZZ`)
//     }
//     else
//     {
//         continue
//     }
// }

// while statement
// let number = 1;
// while (number <= 100)
// {
//     if (number % 3 == 0)
//     {
//         console.log(`${number} - FIZZ`);
//     }
//     if (number % 5 == 0)
//     {
//         console.log(`${number} - BUZZ`);
//     }
//     if (number % 3 == 0 && number % 5 == 0)
//     {
//         console.log(`${number} - FIZZBUZZ`)
//     }
//     number++;
// }

// do/while statement
// let number = 1;
// do
// {
//     if (number % 3 == 0)
//     {
//         console.log(`${number} - FIZZ`);
//     }
//     if (number % 5 == 0)
//     {
//         console.log(`${number} - BUZZ`);
//     }
//     if (number % 3 == 0 && number % 5 == 0)
//     {
//         console.log(`${number} - FIZZBUZZ`)
//     }
//     number++;
// }
// while (number <= 100)


// let value = Math.round((Math.random() * 500));
// let n = Math.round(Math.random() * (500 - 100) + 100);
// number = 0;
// for (let number = 0; number <= n; number++) 
// {
//     if (number = value) 
//     {
//         console.log(`${number} - Found Value!`);
//         break;
//     }
// }
// if (nn != value)
// {
//     console.log(`Did not find value`)
// }
// console.log(`value = ${value}\n = ${number}`);

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let number = start; number <= n; number++)
{
    if (number % fizzDivisor == 0)
    {
        console.log(`${number} - FIZZ`);
    }
    if (number % buzzDivisor == 0)
    {
        console.log(`${number} - BUZZ`);
    }
    if (number % fizzDivisor == 0 && number % buzzDivisor == 0)
    {
        console.log(`${number} - FIZZBUZZ`)
    }
    else
    {
        continue
    }
}