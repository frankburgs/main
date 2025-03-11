# To-do
- Diagram fab repo
- Use svg in jsx
- mousetrap
- Cat in worn flowing robes (console)
- elbow tendon extension stretch

# FX
- Stack multiple differently blurred lines with center white top for neon.
``` css
filter: blur(5px);
```

# Editor

- Right click anywhere : menu options
- Right click tool icon : more options
- Hold shift + click tools : alternate function
- Click object twice : swap manipulation tool

# Notes
- Write svg delimiter line locations at bottom of files if unable to reference externally.
- Trace simpler images to convert to svg or use tools.
- Modifying width, height, and stroke may change the other values as well.
- Use smallest font size and build from there.
- Go for the simplest visual interpretation with the fewest lines and build.

# Good practices
- Avoid inline styles.

## Print
- Tailwind has a stroke-width utility, try to convert color of all items in the svg to black for printing, as well as reducing stroke-width to reduce ink usage.
- Use print-none for legend.

## Sanitization
- Delete ?xml element before the svg element.
- Delete sodipodi:nameview element.