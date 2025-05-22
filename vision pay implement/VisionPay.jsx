import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const PaymentScreen = () => {
  const [paymentUrl, setPaymentUrl] = useState(null);

  const handlePayment = async () => {
    // Call VisionPay API to generate payment URL (replace with actual API call)
    const response = await fetch('https://api.visionpay.com.au/create-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: JSON.stringify({
        amount: 100, // Example amount
        currency: 'AUD', // Example currency
        order_id: '123456', // Example order ID
      }),
    });
    const data = await response.json();
    
    if (data.success) {
      // Set the payment URL for the WebView
      setPaymentUrl(data.payment_url);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Proceed to Payment" onPress={handlePayment} />
      {paymentUrl && (
        <WebView
          source={{ uri: paymentUrl }}
          onNavigationStateChange={(event) => {
            if (event.url.includes('payment-success')) {
              // Handle successful payment
              alert('Payment successful!');
            }
            if (event.url.includes('payment-failure')) {
              // Handle payment failure
              alert('Payment failed!');
            }
          }}
        />
      )}
    </View>
  );
};

export default PaymentScreen;
