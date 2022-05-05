import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-sibscription'>
            <p className='footer-subscription-heading'>
                Sign up today to join the adventure!
            </p>
            <p className='footer-subscription-text'>
                Get advice from van life experts 
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder= 'Your Email' className='footer-input' />
                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Why Van Life</h2>
                    <Link to='/sign-up'>First Steps</Link>
                    <Link to='/locations'>Places to See</Link>
                    <Link to='/tips'>Careers</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Why Van Life</h2>
                    <Link to='/sign-up'>First Steps</Link>
                    <Link to='/locations'>Places to See</Link>
                    <Link to='/tips'>Careers</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Why Van Life</h2>
                    <Link to='/sign-up'>First Steps</Link>
                    <Link to='/locations'>Places to See</Link>
                    <Link to='/tips'>Careers</Link>
                </div>
            </div>

        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/'className='social-logo'>
                        Van Life <i className='fab fa-typo3' />
                    </Link>

                </div>
                <small className='website-rights'>Van Life 2022</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Footer