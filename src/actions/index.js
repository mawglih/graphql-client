export const SUBMIT_FORM_START = 'SUBMIT_FORM_START';
// export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
// export const SUBMIT_FORM_FAILURE = 'SUBMIT_FORM_FAILURE';
// export const LOGOUT = 'LOGOUT';
// export const GET_ITEMS_START = 'GET_ITEMS_START';
// export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
// export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
// export const GET_ITEM_BY_ID_START = 'GET_ITEM_BY_ID_START';
// export const GET_ITEM_BY_ID_SUCCESS = 'GET_ITEM_BY_ID_SUCCESS';
// export const GET_ITEM_BY_ID_FAILURE = 'GET_ITEM_BY_ID_FAILURE';

export const submitFormStart = (payload) => {
  console.log('action submit form paylod: ', payload);
  return{
    type: SUBMIT_FORM_START,
    payload,
  };
};