function checkOrder(available, ordered) {
    
    if (ordered === 0) {
        return "Your order is empty";
    }

    if (ordered > available) {
        return "Not enough items";
    }

    return "Order is accepted successfully";
}

console.log(checkOrder(10, 20));
console.log(checkOrder(10, 0));
console.log(checkOrder(10, 5));