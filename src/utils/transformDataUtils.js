export const addHashToColorCodes = (contacts) => {
  return contacts.map((contact) => addHashToColorCode(contact));
};

export const addHashToColorCode = (contact) => {
  return Object.assign(contact, {
    color: contact.color ? '#' + contact.color : '000000'
  });
};

export const removeHashFromColorCode = (contact) => {
  return Object.assign(contact, {
    color: contact.color ? contact.color.slice(1) : '000000'
  });
};
