document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('textArea');
    const saveButton = document.getElementById('saveButton');
    const savedText = document.getElementById('savedText');
  
    // Load previously saved text
    chrome.storage.sync.get('savedText', function(data) {
      if (data.savedText) {
        savedText.textContent = `Saved Text: ${data.savedText}`;
      }
    });
  
    // Save text when button is clicked
    saveButton.addEventListener('click', function() {
      const textToSave = textArea.value.trim();
      if (textToSave) {
        chrome.storage.sync.set({ 'savedText': textToSave }, function() {
          savedText.textContent = `Saved Text: ${textToSave}`;
        });
      }
    });
  });
  