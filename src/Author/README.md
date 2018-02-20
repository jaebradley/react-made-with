# Author

Private (i.e API is not publicly exposed) component that determines the maker.

## API

### `identifier(optional; string)`

When specified, is used to format the displayed author.

When `identifier` receives an email address, it creates a hyperlink with a `mailto` URL (using the given email address) and a trailing `FontAwesome` `envelope` icon. The displayed value associated with the `mailto` URL is the `display` prop value or the given email address.

When `identifier` receives a URL