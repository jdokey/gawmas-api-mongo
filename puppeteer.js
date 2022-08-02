const puppeteer = require('puppeteer');

puppeteer.launch().then(function(browser) {
  browser.newPage().then(function(page) {
      page.goto('https://gadnrwrd.maps.arcgis.com/apps/dashboards/2ff479b38e4c4f2894fe1b8c5a53e4b2').then(function() {
          page.addScriptTag({url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'});
          page.evaluate("$('div.dashboard-container.shadow-2.calcite-theme-light.flex.flex-auto.flex-col.overflow-hidden > div.panel-container.flex.flex-col.top-panel-container.flex-none > div > div > div > div.flex-none.self-center.shrink.overflow-hidden.ml-rtl-4.flex.items-baseline > div.title.pointer-events-none.text-ellipsis.mr-rtl-2').text()").then(function(result) {
              console.info(result);
              browser.close();
          });
      });
  });
});