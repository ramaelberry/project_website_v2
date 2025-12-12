import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import './SignIn.css'

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
      </div>
    </div>
  )
}

export default SignInPage
