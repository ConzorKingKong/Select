"use strict";

(function () {
  var options = INSTALL_OPTIONS;

  function updateElement() {}

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  INSTALL_SCOPE = {
    setOptions: function setOptions(nextOptions) {
      options = nextOptions;

      updateElement();
    }
  };
})();