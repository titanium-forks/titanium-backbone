// Generated by CoffeeScript 1.3.3
var Ti, Titanium, TitaniumButton, TitaniumButtonBar, TitaniumLabel, TitaniumMapAnnotationView, TitaniumMapView, TitaniumNavigationGroup, TitaniumScrollView, TitaniumSearchBar, TitaniumTab, TitaniumTabGroup, TitaniumTabbedBar, TitaniumTableView, TitaniumTableViewRow, TitaniumTextArea, TitaniumTextField, TitaniumView, TitaniumWebView, TitaniumWindow, locationServicesEnabled,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  _this = this;

Ti = Titanium = {};

Ti.App = {};

Ti.App.Properties = {
  store: {},
  getString: function(key) {
    return Ti.App.Properties.store[key];
  },
  setString: function(key, value) {
    return Ti.App.Properties.store[key] = value;
  }
};

Ti.Platform = {
  createUUID: function() {
    return 'this-is-a-random-string';
  },
  model: 'Simulator'
};

Ti.UI = {
  createWindow: function(attributes) {
    return console.log('Create window');
  },
  SIZE: 'size'
};

TitaniumView = (function() {

  function TitaniumView(attributes) {
    var name, value;
    for (name in attributes) {
      value = attributes[name];
      this[name] = value;
    }
    this.children = [];
  }

  TitaniumView.prototype.addEventListener = function(name, event) {
    return this.on(name, event);
  };

  TitaniumView.prototype.fireEvent = function(name, event) {
    return this.trigger(name, event);
  };

  TitaniumView.prototype.add = function(view) {
    return this.children.push(view);
  };

  TitaniumView.prototype.remove = function(view) {
    return this.children = _.without(this.children, view);
  };

  TitaniumView.prototype.getChildren = function() {
    return this.children;
  };

  return TitaniumView;

})();

Ti.UI.createView = function(attributes) {
  return new TitaniumView(attributes);
};

_.extend(TitaniumView.prototype, Backbone.Events);

Ti.UI.iPhone = {
  ActivityIndicatorStyle: {
    "DARK": "DARK"
  },
  SystemButtonStyle: {
    "DONE": "DONE"
  },
  SystemButton: {
    "DISCLOSURE": "DISCLOSURE"
  },
  TableViewCellSelectionStyle: 'table-view-cell-selection-style'
};

TitaniumTabbedBar = (function(_super) {

  __extends(TitaniumTabbedBar, _super);

  function TitaniumTabbedBar() {
    return TitaniumTabbedBar.__super__.constructor.apply(this, arguments);
  }

  return TitaniumTabbedBar;

})(TitaniumView);

Ti.UI.iOS = {
  createTabbedBar: function(attributes) {
    return new TitaniumTabbedBar(attributes);
  }
};

TitaniumButton = (function(_super) {

  __extends(TitaniumButton, _super);

  function TitaniumButton() {
    return TitaniumButton.__super__.constructor.apply(this, arguments);
  }

  return TitaniumButton;

})(TitaniumView);

Ti.UI.createButton = function(attributes) {
  return new TitaniumButton(attributes);
};

TitaniumButtonBar = (function(_super) {

  __extends(TitaniumButtonBar, _super);

  function TitaniumButtonBar() {
    return TitaniumButtonBar.__super__.constructor.apply(this, arguments);
  }

  TitaniumButtonBar.prototype.show = function() {
    return this.visible = true;
  };

  TitaniumButtonBar.prototype.hide = function() {
    return this.visible = false;
  };

  return TitaniumButtonBar;

})(TitaniumView);

Ti.UI.createButtonBar = function(attributes) {
  return new TitaniumButtonBar(attributes);
};

TitaniumLabel = (function(_super) {

  __extends(TitaniumLabel, _super);

  function TitaniumLabel() {
    return TitaniumLabel.__super__.constructor.apply(this, arguments);
  }

  return TitaniumLabel;

})(TitaniumView);

