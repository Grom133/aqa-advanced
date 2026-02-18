function calculateAreaDeclaration(width, height) {
    return width * height;
}

const areaDeclaration = calculateAreaDeclaration(5, 10);
console.log(areaDeclaration);

const calculateAreaExpression = function (width, height) {
    return width * height;
};

const areaExpression = calculateAreaExpression(2, 10);
console.log(areaExpression);

const calculateAreaArrow = (width, height) => {
    return width * height;
};

const areaFunction = calculateAreaArrow(5, 2);
console.log(areaFunction);