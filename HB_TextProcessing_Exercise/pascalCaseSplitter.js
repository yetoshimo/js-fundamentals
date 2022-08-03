function pascalCase(givenString) {
    let wordRe = /[A-Z][^A-Z]*/g;
	console.log(givenString.match(wordRe).join(', '));
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCanSS')
// pascalCase('HoldTheDoor')
// pascalCase('ThisIsSoAnnoyingToDo')