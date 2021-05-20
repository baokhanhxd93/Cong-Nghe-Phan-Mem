import React, { useEffect, useState } from 'react'

import "../../assets/scss/Layout/homepage.scss"

export default function Homepage() {

  const renderContent = () => {
  		return(
        	<h1>Anh Khánh đẹp trai quá, Yêu anh</h1>
        )
    }

  return <div className="homepage">{renderContent()}</div>;
}