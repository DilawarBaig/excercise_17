/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guests:string[] = ["Asad","Juned","Daud","Bilal","Zeeshan","Kumail"]

//printing message saying that we can only invite two people for dinner.
console.log(`respected guests, unfortunately the new dinner table won't be deliverd in time,so we can invite only two people.`)

//removing first guests.
let removedguest1 = guests.pop()
console.log(`${removedguest1} we can't invite you this time, we sincerly apologize.`)

//removing second guests.
let removedguest2 = guests.pop()
console.log(`${removedguest2} we can't invite you this time, we sincerly apologize.`)

//removing third guests.
let removedguest3 = guests.pop()
console.log(`${removedguest3} we can't invite you this time, we sincerly apologize.`)

//removing forth guests.
let removedguest4 = guests.pop()
console.log(`${removedguest4} we can't invite you this time, we sincerly apologize.`)

//printing a message to two guests that they are still invited.
for (let i=0; i<guests.length;i++){
    console.log(`${guests[i]} you are still invited for dinner, thank you.`)
}

//removing the last two people as well.
guests.splice(0,2)

//guests list after removing both the guests.
console.log("guests list: "+ guests)