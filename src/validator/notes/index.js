const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResul = NotePayloadSchema.validate(payload);
    if (validationResul.error) {
      throw new InvariantError(validationResul.error.message);
    }
  },
};

module.exports = NotesValidator;