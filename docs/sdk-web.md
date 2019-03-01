# Cora Widget

Cora widget is a fully custom interface to communicate and interact with a exclusive customized Bot.


## Features Supports
* Google Chrome last version -1
* Firefox last version -1
* Edge
* IE 11

## Configuration (required)

Before add widget in your website, access chatbot settings in the CORA backoffice and configure Web SDK channel.

Fields:

* Domain - **Domain of the your website**
* Primary color - **Color from your chat**
* Title - **Chat name**

## Add CORA to a website

You can add CORA to an HTML page in one minute.

CSS file:
```html
<link href="http://widget.corahq.com/zupcora-sdk.min.css" rel="stylesheet" />
```

JS file:
```html
<script src="http://widget.corahq.com/zupcora-sdk.min.js"></script>
```

Example:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Cora Embed</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
  <link href="http://widget.corahq.com/zupcora-sdk.min.css" rel="stylesheet" />
</head>
<body>
  <!-- your page -->
<script src="http://widget.corahq.com/zupcora-sdk.min.js"></script>
<script>
    const identifier = "381440c0-3902-11e9-9dfd-2b7947317a2f"

    // custom field example - not required
    // refreshSession bool - true for every time you open a page the session will be restarted
    const options = {
      refreshSession: true,
      customFields: {
        customerName: 'Jonas',
        securityToken: "kjraekreaJj43a4araetrj450"
      }
    }
    zupcora.sdk.init(identifier, options)
  </script>
</body>
</html>

```




