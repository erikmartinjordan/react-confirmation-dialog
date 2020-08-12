# react-confirmation-dialog

![react-confirmation-dialog version](https://img.shields.io/npm/v/react-confirmation-dialog)
![react-confirmation-dialog license](https://img.shields.io/npm/l/react-confirmation-dialog)

Shows a confirmation dialog (modal) and the user needs to accept or cancel.

## Installation

```
npm i --save react-confirmation-dialog
```

## Example

![react-emoji-dialog](https://github.com/erikmartinjordan/react-confirmation-dialog/blob/master/Screenshot%202020-08-12%20at%2016.44.20.png?raw=true)

## How to use

```jsx
import React, { useState } from 'react';
import Confirmation        from './Confirmation'

function App() {
    
    const [display, setDisplay] = useState(true);
    
    const acceptFunction = () => {
        
        console.log('Accept');
        setDisplay(false);
        
    }
    
    const cancelFunction = () => {
        
        console.log('Cancel');
        setDisplay(false);
        
    }
    
    return (
        <div>
            { display
            ? <Confirmation
                mainMessage     = {'Do you want to download your data?'}
                acceptFunction  = {acceptFunction}
                acceptButton    = {'Accept'}
                cancelFunction  = {cancelFunction}
                cancelButton    = {'Cancel'}
              />
            : null   
            }
        </div>
    );
    
}

export default App;
```

## Author

[Erik Martín Jordán](https://erikmartinjordan.com)

## License

This component is open source and available under the MIT License.