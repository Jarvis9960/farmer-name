import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import "./assets/css/style.css";
import "./assets/css/media-query.css";
import "./assets/css/swap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LetYouIn from "./pages/LetYouIn";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import VerifyPhoneNumber from "./pages/VerifyPhoneNumber";
import NotificationAlllow from "./pages/NotificationAllow";
import ForgetPassword from "./pages/ForgetPassword";
import ConfirmOtp from "./pages/ConfirmOtp";
import NewPassword from "./pages/NewPassword";
import PersonalInformation from "./pages/PersonalInformation";
import CreateNewPin from "./pages/CreateNewPin";
import FingerPrintScan from "./pages/FingerPrintScan";
import LanguageSelect from "./pages/LanguageSelect";
import ChooseInterests from "./pages/ChooseInterests";
import ReasonUsing from "./pages/ReasonUsing";
import AmigoGptHome from "./pages/AmigoGptHome";
import PlusSubscription from "./pages/PlusSubscription";
import SubscriptionPayment from "./pages/SubscriptionPayment";
import ConfirmPaymentPin from "./pages/ConfirmPaymentPin";
import Confirmation from "./pages/Confirmation";
import Alert from "./pages/Alert";
import AmigoChat from "./pages/AmigoChat";
import Notification from "./pages/Notification";
import History from "./pages/History";
import BankCards from "./pages/BankCards";
import AddNewCard from "./pages/AddNewCard";
import PaymentMethod from "./pages/PaymentMethod";
import CancelSubscription from "./pages/CancelSubscription";
import Security from "./pages/Security";
import MarketingPreferences from "./pages/MarketingPreferences";
import NotificationSetting from "./pages/NotificationSetting";
import Language from "./pages/Language";
import Currency from "./pages/Currency";
import Faq from "./pages/Faq";
import DataPrivacy from "./pages/DataPrivacy";
import FeedBack from "./pages/FeedBack";
import ContactUs from "./pages/ContactUs";
import AboutAmigoSection from "./pages/Aboutamigo";
import InviteFriends from "./pages/InviteFriends";
import DeleteDeactivate from "./pages/DeleteDeactivate";
import Deactivate from "./pages/Deactivate";
import Delete from "./pages/Delete";
import PersonalInfoUpdate from "./pages/PersonalInfoUpdate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<HomeScreen />} />
        {/*<Route path="/lets_you_in" element={<LetYouIn />} />
            <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/verify_phone_number" element={<VerifyPhoneNumber />} />
        <Route path="/notification_allow" element={<NotificationAlllow />} />
        <Route path="/forget_password" element={<ForgetPassword />} />
        <Route path="/confirm_otp" element={<ConfirmOtp />} />
        <Route path="/new_password" element={<NewPassword />} /> */}
        <Route path="/personal_information" element={<PersonalInformation />} />
       <Route path="/submit_video_kyc" element={<PersonalInfoUpdate />} />
          {/* <Route path="/create_new_pin" element={<CreateNewPin />} />
        <Route path="/finger_print_scan" element={<FingerPrintScan />} />
        <Route path="/language_select" element={<LanguageSelect />} />
        <Route path="/choose_interests" element={<ChooseInterests />} />
        <Route path="/reason_using" element={<ReasonUsing />} />
        <Route path="/Amigo_GPT_home" element={<AmigoGptHome />} />
        <Route path="/plus_subscription" element={<PlusSubscription />} />
        <Route path="/subscription_payment" element={<SubscriptionPayment />} />
        <Route path="/confirm_payment_pin" element={<ConfirmPaymentPin />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/amigo_chat" element={<AmigoChat />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/history" element={<History />} />
        <Route path="/bank_cards" element={<BankCards />} />
        <Route path="/add_new_card" element={<AddNewCard />} />
        <Route path="/payment_method" element={<PaymentMethod />} />
        <Route path="/cancel_subscription" element={<CancelSubscription />} />
        <Route path="/security" element={<Security />} />
        <Route
          path="/marketing_preferences"
          element={<MarketingPreferences />}
        />
        <Route path="/notification_setting" element={<NotificationSetting />} />
        <Route path="/language" element={<Language />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/data_privacy" element={<DataPrivacy />} />
        <Route path="/about_amigo" element={<AboutAmigoSection />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/invite_friends" element={<InviteFriends />} />
        <Route path="/delete_deactivate" element={<DeleteDeactivate />} />
        <Route path="/deactivate" element={<Deactivate />} />
        <Route path="/delete" element={<Delete />} /> */}
      </Routes>
    </div>
  );
}

export default App;
