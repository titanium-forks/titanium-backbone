colors = require('styles/theme').colors
helpers = require 'styles/helpers'

module.exports =

  inline:
    view:
      width: Ti.UI.FILL
      color: colors.form.value
      font:
        fontSize: 14
  standalone:
    view:
      helpers.deviceStyles
        default:
          height: 44
          width: Ti.UI.FILL
          bottom: 11
          color: colors.form.value
          borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
          textAlign: 'left'
          font:
            fontSize: 22
        android:
          softKeyboardOnFocus: Ti.UI.Android?.SOFT_KEYBOARD_SHOW_ON_FOCUS
    button:
      helpers.deviceStyles
        default:
          right: 7
          backgroundColor: colors.bar
          height: 30
          width: 50
        ios:
          style: Ti.UI.iPhone.SystemButtonStyle.BAR
