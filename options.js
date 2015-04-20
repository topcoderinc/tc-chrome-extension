// Saves options to chrome.storage.sync.
function save_options() {
  var apiKey = document.getElementById('apiKey').value;
  chrome.storage.sync.set({
    ezApiKey: apiKey
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved. Please continue to be awesome.';
    setTimeout(function() {
      status.textContent = '';
    }, 1500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    ezApiKey: ''
  }, function(items) {
    document.getElementById('apiKey').value = items.ezApiKey;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
