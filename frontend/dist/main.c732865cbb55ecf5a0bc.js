/*! For license information please see main.c732865cbb55ecf5a0bc.js.LICENSE.txt */
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Nb=Xb(kb||(kb=Hb`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),zb=Xb(Jb||(Jb=Hb`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Tb=$F("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_b=$F((function(t){const{className:r,classes:n,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:l,in:c,onExited:u,timeout:d}=t,[p,A]=e.useState(!1),h=(0,eB.Z)(r,n.ripple,n.rippleVisible,a&&n.ripplePulsate),f={width:l,height:l,top:-l/2+i,left:-l/2+o},g=(0,eB.Z)(n.child,p&&n.childLeaving,a&&n.childPulsate);return c||p||A(!0),e.useEffect((()=>{if(!c&&null!=u){const e=setTimeout(u,d);return()=>{clearTimeout(e)}}}),[u,c,d]),(0,s.jsx)("span",{className:h,style:f,children:(0,s.jsx)("span",{className:g})})}),{name:"MuiTouchRipple",slot:"Ripple"})(Pb||(Pb=Hb`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }