import { VOLS } from "./dataTypes";
import { STORE, UPDATE, DELETE } from "./modelActionTypes";

let idCounter = 100;

export const saveVol = (vol) => {
  return createSaveEvent(VOLS, vol);
};

const createSaveEvent = (dataType, payload) => {
  if (!payload.id) {
    return {
      type: STORE,
      dataType: dataType,
      payload: { ...payload, id: idCounter++ }
    };
  } else {
    return {
      type: UPDATE,
      dataType: dataType,
      payload: payload
    };
  }
};

export const deleteEvent = (vols) => ({
  type: DELETE,
  dataType: VOLS,
  payload: payload
});
