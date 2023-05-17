import React from 'react'
import SocialButtons from './SocialButtons'

function Description() {
  return (
    <div className='logo'>
      <div className='logo_png'>
      <img src="./images/logo192.png" alt="cart"  />
      </div>

<div className=''> 
<div>weebly Themes</div>
<div>Pre-sale Faq's</div>
<div>Submit A ticket</div>
</div>
<div>
<div>services</div>
<div>THeme Tweaks</div>
</div>
<div>
  <div>showcase</div>
  <div>widgetkit</div>
  <div>Support</div>

</div>
<div>
<div>About us</div>
<div>Contact us</div>
<div>Affiliate</div>
<div>Resources</div>
</div>

<hr></hr>
      <SocialButtons/>
      <div>
        <a href='/' className=' fa fa-copyright'>Copyright All Rights Reserved</a>
      </div>
    </div>
  )
}

export default Description