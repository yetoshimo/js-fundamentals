function extractEmails(givenText) {
    let emailReg = /(?<validEmail>(^|(?<=\s))(?<username>[A-Za-z0-9]+[\.\-\_]?[A-Za-z0-9]+)@([A-Za-z]+[\-.])+([\w]+)(\b|(?=\s)))/g;
    givenText.match(emailReg).forEach(e => {
        console.log(e)
    })
}


extractEmails('Please contact us at: support@github.com.')

extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')

extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')