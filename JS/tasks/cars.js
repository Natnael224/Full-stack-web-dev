export function caroptions(money) {
    let carType;

    if (money >= 100 && money <= 10000) {
        carType = 'Toyota';
    } else if (money > 10000 && money <= 30000) {
        carType = 'BMW';
    } else if (money > 30000 && money <= 50000) {
        carType = 'Audi';
    } else {
        carType = 'No car available';
    }

    return carType;
}