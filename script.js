// Javascript that tells you the cost of your pizza given different sizes and toppings.

document.getElementById('submitbutton').addEventListener('click', pizzaCost)
// Once the user clicks the submit button, the function pizzaCost () will execute.

function pizzaCost () {
  // The function that calculates the price of the pizza. Executes on the submit button being pressed.

  const large = document.getElementById('large').value
  const xlarge = document.getElementById('extralarge').value
  const toppingOne = document.getElementById('onetopping').value
  const toppingTwo = document.getElementById('twotopping').value
  const toppingThree = document.getElementById('threetopping').value
  const toppingFour = document.getElementById('fourtopping').value
  const pickedSize = document.getElementById('size').value
  const pickedToppings = document.getElementById('toppingamount').value
  // Sets variables to values on the form. Needed to make the following statements work. 
  
  if (pickedSize === large && pickedToppings === toppingOne) {
    alert('The Cost of your Pizza is $7.91.')
  } else if (pickedSize === large && pickedToppings === toppingTwo) {
    alert('The Cost of your Pizza is $8.76')
  } else if (pickedSize === large && pickedToppings === toppingThree) {
    alert('The Cost of your Pizza is $9.61')
  } else if (pickedSize === large && pickedToppings === toppingFour) {
    alert('The Cost of your Pizza is $10.57')
  } else if (pickedSize === xlarge && pickedToppings === toppingOne) {
    alert('The Cost of your Pizza is $12.43')
  } else if (pickedSize === xlarge && pickedToppings === toppingTwo) {
    alert('The Cost of your Pizza is $13.28')
  } else if (pickedSize === xlarge && pickedToppings === toppingThree) {
    alert('The Cost of your Pizza is $14.13')
  } else if (pickedSize === xlarge && pickedToppings === toppingFour) {
    alert('The Cost of your Pizza is = $15.09')
  } else {
    alert('There is a bug!')
  }
  // Checks to see which size and topping the user picked. I would use a switch statement but I couldn't figure it out.
}