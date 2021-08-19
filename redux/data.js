// data
import { NAMES_MALE, UNISEX_NAMES, NAMES_FEMALE, LAST_NAMES } from '../shared/names';
import { HOROSCOPE } from '../shared/horoscopes';
import { POSITIVE_ADJECTIVE_LIST, NEGATIVE_ADJECTIVE_LIST} from '../shared/adjectives';
import { QUIRKY_FACT } from '../shared/quirky-fact';
import { PROFESSION } from '../shared/profession';
import { FAMOUS_FEMALES, FAMOUS_MALES, FAMOUS_UNISEX } from '../shared/famous';

//types
// import * as ActionTypes from './ActionTypes'

//data

const initialState = {
  data: {
    maleNames: NAMES_MALE,
    femaleNames: NAMES_FEMALE,
    unisexNames: UNISEX_NAMES,
    lastNames: LAST_NAMES,
    horoscopes: HOROSCOPE,
    adjectives: {
      positive: POSITIVE_ADJECTIVE_LIST,
      negative: NEGATIVE_ADJECTIVE_LIST
    },
    quirkyFacts: QUIRKY_FACT,
    professions: PROFESSION,
    famousMales: FAMOUS_MALES,
    famousFemales: FAMOUS_FEMALES,
    famousUnisex: FAMOUS_UNISEX,
  }
}

export const data = (state = initialState, action) => {
  switch (action.type) {
    // case ActionTypes.LOAD_PROFILE:
    //   return { ...state, CardHeader: CHOOSE_FORM_CARD_HEADER, CardBody: CHOOSE_FORM_CARD_BODY }
    default:
      return state
  }
}