Ti.UI.createLabel = function(attributes) {
  return new TitaniumLabel(attributes);
};

TitaniumScrollView = (function(_super) {

  __extends(TitaniumScrollView, _super);

  function TitaniumScrollView() {
    return TitaniumScrollView.__super__.constructor.apply(this, arguments);
  }

  return TitaniumScrollView;

})(TitaniumView);

Ti.UI.createScrollView = function(attributes) {
  return new TitaniumScrollView(attributes);
};

TitaniumSearchBar = (function(_super) {

  __extends(TitaniumSearchBar, _super);

  function TitaniumSearchBar() {
    return TitaniumSearchBar.__super__.constructor.apply(this, arguments);
  }

  TitaniumSearchBar.prototype.showCancel = false;

  TitaniumSearchBar.prototype.blur = function() {
    return this.fireEvent('blur');
  };

  return TitaniumSearchBar;

})(TitaniumView);

Ti.UI.createSearchBar = function(attributes) {
  return new TitaniumSearchBar(attributes);
};

TitaniumTabGroup = (function(_super) {

  __extends(TitaniumTabGroup, _super);

  function TitaniumTabGroup() {
    return TitaniumTabGroup.__super__.constructor.apply(this, arguments);
  }

  TitaniumTabGroup.prototype.addTab = function(tab) {
    return this.add(tab);
  };

  TitaniumTabGroup.prototype.getTabs = function() {
    return this.children;
  };

  TitaniumTabGroup.prototype.setTabs = function(children) {
    this.children = children;
  };

  TitaniumTabGroup.prototype.open = function() {};

  return TitaniumTabGroup;

})(TitaniumView);

TitaniumTab = (function(_super) {

  __extends(TitaniumTab, _super);

  function TitaniumTab() {
    return TitaniumTab.__super__.constructor.apply(this, arguments);
  }

  TitaniumTab.prototype.setWindow = function(window) {
    this.window = window;
  };

  return TitaniumTab;

})(TitaniumView);

Ti.UI.createTabGroup = function(attributes) {
  return new TitaniumTabGroup(attributes);
};

Ti.UI.createTab = function(attributes) {
  return new TitaniumTab(attributes);
};

TitaniumTableView = (function(_super) {

  __extends(TitaniumTableView, _super);

  function TitaniumTableView() {
    return TitaniumTableView.__super__.constructor.apply(this, arguments);
  }

  TitaniumTableView.prototype.appendRow = function(row) {
    return this.add(row);
  };

  TitaniumTableView.prototype.deleteRow = function(row) {};

  TitaniumTableView.prototype.setData = function(data) {
    this.data = data;
  };

  TitaniumTableView.prototype.setFooterView = function(footerView) {
    this.footerView = footerView;
  };

  return TitaniumTableView;

})(TitaniumView);

TitaniumTableViewRow = (function(_super) {

  __extends(TitaniumTableViewRow, _super);

  function TitaniumTableViewRow() {
    return TitaniumTableViewRow.__super__.constructor.apply(this, arguments);
  }

  return TitaniumTableViewRow;

})(TitaniumView);

Ti.UI.createTableView = function(attributes) {
  return new TitaniumTableView(attributes);
};

Ti.UI.createTableViewRow = function(attributes) {
  return new TitaniumTableViewRow(attributes);
};

TitaniumTextArea = (function(_super) {

  __extends(TitaniumTextArea, _super);

  function TitaniumTextArea() {
    return TitaniumTextArea.__super__.constructor.apply(this, arguments);
  }

  TitaniumTextArea.prototype.setValue = function(value) {
    this.value = value;
    return this.trigger('change', {
      value: this.value
    });
  };

  return TitaniumTextArea;

})(TitaniumView);

Ti.UI.createTextArea = function(attributes) {
  return new TitaniumTextArea(attributes);
};

