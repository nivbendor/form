import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/jsform/241623618093153';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="">
     
                <div id="jotform-embed"></div>
              </div>
    
  );
};

export default App;