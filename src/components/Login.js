import React, { useState } from 'react';
import './style/Loginstyle.css';
import NAVBAR from './navbar';


const LoginPage = () => {
  const [form, setForm] = useState({});
 

  const handleRegisterLinkClick = () => {
    document.querySelector('.wrapper').classList.add('active');
  };

  const handleLoginLinkClick = () => {
    document.querySelector('.wrapper').classList.remove('active');
  };
  const readNews = () => {
    window.location.href = '/';
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });
       if (response.ok) {
        const data = await response.json();
        window.location.href = '/'
      } else {
        console.log(alert("Invalid credentials"));
      }
    } catch (error) {
      console.error('Error during login:', error);

    }
  };


  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data); // You can handle the login success response here
        console.log(alert("Register Successful"))
      } else {
        console.log(alert(" TRY DIFFERENT USERNAME AND EMAIL"));
        // Handle login error here (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle other login errors here (e.g., network errors)
    }
  };

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //   }
  // };

  const handleform=(e)=>{
    setForm({...form,
      [e.target.name]:e.target.value
    })
console.log(e.target.value)
  }
//   const handleSubmit= async (e)=>{
//     e.preventDefault();
//     const response = await fetch('http://localhost:8000',{method:'POST',body:JSON.stringify(form),headers:{'Content-Type':'application/json'}});
//     const data = await response.text();
//     console.log(data);
//   }
  return (
    <div>
      <div className='containerss' style={{ width: '100%' }}>
        <div className='menu'></div>

        <div className='main-logo'>
        <img 
          src="https://play-lh.googleusercontent.com/lvAGNNFIBMC3ZgS-JJcSwDzpSjOGMg7FGY14FrffJobLOed9-H2DiuZwknsIwVwKwTjo"
          // src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          className="logo"
          alt=""
          height="50"
          margin-top="2"
        />
          <div className='inshort-text'>
           <div className='text3'> inshorts
           <div className='tagline'>stya informe</div>
        </div>
        </div>
        </div>
        <div className='login2'  onClick={readNews}>Read News</div>
    </div>

    <div className='mainbox-login'>
    <div className="wrapper">
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>

      <div className="form-box login">
        <h2 className="animation" style={{ '--i': 0, '--j': 21 }}>Login</h2>
        <form onSubmit={handleSubmit} >
          <div className="input-box animation" style={{ '--i': 1, '--j': 22 }}>
            <input type="text" name='username' onChange={handleform} required />
            <label htmlFor="username">username</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box animation"  style={{ '--i': 2, '--j': 23 }}>
            <input type="password"  name='password' onChange={handleform}  required />
            <label htmlFor="password">Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn animation" style={{ '--i': 3, '--j': 24 }}>
            Login
          </button>
          <div className="logreg-link animation" style={{ '--i': 4, '--j': 25 }}>
            <p>
              Don't have any account? <a href="#" className="register-link" onClick={handleRegisterLinkClick}>Sign Up</a>
            </p>
          </div>
        </form>
      </div>
      <div className="info-text login">
        <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>Welcome Back!</h2>
        <p className="animation" style={{ '--i': 1, '--j': 21 }}>
          Welcome to the Inshort login page.
        </p>
      </div>

      <div className="form-box register">
        <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>SignUp</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
            <input type="text" name="username" onChange={handleform} required />
            <label htmlFor="username">username</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box animation" style={{ '--i': 19, '--j': 2 }}>
            <input type="text" name='email' onChange={handleform}  required />
            <label htmlFor="email">Email</label>
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box animation" style={{ '--i': 20, '--j': 3 }}>
            <input type="password" name="password" onChange={handleform} required />
            <label htmlFor="password">Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn animation" style={{ '--i': 21, '--j': 4 }}>
            Sign Up
          </button>
          <div className="logreg-link animation" style={{ '--i': 22, '--j': 5 }}>
            <p>
              Already have any account?<a href="#" className="login-link" onClick={handleLoginLinkClick}>Login</a>
            </p>
          </div>
        </form>
      </div>
      <div className="info-text register">
        <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Welcome Back!</h2>
        <p className="animation" style={{ '--i': 18, '--j': 1 }}>
          Welcome to the Inshort SignUp page.
        </p>
      </div>
    </div>
    </div>
    <div className='footer-container'>
      <div className='footer-inshorts-logo'>
        <img
          className='footer-logo'
          src="https://play-lh.googleusercontent.com/lvAGNNFIBMC3ZgS-JJcSwDzpSjOGMg7FGY14FrffJobLOed9-H2DiuZwknsIwVwKwTjo"
          alt="inshorts-logo"
        />
        <div className='footer-inshorts-headline'>
          <h1 className='footer-headline'>inshorts</h1>
        </div>
      </div>
      <p className='footer-description'>
        stay updated
      </p>
      <div className='footer-contact'>
        <h1 className='footer-contact-heading'>Contact Us</h1>
        <h6 className='footer-terms-conditions'>Terms and conditions</h6>
      </div>
    </div>
    <h1>
      {JSON.stringify(form)}
    </h1>
    </div>
  );
};

export default LoginPage;
