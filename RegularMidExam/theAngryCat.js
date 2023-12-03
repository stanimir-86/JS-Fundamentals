// function theAngryCat(priceRating, enteryPoint, typeOfItems) {


//     let leftDamage = priceRating.splice(0, enteryPoint);
//     let rightDamage = priceRating.splice(enteryPoint);

//     let sumLeftCheap = 0;
//     let sumLeftExp = 0;
//     let sumRightCheap = 0;
//     let sumRightExp = 0;

//     let totalLeftSum = 0;
//     let totalRightSum = 0;

//     for (let i = 0; i < leftDamage.length; i++) {
//         let items = Number(leftDamage[i]);
//         if (items < enteryPoint) {
//             sumLeftCheap += items;
//         } else if (items >= enteryPoint) {
//             sumLeftExp += items;
//         }

//     }

//     for (let i = 0; i < rightDamage.length; i++) {
//         let items = Number(rightDamage[i]);
//         if (items < enteryPoint) {
//             sumRightCheap += items;
//         } else if (items >= enteryPoint) {
//             sumRightExp += items;
//         }

//     }
//     totalLeftSum = sumLeftCheap + sumLeftExp;
//     totalRightSum = sumRightCheap + sumRightExp;
//     if (totalLeftSum > totalRightSum) {
//         console.log(`Left - ${totalLeftSum}`);
//     } else if (totalLeftSum < totalRightSum) {
//         console.log(`Right - ${totalRightSum}`);
//     } else if (totalLeftSum === totalRightSum) {
//         console.log(`Left - ${totalLeftSum}`);
//     }

// }

function theAngryCat(pricingRatings, entryPoint, type) {
    const leftItems = pricingRatings.slice(0, entryPoint);
    const rightItems = pricingRatings.slice(entryPoint + 1);
  
    let leftSum = 0;
    let rightSum = 0;
  
    if (type === "cheap") {
      leftSum = leftItems.reduce((acc, val) => (val < pricingRatings[entryPoint] ? acc + val : acc), 0);
      rightSum = rightItems.reduce((acc, val) => (val < pricingRatings[entryPoint] ? acc + val : acc), 0);
    } else if (type === "expensive") {
      leftSum = leftItems.reduce((acc, val) => (val >= pricingRatings[entryPoint] ? acc + val : acc), 0);
      rightSum = rightItems.reduce((acc, val) => (val >= pricingRatings[entryPoint] ? acc + val : acc), 0);
    }
  
    if (leftSum > rightSum) {
      console.log(`Left - ${leftSum}`);
    } else if (rightSum > leftSum) {
      console.log(`Right - ${rightSum}`);
    } else {
      console.log(`Left - ${leftSum}`);
    }
  }
theAngryCat([1, 5, 1],

    1,

    "cheap");
theAngryCat([5, 10, 12, 5, 4, 20],

    3,

    "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],

    7,

    "expensive");
