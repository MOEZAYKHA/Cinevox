import styled from "styled-components";

export const CTContainer = styled.div`
    position: relative;
    width:100%;
    // height: 50vh;
    
    // background-size: cover;
    // overflow: hidden;
    top:-82px;
    margin-bottom: 0;
    bottom:0;
    // border-top: 4px solid black;
`;
export const INPUTCT = styled.input`
    width:100%;
    padding:10px;
    box-sizing:border-box;
    background:none;
    outline:none;
    resize:none;
    border:0;font-family:'Montserrat',sans-serif;
    transition:all .3s;
    border-bottom:2px solid #bebed2;
    z-index:2;

    &:focus {
        border-bottom:2px solid #78788c;
    }
`;


export const CTForm = styled.form`
    position: relative;
    width:340px;
    height: 550px;
    background: linear-gradient(0deg, rgba(225,225,225,0.8)0%,  rgba(108,122,137,0.9) 100%);
    border-radius:8px;
    box-shadow:0 0 40px -10px #000;
    margin: 100px auto;
    padding:20px;
    max-width:calc(100vw - 40px);
    box-sizing:border-box;
    top: 50px;
    color: white;
    display:flex;
    flex-direction: column;


    ${INPUTCT}:focus &{
        border-bottom:2px solid #fbae1a;
        transition: 1s;
      }
`;

export const HEADER2 = styled.h2`
    margin:10px 0;
    padding-bottom:10px;w
    width:180px;
    color:white;
    border-bottom:3px solid white;
    text-shadow: 1px 1px black;
`;



export const CTsubmitbtn = styled.button`
    float:right;
    padding:8px 12px;
    margin:8px 0 0;
    font-family:'Montserrat',sans-serif;
    border:1px solid white;
    background:0;
    color:white;
    cursor:pointer;
    transition:all .3s;
    border-radius: 15px;

    &:hover{
        background:#000;
        color:#fff;
        border:1px solid black;
    }
`;

export const CTinfordiv = styled.div`
    content:'Hi';
    position:absolute;
    bottom:-40px;
    right:-20px;
    background: linear-gradient(0deg, rgba(0,0,0,0.5)0%,  rgba(108,122,137,0.5) 100%);

    color:white;
    width:320px;
    padding:16px 4px 16px 0;
    border-radius:6px;
    font-size:13px;
    box-shadow:10px 10px 40px -14px #000;
    
`;

export const SpanCT = styled.span`
    margin:0 5px 0 15px;
`;

export const CTbg = styled.div`
    position: absolute;
    // border: 1px solid red;
    z-index: -1;
    // top:220vh;
    width:100%;
    height:60vh;
    
    background-size: cover;
    filter: blur(1.5px);
`;

export const CTpromptdiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0,0,0,0.5)0%,  rgba(108,122,137,0.5) 100%);
    
    color: white;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CTprompt = styled.div`
    width: 50%;
    height: 10rem;
    padding: 10px 0;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.9) 100%);



    @media screen and (max-width:960px){
        width: 100%;
    }
`;

export const CTcontent = styled.div`
    width: 80%;
    color: white;
`
export const CTBtn = styled.button`
    width: 6rem;
    padding:8px 12px;
    margin:20px auto;
    border:1px solid white;
    background:0;
    color:white;
    cursor:pointer;
    transition:all .3s;
    border-radius: 15px;

    &:hover{
        background:#000;
        color:#fff;
        border:1px solid black;
    }
`