hello

# Web
- notes imgs -> svg
- Battery process flowchart
- Convert to TW
- shelver, 11/16" & 1-7/16" widths, lengths : 
- Weld safety pics, original in main, altered in prod (callouts, circles etc.)
- Add NFPA purchasing to Weld safety list & fix spelling
- Implement NFPA NEC
- 2x SVG generation cleanup document
- Avatars 2x (prod & dev diff)
- Node program convert .md to .html

# Practices !1x
- Always include callouts (leged, title) in diagrams.
- Never use verbal or handwritten, printed or virtual only.
- Always include temporary bracing.
- Use periods in large notes text files not in shorter lists
- Text nowrap for legibility
- Comment every line of code
- Flowchart processes
- 5-why, 5-s, kaizen, Toyota production systems
- JHA per title
- "Consumer products" safety issue
- OSHA citations list review

## Color scheme
- Yellow : metal other than fasteners.
- Green : wood
- Blue : fasteners
- Red : safety

## markdown to html
- Single hashtag, if preceded by newline, -> h1 start, bool on
- h1 end before next newline, bool off
- Double hashtags -> h2 start
- h2 end -> before next newline

``` js
const fs = require('fs');
const path = require('path');

// Define source and destination file paths

const sourcePath = path.join(__dirname, 'source.txt');
const destinationPath = path.join(__dirname, 'destination.txt');

// Define the text to replace and its replacement

const targetText = 'oldSequence';
const replacementText = 'newSequence';

// Read the source file

fs.readFile(sourcePath, 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading source file:', err);
  }

  // Replace all occurrences

  const updatedData = data.replace(new RegExp(targetText, 'g'), replacementText);

  // Write the updated content to the destination file

  fs.writeFile(destinationPath, updatedData, 'utf8', (err) => {
    if (err) {
      return console.error('Error writing to destination file:', err);
    }
    console.log('File copied and modified successfully!');
  });
});

```
