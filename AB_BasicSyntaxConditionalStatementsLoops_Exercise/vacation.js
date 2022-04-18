function vacation(numberOfPeople, group, dayOfWeek) {
    const priceList = {
        "Students": {
            "Friday": 8.45,
            "Saturday": 9.8,
            "Sunday": 10.46,
        },
        "Business": {
            "Friday": 10.9,
            "Saturday": 15.6,
            "Sunday": 16,
        },
        "Regular": {
            "Friday": 15,
            "Saturday": 20,
            "Sunday": 22.5,
        }
    };

    totalPrice = numberOfPeople * priceList[group][dayOfWeek];

    if (group == "Students" && numberOfPeople >= 30) {
        totalPrice *= 0.85;
    } else if (group == "Business" && numberOfPeople >= 100) {
        totalPrice -= 10 * priceList[group][dayOfWeek];
    } else if (group == "Regular" && (numberOfPeople >= 10 && numberOfPeople <= 20)) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(
    30,
    "Students",
    "Sunday"
)

vacation(
    40,
    "Regular",
    "Saturday"
)