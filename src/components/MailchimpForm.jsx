import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";



export const MailchimpForm = () => {
  const postUrl = `http://eepurl.com/icQr_n`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => {
          <Newsletter 
           status={status}
           message={message}
           onValidated={formData => subscribe(formData)}
          />
        }}
      />
    </>
  );
};

//${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_MAILCHIMP_ID}