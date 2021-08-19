//types
import * as ActionTypes from './ActionTypes'

//data

const initialState = {
  formValues: '',
  createFormValues: '',
  contactFormValues: ''
}

export const formValues = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_CHOOSE_FORM_VALUES:
      return { ...state, formValues: action.payload }
    case ActionTypes.SELECTED_CREATE_CHAR_VALUES:
      return { ...state, createFormValues: action.payload }
    case ActionTypes.SELECTED_CONTACT_FORM_VALUES:
      return { ...state, contactFormValues: action.payload }
    // case ActionTypes.LOAD_PROFILE:
    //   return { ...state, CardHeader: CHOOSE_FORM_CARD_HEADER, CardBody: CHOOSE_FORM_CARD_BODY }
    default:
      return state
  }
}
