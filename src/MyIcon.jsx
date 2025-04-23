import ansi from "./icons/ansi.svg";
import calLaw from "./icons/calLaw.svg";
import ecfr from "./icons/ecfr.svg";

function MyIcon(props){
  const x = props.props
    if(x == "osha"){
      return<><img src={ecfr} style={{width: "25px"}} className="me-2" /></>
    }
    else if(x == "ANSI"){
      return<><img src={ansi} style={{width: "25px"}}  className="me-2"/></>
    }
    else if(x == "state"){
      return<><img src={calLaw} style={{width: "25px"}}  className="me-2"/></>
    }
    else return null
  }

  export default MyIcon;