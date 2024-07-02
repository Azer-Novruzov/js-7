let month = prompt("Ayin nomresini (1 veya 01) formatinda daxil edin");
    month = Number(month);
    switch (month) {
        case 1:
            console.log("Yanvar");
            break;
        case 2:
            console.log("Fevral");
            break;
        case 3:
            console.log("Mart");
            break;
        case 4:
            console.log("Aprel");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("İyun");
            break;
        case 7:
            console.log("İyul");
            break;
        case 8:
            console.log("Avqust");
            break;
        case 9:
            console.log("Sentyabr");
            break;
        case 10:
            console.log("Oktyabr");
            break;
        case 11:
            console.log("Noyabr");
            break;
        case 12:
            console.log("Dekabr");
            break;
        default:
            console.log("Yanlış ay nömrəsi");
}
let date = prompt("Tarixi YYYY.MM.DD formatında daxil edin");
if (date) {
    let parts = date.split('.');
    if (parts.length === 3) {
        let year = Number(parts[0]);
        let month2 = Number(parts[1]);
        let day = Number(parts[2]);
        let monthName;
        if (day >= 1 && day <= 31) {
        switch (month2) {
            case 1:
                monthName = "Yanvar";
                break;
            case 2:
                monthName = "Fevral";
                break;
            case 3:
                monthName = "Mart";
                break;
            case 4:
                monthName = "Aprel";
                break;
            case 5:
                monthName = "May";
                break;
            case 6:
                monthName = "Iyun";
                break;
            case 7:
                monthName = "Iyul";
                break;
            case 8:
                monthName = "Avqust";
                break;
            case 9:
                monthName = "Sentyabr";
                break;
            case 10:
                monthName = "Oktyabr";
                break;
            case 11:
                monthName = "Noyabr";
                break;
            case 12:
                monthName = "Dekabr";
                break;
            default:
                console.log("Yanlış ay nömrəsi");
                break;
        }
        if (monthName) {
            console.log(`Girilən tarix: ${day} ${monthName} ${year}-ci il`);
        }
    } else {
        console.log("Yanlış gün formatı. 1 ilə 31 arasında bir gün daxil edin");
    }
    } else {
        console.log("Yanlış tarix formatı. YYYY.MM.DD formatından istifadə edin");
    }
} else {
    console.log("Tarix daxil edilməyib");
}