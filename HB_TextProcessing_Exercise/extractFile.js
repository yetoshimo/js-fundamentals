function extractFile(givenString) {
    let fullPath = givenString.split('\\');
    let fileName = fullPath[fullPath.length - 1];
    console.log(`File name: ${fileName.substring(0, fileName.lastIndexOf('.'))}`)
    console.log(`File extension: ${fileName.substring(fileName.lastIndexOf('.') + 1)}`)
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')