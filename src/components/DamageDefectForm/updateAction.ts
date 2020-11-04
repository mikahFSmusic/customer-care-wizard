export default function updateAction(state:any, payload:any) {
  return {
    ...state,
    formDetails: {
      ...state.formDetails,
      ...payload
    }
  };
}