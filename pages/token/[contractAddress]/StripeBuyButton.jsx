import React, { useEffect } from 'react';


const StripebuyButton = () => {
  useEffect(() => {
    const loadStripeScript = async () => {

      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        
        const buyButton = document.createElement('stripe-buy-button');
        buyButton.setAttribute('buy-button-id', 'buy_btn_1ORmi4CB4GN3ofZYTdFbsMJe');
        buyButton.setAttribute('publishable-key', 'pk_test_51OQ2NoCB4GN3ofZYkzQyoGEPljvxfkPt9GjsyKbsOc0R1a3PVRPw0rcQ4V4D36e0yDnPuCO2DbGVc3YWinpf6PB600XmupHonT');
        document.body.appendChild(buyButton);

    
        return () => {
         
          if (document.body.contains(buyButton)) {
            document.body.removeChild(buyButton);
          }

      
          const scriptElement = document.querySelector('[src="https://js.stripe.com/v3/buy-button.js"]');
          if (scriptElement && scriptElement.parentNode) {
            scriptElement.parentNode.removeChild(scriptElement);
          }
        };
      };
    };

    loadStripeScript();
  }, []);

  return (
    <div>
      {/* Placeholder for the Buy Button element */}
      <stripe-buy-button />
    </div>
  );
};

export default StripebuyButton;