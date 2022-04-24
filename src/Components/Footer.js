import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-sibscription'>
            <p className='footer-subscription-heading'>
                Sign up today to join the adventure
            </p>
            <p className='footer-subscription-text'>
                Get advice from van life experts 
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder= 'Your Email' className='footer-input' />
                </form>
            </div>
        </section>

    </div>
  )
}

export default Footer