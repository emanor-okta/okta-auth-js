
const URL = require('url');
const ISSUER = process.env.ISSUER;
// eslint-disable-next-line node/no-deprecated-api
const issuer = URL.parse(ISSUER);
const BASE_URL = issuer.protocol + '//' + issuer.host;

async function openOktaHome() {
  return browser.newWindow(BASE_URL, 'Okta-hosted page');
}

async function switchToPopupWindow(existingHandlesCount) {
  await browser.waitUntil(async () => {
    const handles = await browser.getWindowHandles();
    return handles.length > existingHandlesCount;
  });
  const handles = await browser.getWindowHandles();
  return browser.switchToWindow(handles[handles.length - 1]);
}

async function switchToMainWindow() {
  const handles = await browser.getWindowHandles();
  return browser.switchToWindow(handles[0]);
}

async function switchToLastFocusedWindow() {
  const handles = await browser.getWindowHandles();
  return browser.switchToWindow(handles[handles.length - 2]);
}

export { 
  openOktaHome, 
  switchToMainWindow, 
  switchToPopupWindow,
  switchToLastFocusedWindow
};
  