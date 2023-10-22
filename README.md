# Basic node.js server for ssl verification using http

http://<i></i>your-domain.com/.well-known/pki-validation/[a unique file name].txt 

## Overview

Create .well-known folder next to server file and pki-validation folder inside of the .well-known

**Note:** If you have a problem to create .well-known folder like me, write this code to terminal

```bash
mkdir .well-known
```
## Start

```bash
node server.js
```
**Note:** If you have a problem to access the server you must allow "node.js" through the private network windows firewall