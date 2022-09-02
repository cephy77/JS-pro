// Solution #1
try {
  console.log(`Price: ${user.cart[0].price}`);
} catch (error) {
  if ((error.name = ReferenceError)) {
    //wait for backend or do something
  } else {
    throw new Error("definatelyNotAReferenceError");
  }
}

//Solution #2
let user; // without it this solution and the next one doesnt work :c
if (user?.cart[0]?.price) {
  console.log(`Price: ${user.cart[0].price}`);
} else {
  //wait for backend or do something
}

//Solution #3
if (user && user.cart[0] && user.cart[0].price) {
  console.log(`Price: ${user.cart[0].price}`);
} else {
  //wait for backend or do something
}
