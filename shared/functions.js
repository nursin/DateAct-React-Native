export function generateProfile(charType, charData, formValues, attributeToShow, randomFamousPerson) {
  // console.log("CharData",charData)
  var gender;
  if (charType === 'famous'){
    // run famous profile
    if (formValues.formValues.charGender === 'male') {
      gender = charData.famousMales;
    } else if (formValues.formValues.charGender === 'female') {
      gender = charData.famousFemales;
    } else if (formValues.formValues.charGender === 'androgen' || formValues.formValues.charGender === 'neutral') {
      gender = charData.famousUnisex;
    } else {
      gender = [...charData.famousMales, ...charData.famousFemales, ...charData.famousUnisex];
    } 

    if (attributeToShow === 'name'){
      return gender[randomFamousPerson].name
    } else if (attributeToShow === 'age'){
      return gender[randomFamousPerson].age
    } else if (attributeToShow === 'horoscope'){
      return gender[randomFamousPerson].horoscope
    } else if (attributeToShow === 'type'){
      return 'Famous'
    } else if (attributeToShow === 'bio'){
      return gender[randomFamousPerson].bio
    } else if (attributeToShow === 'adjectives'){
      return gender[randomFamousPerson].adjectives
    } else if (attributeToShow === 'quirkyFact'){
      return gender[randomFamousPerson].quirkyFact
    } else if (attributeToShow === 'profession'){
      return gender[randomFamousPerson].profession
    }
  } else if (charType === 'notFamous'){
    // run notfamous profile random selection profile
    if (attributeToShow === 'name'){
      return generateName(formValues.charGender, charData.maleNames, charData.femaleNames, charData.unisexNames, charData.lastNames)
    } else if (attributeToShow === 'age'){
      return generateAge(formValues.formValues.charAge)
    } else if (attributeToShow === 'horoscope'){
      return randomHoroscope(charData.horoscopes)
    } else if (attributeToShow === 'type'){
      return 'Not Famous'
    } else if (attributeToShow === 'bio'){
      return generateBIO()
    } else if (attributeToShow === 'adjectives'){
      return generateAdjectives(charData.adjectives.positive, charData.adjectives.negative)
    } else if (attributeToShow === 'quirkyFact'){
      return generateQuirkyFact(charData.quirkyFacts)
    } else if (attributeToShow === 'profession'){
      return generateProfession(charData.professions)
    }
  } else if (charType === 'createYourOwn') {
    // create your own profile form appears
    if (attributeToShow === 'name'){
      return formValues.createFormValues.createName
    } else if (attributeToShow === 'age'){
      return formValues.createFormValues.createAge
    } else if (attributeToShow === 'horoscope'){
      return formValues.createFormValues.createHoroscope
    } else if (attributeToShow === 'type'){
      return 'Create your own'
    } else if (attributeToShow === 'bio'){
      return formValues.createFormValues.createBio
    } else if (attributeToShow === 'adjectives'){
      return formValues.createFormValues.createAdjectives
    } else if (attributeToShow === 'quirkyFact'){
      return formValues.createFormValues.createQuirkyFact
    } else if (attributeToShow === 'profession'){
      return formValues.createFormValues.createProfession
    }
  } else {
    // if no selection on type run notfamous
    if (attributeToShow === 'name'){
      return generateName(formValues.charGender, charData.maleNames, charData.femaleNames, charData.unisexNames, charData.lastNames)
    } else if (attributeToShow === 'age'){
      return generateAge(formValues.formValues.charAge)
    } else if (attributeToShow === 'horoscope'){
      return randomHoroscope(charData.horoscopes)
    } else if (attributeToShow === 'type'){
      return 'Not Famous (default)'
    } else if (attributeToShow === 'bio'){
      return generateBIO()
    } else if (attributeToShow === 'adjectives'){
      return generateAdjectives(charData.adjectives.positive, charData.adjectives.negative)
    } else if (attributeToShow === 'quirkyFact'){
      return generateQuirkyFact(charData.quirkyFacts)
    } else if (attributeToShow === 'profession'){
      return generateProfession(charData.professions)
    }
  }
}

