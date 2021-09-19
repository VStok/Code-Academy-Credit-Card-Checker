// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

function validateCred(array){
    let sum = 0;
    
    for (let i=array.length; i>0; i--){
       
        let j = array[i-1];
        
        if (i%2 == 1){
            j = j*2;
                     
            if (j>9){
                j=j%10+1; // it will be a number between 10 and 19 so you need the modulo of 10 + the 1 in front
                
            };
        };
        
        sum = sum + j;
        
    };
    
    if(sum%10 == 0){
        return true;    
    }else{
        return false;
    };
};

function findInvalidCards(array){
    invalidCards = [];
    for (let card of array){
        if(!validateCred(card)){
            invalidCards.push(card);
        };
    };
    return invalidCards;
}

let cardCompanyDigits = {
    3: 'Amex',
    4: 'Visa',
    5: 'Mastercard',
    6: 'Discover'
};


function idInvalidCardCompanies(array){
    const cardCompanyDigitsKeys = Object.keys(cardCompanyDigits);
    let companies = []; // index
    let companiesNames = []; // values
    for (let item of array){
        
        let bool = cardCompanyDigitsKeys.includes(item[0].toString());
        if(cardCompanyDigitsKeys.includes(item[0].toString())&&!companies.includes(item[0])){
            companies.push(item[0]);
        };
        
    };
    for (let companyKey in companies){
        
        companiesNames.push(cardCompanyDigits[companies[companyKey]]);
    }
    return companiesNames;
}
//console.log(validateCred(valid2));
//console.log(findInvalidCards(batch).length);
//console.log(validateCred(findInvalidCards(batch)[2]));

let arrayInvalidCards = findInvalidCards(batch);
console.log(arrayInvalidCards);

console.log(idInvalidCardCompanies(arrayInvalidCards));









