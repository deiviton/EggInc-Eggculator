function main() {
    var chickenNow = 618582;
    var chickenGrowth = 1184 * 4;
    var eggValue = 7.581;
    var eggChar = 'B';
    var laidByMinNow = 255.050;
    var laidByMinNowChar = 'M';
    var soulEggs = 5318500;
    var soulEggBonus = 20;
    var prophecyEggs = 2;
    var prophecyEggsBonus = Math.pow(prophecyEggs, 2);
    var henHouseCap = 16.8;
    var henHouseCapChar = 'M';
    var deliveryCap = 1.263;
    var deliveryCapChar = 'B';
    var timeInHours = (29 * 24) + 21;

    eggValue = magnitudeExchange(eggValue, eggChar);
    laidByMinNow = magnitudeExchange(laidByMinNow, laidByMinNowChar);
    henHouseCap = magnitudeExchange(henHouseCap, henHouseCapChar);
    deliveryCap = magnitudeExchange(deliveryCap, deliveryCapChar);

    var timeInMins = timeInHours * 60;
    var chickenByTheMorning = chickenNow + (chickenGrowth * timeInMins);
    var finalChickenByTheMorning = shortener(chickenByTheMorning);
    console.log("We'll have " + finalChickenByTheMorning + " chickens " + timeConvert(timeInHours) + " hours from now");

    var eggsLaidRatio = laidByMinNow / chickenNow;
    var laidByMinThen = chickenByTheMorning * eggsLaidRatio;
    var laidByMinThenStr = shortener(laidByMinThen);

    console.log("We'll be laying around " + laidByMinThenStr + " eggs per minute then.");

    var influx = (eggValue * (laidByMinThen / 60) * ((soulEggs * soulEggBonus) / 100));
    var influxStr = shortener(influx);

    console.log("The money earned per second will be around " + influxStr + " credits per second.");

    var timeToFull = 0;
    var tempChickenNow = chickenNow;
    while (tempChickenNow < henHouseCap) {
        tempChickenNow += chickenGrowth;
        timeToFull++;
    }

    timeToFull = timeConvert(timeToFull);
    console.log("The hen houses are expected to be full around " + timeToFull + " hours from now.");

    timeToFull = 0;
    tempChickenNow = chickenNow;
    var tempLaidByMinNow = laidByMinNow;

    while (tempLaidByMinNow < deliveryCap) {
        tempChickenNow += chickenGrowth;
        tempLaidByMinNow = tempChickenNow * eggsLaidRatio;
        timeToFull++;
    }

    timeToFull = timeConvert(timeToFull);
    console.log("We have about " + timeToFull + " hours until the delivery services are at maximum.");

    tempChickenNow = chickenNow;
    var fiveMChickens = 5;
    var fiveMChickensChar = 'M';
    fiveMChickens = magnitudeExchange(fiveMChickens, fiveMChickensChar);
    var tempfiveMChickens = tempChickenNow;
    var fiveMChickensTime = 0;
    while (tempfiveMChickens < fiveMChickens) {
        tempfiveMChickens += chickenGrowth;
        fiveMChickensTime++;
    }
    fiveMChickensTime = timeConvert(fiveMChickensTime);
    console.log("I'll get to 5 million chickens in " + fiveMChickensTime + " hours from now");

    //Contracts

    var contractCompletionTime = 0;
    var contractEggsLaid = 13.5;
    var contractEggsLaidChar = 'B';
    var tempEggsLaidRatio = eggsLaidRatio;
    var eventGoals = 20;
    var eventGoalsChar = 'q';

    eventGoals = magnitudeExchange(eventGoals, eventGoalsChar);
    contractEggsLaid = magnitudeExchange(contractEggsLaid, contractEggsLaidChar);

    while (contractEggsLaid < eventGoals) {
        contractEggsLaid += (tempChickenNow * tempEggsLaidRatio);
        tempChickenNow += chickenGrowth;
        contractCompletionTime++;
    }

    contractCompletionTime = timeConvert(contractCompletionTime);
    console.log("I'll lay enough contract eggs in " + contractCompletionTime + " hours");

    var eventAverageRatioNeeded = eventGoals / timeInMins;
    var chickensToGetAverageNeeded = shortener(chickenNow * (eventAverageRatioNeeded / laidByMinNow));
    eventAverageRatioNeeded = shortener(eventAverageRatioNeeded);

    console.log("To get the average of " + eventAverageRatioNeeded + " eggs laid by minute, i'll need to get "
        + chickensToGetAverageNeeded + " chickens.");
}

function timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    var days;

    if (minutes == 0) {
        minutes = '00';
    } else if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (hours > 24) {
        days = Math.floor(hours / 24);
        hours = hours - (days * 24);

        if (days > 1) {
            return days + " days and " + hours + ":" + minutes;
        } else {
            return days + " day and " + hours + ":" + minutes;
        }
    } else {
        return hours + ":" + minutes;
    }
}

function shortener(toShorten) {
    let counter = 0;

    while (toShorten >= 1000000) {
        toShorten /= 1000;
        counter++;
    }

    toShorten = Math.round(toShorten);

    if (toShorten >= 1000) {
        toShorten /= 1000;
    }

    switch (counter) {
        case 1:
            toShorten += "M";
            break;
        case 2:
            toShorten += "B";
            break;
        case 3:
            toShorten += "T";
            break;
        case 4:
            toShorten += "q";
            break;
        case 5:
            toShorten += "Q";
            break;
        case 6:
            toShorten += "s";
            break;
        case 7:
            toShorten += "S";
            break;
        case 8:
            toShorten += "o";
            break;
        case 9:
            toShorten += "N";
            break;
    }

    return toShorten;
}

function magnitudeExchange(value, char) {
    switch (char) {
        case 'M':
            value *= 1000000;
            break;
        case 'B':
            value *= 1000000000;
            break;
        case 'T':
            value *= 1000000000000;
            break;
        case 'q':
            value *= 1000000000000000;
            break;
        case 'Q':
            value *= 1000000000000000000;
            break;
        case 's':
            value *= 1000000000000000000000;
            break;
        case 'S':
            value *= 1000000000000000000000000;
            break;
        case 'o':
            value *= 1000000000000000000000000000;
            break;
        default:
            return value;
    }

    return value;
}

main();