function generateName(gender, maleNames, femaleNames, unisexNames, lastNames) {
  if (gender === 'male') {
    return maleNames[Math.floor(Math.random()*maleNames.length)].name + ' ' + lastNames[Math.floor(Math.random()*lastNames.length)].name;
  } else if (gender === 'female') {
    return femaleNames[Math.floor(Math.random()*femaleNames.length)].name + ' ' + lastNames[Math.floor(Math.random()*lastNames.length)].name;
  } else if (gender === 'unisex') {
    return unisexNames[Math.floor(Math.random()*unisexNames.length)].name + ' ' + lastNames[Math.floor(Math.random()*lastNames.length)].name;
  } else {
    return maleNames[Math.floor(Math.random()*maleNames.length)].name + ' ' + lastNames[Math.floor(Math.random()*lastNames.length)].name;
  }
}

function generateAge(ageRange) {
  if (ageRange === '10-19') {
    return Math.floor(Math.random() * (19 - 10) + 10);
  } else if (ageRange === '20-29'){
    return Math.floor(Math.random() * (29 - 20) + 20);
  } else if (ageRange === '30-39'){
    return Math.floor(Math.random() * (39 - 30) + 30);
  } else if (ageRange === '40-49'){
    return Math.floor(Math.random() * (49 - 40) + 40);
  } else if (ageRange === '50-59'){
    return Math.floor(Math.random() * (59 - 50) + 50);
  } else if (ageRange === '59+'){
    return Math.floor(Math.random() * (125 - 59) + 59);
  } else {
    return Math.floor(Math.random() * (125 - 10) + 10);
  }
}

function randomHoroscope(horoscopes) {
  return horoscopes[Math.floor(Math.random()*horoscopes.length)].horoscope;
}

function generateBIO() {
  const GREW_UP_IN = ['small', 'large', 'jungle'];
  const LIKES = ['cats', 'dogs', 'tigers', 'peanuts', 'cilantro'];
  const OWNS_A = ['house', 'cat', 'dog', 'robot', 'boat', 'hospital', 'business'];
  const PLAYS = ['baseball', 'basketball', 'football', 'video games'];
  const BIGGEST_ACHIEVEMENT = ['ate a biscuit', 'ran a marathon', 'won a superbowl ring', 'have a baby'];
  const ULTIMATE_GOAL = ['be a dancer', 'fly a plane', 'have a baby', 'eat 60 pizzas', 'beat a guinness world record'];
  const ASPIRE_TO_BE = ['a bunny', 'hit man', 'gardener'];

  return "Grew up in a " + GREW_UP_IN[Math.floor(Math.random()*GREW_UP_IN.length)] + " town. Likes " + LIKES[Math.floor(Math.random()*LIKES.length)] + ". Owns a " + OWNS_A[Math.floor(Math.random()*OWNS_A.length)] + ". Plays " + PLAYS[Math.floor(Math.random()*PLAYS.length)] + ". Biggest achievement is " + BIGGEST_ACHIEVEMENT[Math.floor(Math.random()*BIGGEST_ACHIEVEMENT.length)] + ". My ultimate goal is to " + ULTIMATE_GOAL[Math.floor(Math.random()*ULTIMATE_GOAL.length)] + ". Aspire to be " + ASPIRE_TO_BE[Math.floor(Math.random()*ASPIRE_TO_BE.length)] + ".";
  // 'Movies','TV','Religion','Music','Sports','Books','Politics'
}

function generateAdjectives(positive, negative) {
  return positive[Math.floor(Math.random()*positive.length)].positive + "/" + negative[Math.floor(Math.random()*negative.length)].negative;
}

function generateQuirkyFact(quirkyFacts) {
  return quirkyFacts[Math.floor(Math.random()*quirkyFacts.length)].quirkyFact;
}

function generateProfession(professions) {
  return professions[Math.floor(Math.random()*professions.length)].profession; 
}
