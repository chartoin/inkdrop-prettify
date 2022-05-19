'use babel';

import PrettifyMessageDialog from './prettify-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(PrettifyMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'PrettifyMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'PrettifyMessageDialog'
    )
    inkdrop.components.deleteClass(PrettifyMessageDialog);
  }

};
