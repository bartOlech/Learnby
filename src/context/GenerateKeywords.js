const generateKeywords = (subject) => {
    const arr = []
    let curWord = ''
    subject.toLowerCase().split('').forEach(val => {
        curWord += val
        arr.push(curWord)
    })
    return arr
}

export default generateKeywords;