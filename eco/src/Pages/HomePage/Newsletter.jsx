import React from 'react'
import"./Newsletter.css"

const Newsletter = () => {
  return (
    <>
    <div className="subscribe">
	<h2 className="subscribe__title">Let's keep in touch</h2>
	<p className="subscribe__copy">Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
	<div className="form">
		<input type="email" className="form__email" placeholder="Enter your email address" />
		<button className="form__button">Send</button>
	</div>

</div>
    </>
  )
}

export default Newsletter