TitaniumTextField = (function(_super) {

  __extends(TitaniumTextField, _super);

  function TitaniumTextField() {
    return TitaniumTextField.__super__.constructor.apply(this, arguments);
  }

  TitaniumTextField.prototype.setValue = function(value) {
    this.value = value;
    return this.trigger('change', {
      value: this.value
    });
  };

  return TitaniumTextField;

})(TitaniumView);

Ti.UI.createTextField = function(attributes) {
  return new TitaniumTextField(attributes);
};

TitaniumWebView = (function(_super) {

  __extends(TitaniumWebView, _super);

  function TitaniumWebView() {
    return TitaniumWebView.__super__.constructor.apply(this, arguments);
  }

  TitaniumWebView.prototype.canGoBack = function() {
    return true;
  };

  TitaniumWebView.prototype.canGoForward = function() {
    return true;
  };

  TitaniumWebView.prototype.goBack = function() {};

  TitaniumWebView.prototype.goForward = function() {};

  return TitaniumWebView;

})(TitaniumView);

Ti.UI.createWebView = function(attributes) {
  return new TitaniumWebView(attributes);
};

TitaniumWindow = (function(_super) {

  __extends(TitaniumWindow, _super);

  function TitaniumWindow() {
    return TitaniumWindow.__super__.constructor.apply(this, arguments);
  }

  TitaniumWindow.prototype.open = function() {
    return this.trigger('open');
  };

  TitaniumWindow.prototype.close = function() {
    return this.trigger('close');
  };

  TitaniumWindow.prototype.setLeftNavButton = function(leftNavButton) {
    this.leftNavButton = leftNavButton;
  };

  TitaniumWindow.prototype.setRightNavButton = function(rightNavButton) {
    this.rightNavButton = rightNavButton;
  };

  return TitaniumWindow;

})(TitaniumView);

Ti.UI.createWindow = function(attributes) {
  return new TitaniumWindow(attributes);
};

TitaniumNavigationGroup = (function(_super) {

  __extends(TitaniumNavigationGroup, _super);

  function TitaniumNavigationGroup() {
    return TitaniumNavigationGroup.__super__.constructor.apply(this, arguments);
  }

  TitaniumNavigationGroup.prototype.open = function() {
    return this.trigger('open');
  };

  TitaniumNavigationGroup.prototype.close = function() {
    return this.trigger('close');
  };

  return TitaniumNavigationGroup;

})(TitaniumView);

Ti.UI.iPhone.createNavigationGroup = function(attributes) {
  return new TitaniumNavigationGroup(attributes);
};

locationServicesEnabled = true;

Ti.Geolocation = {
  "PROVIDER_GPS": "PROVIDER_GPS",
  locationServicesEnabled: locationServicesEnabled
};

Ti.Geolocation.getCurrentPosition = function(callback) {
  return callback({
    coords: {
      latitude: 20,
      longitude: 30
    }
  });
};

Ti.Map = {};

TitaniumMapView = (function(_super) {

  __extends(TitaniumMapView, _super);

  function TitaniumMapView(attributes) {
    var name, value;
    for (name in attributes) {
      value = attributes[name];
      this[name] = value;
    }
    this.children = [];
    this.annotations = [];
  }

  TitaniumMapView.prototype.addAnnotation = function(annotation) {
    return this.annotations.push(annotation);
  };

  TitaniumMapView.prototype.removeAnnotation = function(annotation) {
    return this.annotations = _.without(this.annotations, annotation);
  };

  return TitaniumMapView;

})(TitaniumView);

TitaniumMapAnnotationView = (function(_super) {

  __extends(TitaniumMapAnnotationView, _super);

  function TitaniumMapAnnotationView() {
    return TitaniumMapAnnotationView.__super__.constructor.apply(this, arguments);
  }

  return TitaniumMapAnnotationView;

})(TitaniumView);

Ti.Map.createAnnotation = function(attributes) {
  return new TitaniumMapAnnotationView(attributes);
};

Ti.Map.createView = function(attributes) {
  return new TitaniumMapView(attributes);
};
