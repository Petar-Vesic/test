// input fucntio

const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'a:',
    message: 'a:',
  },
  {
    type: 'input',
    name: 'b:',
    message: 'b:',
    default: function () {},
  },
  {
    type: 'input',
    name: 'c:',
    message: 'c:',
    default: function () {},
  },
]

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '))
})
//  memo function
function memo(questions) {
  var cache = {}
  return function () {
    var key = JSON.stringify(questions.type)
    if (cache[key]) {
      console.log(cache)
      return cache[key]
    } else {
      val = questions.apply(null, questions.type)
      cache[key] = val
      return val
    }
  }
}
memo()
