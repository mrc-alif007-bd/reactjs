
import Footer from "./components/Footer"
import Left_bar from "./components/Left_bar"
import Nav from "./components/Nav"
import Right_bar from "./components/Right_bar"
function About() {
  return (
    <>
<Nav></Nav>
  
<div className="container-fluid text-center">    
  <div className="row content">
    <Left_bar></Left_bar>
    <div className="col-sm-8 text-left"> 
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <hr/>
      <h3>Test</h3>
      <p>Lorem ipsum...</p>
    </div>
<Right_bar></Right_bar>
  </div>
</div>
<Footer></Footer>

    </>
  )
}

export default About