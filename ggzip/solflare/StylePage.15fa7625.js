"use strict";(self.webpackChunk_rise_wallet_solflare_extension=self.webpackChunk_rise_wallet_solflare_extension||[]).push([["StylePage"],{"../../../node_modules/@mui/material/Container/Container.js":function(e,i,s){s.d(i,{Z:function(){return g}});var t=s("../../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),n=s("../../../node_modules/@babel/runtime/helpers/esm/extends.js"),l=s("../../../node_modules/react/index.js"),r=s("../../../node_modules/clsx/dist/clsx.m.js"),a=s("../../../node_modules/@mui/utils/esm/capitalize.js"),d=s("../../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),x=s("../../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),o=s("../../../node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),c=s("../../../node_modules/@mui/system/esm/styled.js"),m=s("../../../node_modules/@mui/system/esm/createTheme/createTheme.js"),j=s("../../../node_modules/react/jsx-runtime.js");const h=["className","component","disableGutters","fixed","maxWidth","classes"],Z=(0,m.Z)(),u=(0,c.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:s}=e;return[i.root,i[`maxWidth${(0,a.Z)(String(s.maxWidth))}`],s.fixed&&i.fixed,s.disableGutters&&i.disableGutters]}}),v=e=>(0,o.Z)({props:e,name:"MuiContainer",defaultTheme:Z});var p=s("../../../node_modules/@mui/material/utils/capitalize.js"),b=s("../../../node_modules/@mui/material/styles/styled.js"),y=s("../../../node_modules/@mui/material/styles/useThemeProps.js");const P=function(e={}){const{createStyledComponent:i=u,useThemeProps:s=v,componentName:o="MuiContainer"}=e,c=i((({theme:e,ownerState:i})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:i})=>i.fixed&&Object.keys(e.breakpoints.values).reduce(((i,s)=>{const t=s,n=e.breakpoints.values[t];return 0!==n&&(i[e.breakpoints.up(t)]={maxWidth:`${n}${e.breakpoints.unit}`}),i}),{})),(({theme:e,ownerState:i})=>(0,n.Z)({},"xs"===i.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},i.maxWidth&&"xs"!==i.maxWidth&&{[e.breakpoints.up(i.maxWidth)]:{maxWidth:`${e.breakpoints.values[i.maxWidth]}${e.breakpoints.unit}`}}))),m=l.forwardRef((function(e,i){const l=s(e),{className:m,component:Z="div",disableGutters:u=!1,fixed:v=!1,maxWidth:p="lg"}=l,b=(0,t.Z)(l,h),y=(0,n.Z)({},l,{component:Z,disableGutters:u,fixed:v,maxWidth:p}),P=((e,i)=>{const{classes:s,fixed:t,disableGutters:n,maxWidth:l}=e,r={root:["root",l&&`maxWidth${(0,a.Z)(String(l))}`,t&&"fixed",n&&"disableGutters"]};return(0,x.Z)(r,(e=>(0,d.Z)(i,e)),s)})(y,o);return(0,j.jsx)(c,(0,n.Z)({as:Z,ownerState:y,className:(0,r.Z)(P.root,m),ref:i},b))}));return m}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:s}=e;return[i.root,i[`maxWidth${(0,p.Z)(String(s.maxWidth))}`],s.fixed&&i.fixed,s.disableGutters&&i.disableGutters]}}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiContainer"})});var g=P},"../solflare-web/src/pages/Style/index.js":function(e,i,s){s.r(i);var t=s("../../../node_modules/react/jsx-runtime.js"),n=s("../../../node_modules/react/index.js"),l=s("../../../node_modules/@mui/material/Container/Container.js"),r=s("../../../node_modules/@mui/material/Box/Box.js"),a=s("../../../node_modules/@mui/material/Paper/Paper.js"),d=s("../../../node_modules/@mui/material/TableContainer/TableContainer.js"),x=s("../../../node_modules/@mui/material/Table/Table.js"),o=s("../../../node_modules/@mui/material/TableHead/TableHead.js"),c=s("../../../node_modules/@mui/material/TableRow/TableRow.js"),m=s("../../../node_modules/@mui/material/TableCell/TableCell.js"),j=s("../../../node_modules/@mui/material/Typography/Typography.js"),h=s("../../../node_modules/@mui/material/TableBody/TableBody.js"),Z=s("../../../node_modules/@mui/material/Button/Button.js"),u=s("../../../node_modules/@mui/material/Grid/Grid.js"),v=s("../../../node_modules/@mui/material/TextField/TextField.js"),p=s("../../../node_modules/@mui/material/InputAdornment/InputAdornment.js"),b=s("../../../node_modules/@mui/material/MenuItem/MenuItem.js"),y=s("../../../node_modules/@mui/material/FormControl/FormControl.js"),P=s("../../../node_modules/@mui/material/Select/Select.js"),g=s("../../../node_modules/@mui/icons-material/esm/GetApp.js"),T=s("../../../node_modules/@mui/icons-material/esm/Add.js"),I=s("../../../node_modules/@mui/icons-material/esm/Visibility.js");const M=[{variant:"h1",name:"Heading 1",title:"Title 1",font:"Inter, Semibold",sizes:"30 px / 36 px",spacing:"letter 0%"},{variant:"h2",name:"Heading 2",title:"Title 2",font:"Inter, Semibold",sizes:"20 px / 24 px",spacing:"letter 0%"},{variant:"h3",name:"Heading 3",title:"Title 3",font:"Inter, Regular",sizes:"20 px / 30 px",spacing:"letter 0%"},{type:"button",variant:"large",name:"Button L",title:"Large Button",font:"Inter, Regular",sizes:"18 px / 28 px",spacing:"letter 6%"},{type:"button",variant:"medium",name:"Button M",title:"Medium Button",font:"Inter, Regular",sizes:"16 px / 24 px",spacing:"letter 0%"},{type:"button",variant:"small",name:"Button S",title:"Small Button",font:"Inter, Regular",sizes:"14 px / 28 px",spacing:"letter 0%"},{variant:"body1",name:"Body M",title:"Body Medium",font:"Inter, Regular",sizes:"16 px / 28 px",spacing:"letter 0%"},{variant:"body2",name:"Body S",title:"Body Small",font:"Inter, Regular",sizes:"14 px / 21 px",spacing:"letter 0%"},{variant:"subtitle2",name:"Label",title:"Tags & Field Description",font:"Inter, Regular",sizes:"12 px / 18 px",spacing:"letter 0%"},{variant:"caption",name:"Address M",title:"Address",font:"Roboto Mono, Regular",sizes:"16 px / 21 px",spacing:"letter 0%"}];class f extends n.Component{render(){return(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(r.Z,{my:4}),(0,t.jsx)(a.Z,{elevation:2,children:(0,t.jsx)(d.Z,{children:(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(o.Z,{children:(0,t.jsx)(c.Z,{children:(0,t.jsx)(m.Z,{colSpan:2,children:(0,t.jsx)(j.Z,{variant:"h1",color:"textPrimary",children:"Font"})})})}),(0,t.jsx)(h.Z,{children:M.map((e=>(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(m.Z,{width:300,children:"button"===e.type?(0,t.jsx)(Z.Z,{size:e.variant,variant:"text",children:e.name}):(0,t.jsxs)(j.Z,{variant:e.variant,children:[e.name," (",e.variant,")"]})}),(0,t.jsxs)(m.Z,{children:[(0,t.jsx)(j.Z,{variant:"body1",gutterBottom:!0,children:e.title}),(0,t.jsx)(j.Z,{variant:"body2",color:"textSecondary",children:e.font}),(0,t.jsxs)(j.Z,{variant:"body2",component:"span",children:[e.sizes,","," "]}),(0,t.jsx)(j.Z,{variant:"body2",component:"span",color:"textSecondary",children:e.spacing})]})]},`typography-${e.variant}`)))})]})})}),(0,t.jsx)(r.Z,{my:4}),(0,t.jsxs)(a.Z,{elevation:2,children:[(0,t.jsx)(j.Z,{variant:"h1",gutterBottom:!0,children:"Buttons"}),(0,t.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Small"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"contained",children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"contained",disabled:!0,children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",color:"primary",variant:"outlined",children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",color:"primary",variant:"outlined",disabled:!0,children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Small / Text"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"text",children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"text",disabled:!0,children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"text",color:"secondary",children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"text",color:"secondary",disabled:!0,children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Small / Icon"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"contained",startIcon:(0,t.jsx)(g.Z,{}),children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"contained",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"outlined",color:"primary",startIcon:(0,t.jsx)(g.Z,{}),children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"outlined",color:"primary",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Small / Text / Icon"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"text",startIcon:(0,t.jsx)(g.Z,{}),children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"text",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"text",color:"secondary",startIcon:(0,t.jsx)(g.Z,{}),children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"small",variant:"text",color:"secondary",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"SMALL"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Medium"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"contained",children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"contained",disabled:!0,children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",color:"primary",variant:"outlined",children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",color:"primary",variant:"outlined",disabled:!0,children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Medium / Text"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"text",children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"text",disabled:!0,children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"text",color:"secondary",children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"text",color:"secondary",disabled:!0,children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Medium / Icon"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"contained",startIcon:(0,t.jsx)(g.Z,{}),children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"contained",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"outlined",color:"primary",startIcon:(0,t.jsx)(g.Z,{}),children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"outlined",color:"primary",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Medium / Text / Icon"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"text",startIcon:(0,t.jsx)(g.Z,{}),children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"text",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"text",color:"secondary",startIcon:(0,t.jsx)(g.Z,{}),children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"medium",variant:"text",color:"secondary",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"MEDIUM"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Large"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"contained",children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"contained",disabled:!0,children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"outlined",color:"primary",children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"outlined",color:"primary",disabled:!0,children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Large / Text"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"text",children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"text",disabled:!0,children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",color:"secondary",variant:"text",children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",color:"secondary",variant:"text",disabled:!0,children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Large / Icon"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"contained",startIcon:(0,t.jsx)(g.Z,{}),children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"contained",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"outlined",color:"primary",startIcon:(0,t.jsx)(g.Z,{}),children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"outlined",color:"primary",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Large / Text / Icon"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"text",startIcon:(0,t.jsx)(g.Z,{}),children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"text",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"text",color:"secondary",startIcon:(0,t.jsx)(g.Z,{}),children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{size:"large",variant:"text",color:"secondary",disabled:!0,startIcon:(0,t.jsx)(g.Z,{}),children:"LARGE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Link"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{color:"primary",variant:"text",children:"CREATE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{color:"primary",variant:"text",disabled:!0,children:"CREATE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{variant:"text",color:"secondary",children:"CREATE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{variant:"text",color:"secondary",disabled:!0,children:"CREATE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:4,children:(0,t.jsx)(j.Z,{variant:"body1",color:"textSecondary",children:"Link / Icon"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{color:"primary",variant:"text",startIcon:(0,t.jsx)(T.Z,{}),children:"CREATE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{color:"primary",variant:"text",startIcon:(0,t.jsx)(T.Z,{}),disabled:!0,children:"CREATE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{color:"secondary",variant:"text",startIcon:(0,t.jsx)(T.Z,{}),children:"CREATE"})}),(0,t.jsx)(u.ZP,{item:!0,xs:2,children:(0,t.jsx)(Z.Z,{color:"secondary",variant:"text",startIcon:(0,t.jsx)(T.Z,{}),disabled:!0,children:"CREATE"})})]})]}),(0,t.jsx)(r.Z,{my:4}),(0,t.jsxs)(a.Z,{elevation:2,children:[(0,t.jsx)(j.Z,{variant:"subtitle1",children:"Inputs"}),(0,t.jsxs)(u.ZP,{container:!0,spacing:4,sx:{mb:2},children:[(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(v.Z,{fullWidth:!0,variant:"outlined",label:"Basic",value:""})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(v.Z,{fullWidth:!0,variant:"outlined",label:"Basic",value:"",disabled:!0})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(v.Z,{fullWidth:!0,variant:"outlined",label:"Basic",value:"",error:!0})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(v.Z,{fullWidth:!0,variant:"outlined",label:"Basic",value:"hello"})})]}),(0,t.jsxs)(u.ZP,{container:!0,spacing:4,sx:{mb:2},children:[(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(v.Z,{fullWidth:!0,variant:"outlined",label:"Basic Icon",value:"",InputProps:{endAdornment:(0,t.jsx)(p.Z,{position:"end",children:(0,t.jsx)(I.Z,{})})}})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(v.Z,{fullWidth:!0,variant:"outlined",label:"Basic Icon",value:"",disabled:!0,InputProps:{endAdornment:(0,t.jsx)(p.Z,{position:"end",children:(0,t.jsx)(I.Z,{})})}})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(v.Z,{fullWidth:!0,variant:"outlined",label:"Basic Icon",value:"",error:!0,InputProps:{endAdornment:(0,t.jsx)(p.Z,{position:"end",children:(0,t.jsx)(I.Z,{})})}})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(v.Z,{fullWidth:!0,variant:"outlined",label:"Basic Icon",value:"hello",InputProps:{endAdornment:(0,t.jsx)(p.Z,{position:"end",children:(0,t.jsx)(I.Z,{})})}})})]}),(0,t.jsxs)(u.ZP,{container:!0,spacing:4,sx:{mb:2},children:[(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsxs)(v.Z,{select:!0,fullWidth:!0,variant:"outlined",label:"Basic",value:"value",children:[(0,t.jsx)(b.Z,{value:"value",children:"<TextField select>"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsxs)(v.Z,{select:!0,fullWidth:!0,variant:"outlined",label:"Basic",value:"value",disabled:!0,children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsxs)(v.Z,{select:!0,fullWidth:!0,variant:"outlined",label:"Basic",value:"value",error:!0,children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsxs)(v.Z,{select:!0,fullWidth:!0,variant:"outlined",label:"Basic",value:"value",children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})})]}),(0,t.jsxs)(u.ZP,{container:!0,spacing:4,sx:{mb:2},children:[(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(y.Z,{variant:"outlined",fullWidth:!0,children:(0,t.jsxs)(P.Z,{fullWidth:!0,variant:"outlined",value:"value",children:[(0,t.jsx)(b.Z,{value:"value",children:"<Select>"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(y.Z,{variant:"outlined",fullWidth:!0,children:(0,t.jsxs)(P.Z,{select:!0,fullWidth:!0,variant:"outlined",value:"value",disabled:!0,children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(y.Z,{variant:"outlined",fullWidth:!0,children:(0,t.jsxs)(P.Z,{select:!0,fullWidth:!0,variant:"outlined",value:"value",error:!0,children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsx)(y.Z,{variant:"outlined",fullWidth:!0,children:(0,t.jsxs)(P.Z,{select:!0,fullWidth:!0,variant:"outlined",value:"value",children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})})})]}),(0,t.jsxs)(u.ZP,{container:!0,spacing:4,sx:{mb:2},children:[(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsxs)(v.Z,{fullWidth:!0,variant:"standard",label:"Basic",value:"value",children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsxs)(v.Z,{fullWidth:!0,variant:"standard",label:"Basic",value:"value",disabled:!0,children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsxs)(v.Z,{fullWidth:!0,variant:"standard",label:"Basic",value:"value",error:!0,children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})}),(0,t.jsx)(u.ZP,{item:!0,xs:3,children:(0,t.jsxs)(v.Z,{fullWidth:!0,variant:"standard",label:"Basic",value:"value",children:[(0,t.jsx)(b.Z,{value:"value",children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"}),(0,t.jsx)(b.Z,{children:"Test"})]})})]})]}),(0,t.jsx)(r.Z,{my:4}),(0,t.jsx)(a.Z,{elevation:2,children:(0,t.jsx)(d.Z,{children:(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(o.Z,{children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(m.Z,{children:"Header 1"}),(0,t.jsx)(m.Z,{children:"Header 2"}),(0,t.jsx)(m.Z,{children:"Header 3"}),(0,t.jsx)(m.Z,{children:"Header 4"}),(0,t.jsx)(m.Z,{})]})}),(0,t.jsx)(h.Z,{children:[0,1,2,3,4,5,6,7,8].map((e=>(0,t.jsxs)(c.Z,{children:[(0,t.jsxs)(m.Z,{children:["Body cell ",e]}),(0,t.jsx)(m.Z,{children:"Body cell 2"}),(0,t.jsx)(m.Z,{children:"Body cell 3"}),(0,t.jsx)(m.Z,{children:"Body cell 4"}),(0,t.jsx)(m.Z,{children:"Body cell 5"})]},`row-${e}`)))})]})})}),(0,t.jsx)(r.Z,{my:4,height:400}),(0,t.jsx)(r.Z,{my:4}),(0,t.jsx)(r.Z,{my:4}),(0,t.jsx)(r.Z,{my:4})]})}}i.default=f}}]);