

# To-do
- Incorporate implementation for external links (reduced toolbar, new window)
- Use hearing icon for anecdote.
- Use eye icon for observation.
- Incorporate Ca code tab icon.
- Incorporate ANSI (tab?) icon.
- Incorporate eCFR icon.
- Move to Vite/React/Tailwind development.
- 3-line hamberger menu icon rotate 90 on hover.

# Notes
- ANSI bg color #1974bb

# Implementation


``` js Use to style anchor tags from observations
import React from 'react';
import './styles.css'; // Import your CSS file

const MyComponent = () => {
  return (
    <div
      className="custom-html"
      dangerouslySetInnerHTML={{
        __html: '<a href="https://example.com">Link</a>',
      }}
    />
  );
};

export default MyComponent;
```

``` css
.custom-html a {
  @apply text-blue-500 hover:underline;
}
```

``` js Use to open reference links
window.open("https://www.google.com", "_blank", "location=no,menubar=no,toolbar=no,status=no,scrollbars=no,resizable=no");
```


# Shortcuts
- Shift + Alt + F : auto-indent code-block

# Weld safety table
- ✅ Backup images
- ✅ Format observations content to HTML only (remove Bootstrap classes).