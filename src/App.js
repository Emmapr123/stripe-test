import './App.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Creditcardinput from './components/creditcard-input/creditcard-input';
import Googlepay from './components/google-pay/google-pay';

const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <MyCheckoutForm />
      </Elements>
      {/* <Creditcardinput/> */}
      {/* <Googlepay /> */}
    </div>
  );
}

export default App;
