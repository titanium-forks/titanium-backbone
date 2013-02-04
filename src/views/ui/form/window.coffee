styles = require('styles').ui

environment = require 'environment'

Presenter = require 'presenters/view'

{ Window } = require 'views/ui'

{ Button, NavButton } = require 'views/ui'

FormView = require 'views/ui/form'

module.exports = class FormWindow extends Window

  title: 'Form Window'

  initialize: ->

    super

    @configureButtons()
    @presenter ?= @buildForm?()

  render: =>

    @layout { scroll: true, style: @options.layout }, (view) =>

      @prepend? view

      @add (new FormView
        controller: @controller
        presenter: @presenter
        style: @options.formLayout
      ), view

      @add(@buildSaveButton(), view) if @options.saveButtonStyle is 'bottom'

      @append? view

    @

  configureButtons: =>

    @options.saveButton ?= 'Save'
    @options.saveButtonStyle ?= 'nav'
    @options.cancelButtonStyle ?= 'nav'

    if @options.saveButtonStyle is 'nav'

      unless environment.android
        @add @buildSaveButton(), @view, 'setRightNavButton'

      @options.layout = styles.window.layouts.default
      @options.formLayout = {}
    else
      @options.layout = styles.window.layouts.noPadding
      @options.formLayout = styles.window.layouts.default


    unless environment.android
      if @options.cancelButtonStyle is 'nav'
        @view.leftNavButton = @buildCancelButton().render().view

  buildCancelButton: =>

    buttonClass = if @options.cancelButtonStyle is 'nav'
      NavButton
    else
      Button

    new buttonClass
      name: 'cancel-button'
      text: 'Cancel'
      controller: @controller
      click: @close

  buildSaveButton: =>

    buttonClass = if @options.saveButtonStyle is 'nav'
      NavButton
    else
      Button

    buttonPresenter = new Presenter
      text: @options.saveButton
      enabled: false

    @presenterBind 'change:saveable', =>

      buttonPresenter.set
        enabled: @presenter.get 'saveable'

    buttonOptions =
      name: 'save-button'
      controller: @controller
      presenter: buttonPresenter
      click: @save

    unless @options.saveButtonStyle is 'nav'
      buttonOptions.style = styles.form.window.submitButton

    new buttonClass buttonOptions

  save: =>
    @presenter.save()
