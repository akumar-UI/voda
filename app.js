// TEST START:  Please enter the NAME below to TEST  //

const enterYourName = "Gwynyth"

// TEST END //

// Password Function START //

const password = unlockSafe(enterYourName)
function unlockSafe(customerName) {
  if (customerName.split(" ").length === 1) {

    const s1 = customerName.length
    const s2 = customerName.slice(-1).toUpperCase()

    const vow = customerName.match(/[aeiou]/gi)
    const s4 = vow === null ? 0 : vow.length

    let newFull = []
    customerName.toLowerCase().split("").forEach(n => {
      newFull.indexOf(n) === -1 ? newFull.push(n) : null
    })

    const newStrng = newFull.join("").replace(/\s/g, '').toLowerCase()

    let s5 = 0
    for (i = 0; i < newStrng.length; i++) {

      s5 += newStrng.codePointAt(i)
    }

    // Pass
    let pass = `${s1}-${s2}-${s4}-${s5}`

    return pass

  } else if (customerName.split(" ").length === 2) {

    const firstName = customerName.split(" ")[0]
    const secondName = customerName.split(" ")[1]
    // 1
    const s1 = firstName.length + secondName.length
    // 2
    const s2 = firstName.slice(-1).toUpperCase()
    // 3
    const s3 = secondName[0].toLowerCase()
    // 4
    const vow = customerName.match(/[aeiou]/gi)
    const s4 = vow === null ? 0 : vow.length
    // 5
    let newFull = []
    customerName.toLowerCase().split("").forEach(n => {

      newFull.indexOf(n) === -1 ? newFull.push(n) : null
    })

    const newStrng = newFull.join("").replace(/\s/g, '').toLowerCase()

    let s5 = 0
    for (i = 0; i < newStrng.length; i++) {

      s5 += newStrng.codePointAt(i)
    }

    // Pass
    let pass = `${s1}-${s2}-${s3}-${s4}-${s5}`

    return pass

  } else {
    console.log("Please Enter A Valid Name");
  }

}

function getItemFromSafe(password) {
  const itemsMap = {
    '10-A-w-4-878': 'Magic Wand',
    '16-R-a-9-1497': 'The one ring to rule them all',
    '5-N-3-441': 'Corgi',
    '9-Y-d-2-643': 'Apples and Pears',
    '7-H-0-673': 'Oscar nomination',
    '12-D-l-4-860': 'Chocolate Brownie'
  }
  return new Promise((resolve, reject) => {
    if (itemsMap[password]) {
      resolve(itemsMap[password])
    } else {
      reject('Unauthorised access to safe')
    }
  })
}

getItemFromSafe(password)
  .then(data => console.log(data))
  .catch(error => console.log(error))
