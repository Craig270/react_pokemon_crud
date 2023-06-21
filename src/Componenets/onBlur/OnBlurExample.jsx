import React from 'react'

const OnBlurExample = () => {
    const handleBlur = () => {
        console.log('Input blurred');
        // Perform additional actions or logic here
        console.log(`You click out of this text box.`);
    };
    
      return <input type="text" onBlur={handleBlur} />;
    
}


export default OnBlurExample;