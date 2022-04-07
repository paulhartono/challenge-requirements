
export const printQuestions = async (questions: any[]) => {

  console.log('====> PROCESS: do some housekeeping')
  console.log('')

  console.log('====> PROCESS: print answers')

  questions.forEach(question => {
    console.log('')
    switch(question.type) {
      case 'boolean': {
        console.log(question.desc)
        console.log('1. True')
        console.log('2. False')
        break
      }

      case 'multipleChoice': {
        console.log(question.desc)
        question.options.forEach((option: string, index: number) => {
          console.log(`${index+1} ${option}`)
        })
        break;
      }

      case 'text': {
        console.log(question.desc)
        console.log('Answer: _________')
        break
      }
    }
  })

  console.log('')
  console.log('====> PROCESS: notify that answers has been printed')
}


const questions = [
  {
    type: 'boolean',
    desc: 'Is Apple a fruit?'
  },
  {
    type: 'multipleChoice',
    desc: 'What is your favourite programming language?',
    options: ['Node.JS', 'C#', 'GO', 'PHP']
  },
  {
    type: 'text',
    desc: 'Describe your favourite Design Principle?'
  },
]

printQuestions(questions)
