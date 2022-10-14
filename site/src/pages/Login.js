//import { useAuth } from '../components/Authentication';
import '../styling/login.scss';

const Login = () => {
  //const { authed, login } = useAuth();

  function handleLogin() {
    /**if (authed?.authed) return;

    const pass = document.getElementById('password').value;
    login(pass);**/

    const err = document.getElementById('password-error');

    setTimeout(() => {
      err.innerHTML = 'Incorrect password, please try again.';
      err.classList.remove('hidden');
    }, 300);
  }

  return (
    <div className="container box-shadow center">
      <div className="titles">  
        <h2 className="title">Member Login</h2>
        <h4 className="sub-title">icanbackup.dev</h4>
      </div>

      <div className="form">
        <div className="form-field">
          <div className="form-input">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
            </svg>
            <input id="password" type="password" placeholder="Enter Password" required />
          </div>
          <div className="form-feedback">
            <p id="password-error" className="hidden">An unknown error occured!</p>
          </div>
        </div>

        <div className="options">
          <div className="option remember-me">
            <input id="remember-me" type="checkbox" />
            <label for="remember-me">Remember me?</label>
          </div>
        </div>

        <button className="form-submit" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;