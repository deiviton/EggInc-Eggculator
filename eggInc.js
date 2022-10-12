function main() {
    var chickenNow = 5299545;
    var chickenGrowth = 804 * 4;
    var eggValue = 3.772;
    var eggChar = 'M';
    var laidByMinNow = 1.285;
    var laidByMinNowChar = 'B';
    var soulEggs = 311422;
    var soulEggBonus = 19;
    var prophecyEggs = 5;
    var prophecyEggsBonus = Math.pow(prophecyEggs, 2);
    var henHouseCap = 8.4;
    var henHouseCapChar = 'M';
    var deliveryCap = 1.645;
    var deliveryCapChar = 'B';
    var timeInHours = 147;

    eggValue = magnitudeExchange(eggValue, eggChar);
    laidByMinNow = magnitudeExchange(laidByMinNow, laidByMinNowChar);
    henHouseCap = magnitudeExchange(henHouseCap, henHouseCapChar);
    deliveryCap = magnitudeExchange(deliveryCap, deliveryCapChar);

    var timeInMins = timeInHours * 60;
    var chickenByTheMorning = chickenNow + (chickenGrowth * timeInMins);
    var finalChickenByTheMorning = shortener(chickenByTheMorning);
    console.log("We'll have " + finalChickenByTheMorning + " chickens " + timeInHours + "h from now");

    var eggsLaidRatio = laidByMinNow / chickenNow;
    var laidByMinThen = chickenByTheMorning * eggsLaidRatio;
    var laidByMinThenStr = shortener(laidByMinThen);

    console.log("We'll be laying around " + laidByMinThenStr + " eggs per minute then.");

    var influx = (eggValue * (laidByMinThen / 60) * ((soulEggs * soulEggBonus) / 100));
    var influxStr = shortener(influx);

    console.log("The money earned per second will be around " + influxStr + " monies per second.");

    var timeToFull = 0;
    var tempChickenNow = chickenNow;
    while (tempChickenNow < henHouseCap) {
        tempChickenNow = tempChickenNow + chickenGrowth;
        timeToFull++;
    }

    timeToFull = timeConvert(timeToFull);
    console.log("The hen houses are expected to be full around " + timeToFull + "h from now.");

    timeToFull = 0;
    tempChickenNow = chickenNow;
    var tempLaidByMinNow = laidByMinNow;

    while (tempLaidByMinNow < deliveryCap) {
        tempChickenNow = tempChickenNow + chickenGrowth;
        tempLaidByMinNow = tempChickenNow * eggsLaidRatio;
        timeToFull++;
    }

    timeToFull = timeConvert(timeToFull);
    console.log("We have about " + timeToFull + "h until the delivery services are at maximum.");

    tempChickenNow = chickenNow;
    var fiveMChickens = 5;
    var fiveMChickensChar = 'M';
    fiveMChickens = magnitudeExchange(fiveMChickens, fiveMChickensChar);
    var tempfiveMChickens = tempChickenNow;
    var fiveMChickensTime = 0;
    while (tempfiveMChickens < fiveMChickens) {
        var tempfiveMChickens = tempfiveMChickens + (chickenGrowth);
        fiveMChickensTime++;
    }
    fiveMChickensTime = timeConvert(fiveMChickensTime);
    console.log("I'll get to 5 million chickens in " + fiveMChickensTime + " hours from now");

    //Contracts

    var contractCompletionTime = "0";
    var contractEggsLaid = '548';
    var contractEggsLaidChar = 'B';
    var tempEggsLaidRatio = eggsLaidRatio;
    var eventGoals = 1;
    var eventGoalsChar = 'T';

    eventGoals = magnitudeExchange(eventGoals, eventGoalsChar);
    contractEggsLaid = magnitudeExchange(contractEggsLaid, contractEggsLaidChar);

    while (contractEggsLaid < eventGoals) {
        contractEggsLaid = contractEggsLaid + (tempChickenNow * tempEggsLaidRatio);
        tempChickenNow = tempChickenNow + chickenGrowth;
        contractCompletionTime++;
    }

    contractCompletionTime = timeConvert(contractCompletionTime);
    console.log("I'll lay 1 trillion contract eggs in " + contractCompletionTime + " hours");
}

function timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;

    if (minutes == 0) {
        minutes = '00';
    } else if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return hours + ":" + minutes;
}

function shortener(toShorten) {
    let counter = 0;
    while (toShorten >= 1000000) {
        toShorten = toShorten / 1000;
        counter++;
    }

    toShorten = Math.round(toShorten);

    if (toShorten >= 1000) {
        toShorten = toShorten / 1000;
    }

    if (counter == 1) {
        toShorten = toShorten + "M";
    } else if (counter == 2) {
        toShorten = toShorten + "B";
    } else if (counter == 3) {
        toShorten = toShorten + "T";
    } else if (counter == 4) {
        toShorten = toShorten + "q";
    } else if (counter == 5) {
        toShorten = toShorten + "Q";
    } else if (counter == 6) {
        toShorten = toShorten + "s";
    } else if (counter == 7) {
        toShorten = toShorten + "S";
    } else if (counter == 8) {
        toShorten = toShorten + "o";
    } else if (counter == 9) {
        toShorten = toShorten + "O";
    }

    return toShorten;
}

function magnitudeExchange(value, char) {
    switch (char) {
        case 'M':
            value = value * 1000000;
            break;
        case 'B':
            value = value * 1000000000;
            break;
        case 'T':
            value = value * 1000000000000;
            break;
        case 'q':
            value = value * 1000000000000000;
            break;
        case 'Q':
            value = value * 1000000000000000000;
            break;
        case 's':
            value = value * 1000000000000000000000;
            break;
        case 'S':
            value = value * 1000000000000000000000000;
            break;
        case 'o':
            value = value * 1000000000000000000000000000;
            break;
        default:
            value = value;
    }
    return value;
}

main();