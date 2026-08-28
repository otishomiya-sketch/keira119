# CSS build

This folder builds the site's static Tailwind CSS (replacing the old
`cdn.tailwindcss.com` runtime script) from the classes actually used in
`../index.html`.

To rebuild after editing classes in index.html:

    cd build
    npm install
    npx tailwindcss -i ./input.css -o ../assets/styles.<hash>.css --minify

Then update the `<link rel="stylesheet">` href in index.html to the new
filename (the hash busts browser caches on every change) and delete the
old `assets/styles.*.css` file.
