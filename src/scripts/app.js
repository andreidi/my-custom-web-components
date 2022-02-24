(() => {
  const importingComponent = document.getElementById('importing-component');
  const addingComponent = document.getElementById('adding-component');

  const escapeHTML = (htmlString) => {
    return htmlString.replace(/[<>&\n]/g, function (x) {
      return {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '\n': '<br />',
      }[x];
    });
  };

  importingComponent.innerHTML = escapeHTML(
    '<script src="components/custom-component/custom-component.js" async></script>'
  );
  addingComponent.innerHTML = escapeHTML(
    '<custom-component></custom-component>'
  );
})();
