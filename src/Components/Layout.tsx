import React from 'react'
import NavMenu from './NavMenu';

type LayoutProps = {
    children:any;

}

const Layout = (props: LayoutProps) => {
  return (
      <div>
              {props.children}
          <div style={{ marginTop: "100px" }}></div>
      </div>
  )
}

export default Layout