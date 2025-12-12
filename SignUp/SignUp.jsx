import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import './SignUp.css'

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
      </div>
    </div>
  )
}

export default SignUpPage

