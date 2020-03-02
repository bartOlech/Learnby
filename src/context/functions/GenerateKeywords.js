const generateKeywords = (subject) => {
    const arr = []
    let curWord = ''
    const secondWord = subject.split(' ')
    let secCurWord = ''
    subject.toLowerCase().split('').forEach(val => {
        curWord += val
        arr.push(curWord)
    })
    // split the array if it has two words
    if(secondWord[1]) {
        secondWord[1].toLowerCase().split('').forEach(val => {
            secCurWord += val
            arr.push(secCurWord)
        })
    }
    return arr
}

export default generateKeywords;