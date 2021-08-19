import * as ActionTypes from './ActionTypes'

export const selectedChooseFormValues = (formValues) => ({
  type: ActionTypes.SELECTED_CHOOSE_FORM_VALUES,
  payload: formValues
});

export const selectedCreateCharValues = (createFormValues) => ({
  type: ActionTypes.SELECTED_CREATE_CHAR_VALUES,
  payload: createFormValues
});

export const selectedContactFormValues = (contactFormValues) => ({
  type: ActionTypes.SELECTED_CONTACT_FORM_VALUES,
  payload: contactFormValues
});