const isOldEnoughToDrink = true;

if (isOldEnoughToDrink){
    console.log('you are able to drink');
} else {
    console.log('you are not able to drink');
}

const currentAge = 25;

if (currentAge < 21){
    console.log('you are not able to drink');
} else if (currentAge > 80){
    console.log('you can drink but its not healthy for your current age');
} else {
    console.log('you are able to drink');
}

if (currentAge < 21){
    console.log('you are not able to drink');
} 
if (currentAge > 80){
    console.log('you can drink but its not healthy for your current age');
} else {
    
}


if (currentAge < 21 || currentAge > 80){
    console.log('you are not able to drink');
} else {
        console.log('you are able to drink');
}

const country = "Burkina Faso";
if (currentAge < 21 && country !== "Burkina Faso"){
    console.log('you are not able to drink');
} else {
        console.log('you are able to drink');
}

