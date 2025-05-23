//problem 1:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); // Output: 390


//problem 2

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}


// Example usage:
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log("Before:", menu);
multiplyNumeric(menu);
console.log("After:", menu);

//problem 3

function checkEmailId(str) {
  str = str.toLowerCase();
  let atIndex = str.indexOf('@');
  let dotIndex = str.indexOf('.');

  if (atIndex === -1 || dotIndex === -1) {
    return false;
  }

  if (atIndex > dotIndex) {
    return false;
  }

  if (dotIndex - atIndex <= 1) {
    return false;
  }

  return true;
}


//problem 4

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}


//problem 5

let styles = ["James", "Brennie"];
console.log(styles);

styles.push("Robert");
console.log(styles);

styles[Math.floor(styles.length / 2)] = "Calvin";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rose", "Regal");
console.log(styles); // ["Rose", "Regal", "Calvin", "Robert"]

