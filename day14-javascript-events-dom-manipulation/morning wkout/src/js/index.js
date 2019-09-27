const nidIsValid = (nid) => {
  const intNID = parseInt(nid, 10);

  if (Number.isNaN(intNID)) {
    return false;
  }

  if (intNID < 1000000000 || intNID > 9999999999) {
    return false;
  }

  if (intNID % 11 !== 0) {
    return false;
  }
};
