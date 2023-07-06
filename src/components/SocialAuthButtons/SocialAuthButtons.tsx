import StyledButton from '../Button/Button';
import { SocialAuthEndpoint } from './SocialAuthButtons.types';
import AuthService from '../../services/auth/auth.service';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Facebook, Google } from 'src/icons';
import { BUTTON_THEME } from '../Button/Button.types';

const SocialAuthButtons = () => {
  const socialLogin = (social: SocialAuthEndpoint) => {
    AuthService.federateSignIn(CognitoHostedUIIdentityProvider[social]);
  };

  return (
    <>
      <StyledButton onClick={() => socialLogin(SocialAuthEndpoint.Facebook)} theme={BUTTON_THEME.Custom}
                    className="bg-facebook-main hover:bg-facebook-hovered relative">
        <Facebook className="absolute top-[13px] left-[16px] w-[20px] h-[20px]" />
        Connect with Facebook
      </StyledButton>
      <StyledButton onClick={() => socialLogin(SocialAuthEndpoint.Google)} theme={BUTTON_THEME.Custom}
                    className="bg-google-main hover:bg-google-hovered relative">
        <Google className="absolute top-[13px] left-[16px] w-[20px] h-[20px]" />
        Connect with Google
      </StyledButton>
    </>
  );
};

export default SocialAuthButtons;
