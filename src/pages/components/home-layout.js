import React from 'react';
import './home-layout.css';
function HomeLayout(props) {
  return (
    <section class="HomeLayout">
      {props.children}
    </section>
  )
}

export default HomeLayout 